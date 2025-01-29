"use client";
import React, { useState } from 'react';
import { useSelector } from 'react-redux'; // Para acceder al carrito en el state global
import { createPaymentIntent } from '../utils/payamentService'; // Asegúrate de configurar esta función
import { QRCodeCanvas } from 'qrcode.react';

const store_id = process.env.NAVE_STORE_ID;
const miTienda = "lumarvelas.com.ar"
const PurchaseSummary = () => {
  const cart = useSelector((state) => state.cart); // Acceso al carrito desde Redux
  const { items, total } = cart;

  const [buyer, setBuyer] = useState({
    name: '',
    email: '',
    docNumber: '',
    street: '',
    city: '',
    region: '',
    country: 'AR',
    zipcode: '',
  });

  const [loading, setLoading] = useState(false);
  const [qrData, setQrData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyer({ ...buyer, [name]: value });
  };

  const handlePayWithQR = async () => {
    setLoading(true);
    try {
      const paymentDetails = {
        store_id: store_id,
        platform: miTienda,
        callback_url: `https://${miTienda}/user/payment-success`,
        order_id: Date.now(),
        mobile: false,
        payment_request: {
          transactions: [
            {
              products: items.map((item) => ({
                id: item.id,
                name: item.name,
                description: item.fragance.join(', '),
                quantity: item.quantity,
                unit_price: {
                  currency: 'ARS',
                  value: item.price.toFixed(2),
                },
              })),
              amount: {
                currency: 'ARS',
                value: total.toFixed(2),
              },
            },
          ],
          buyer: {
            user_id: buyer.email,
            doc_type: 'DNI',
            doc_number: buyer.docNumber,
            user_email: buyer.email,
            name: buyer.name,
            billing_address: {
              street_1: buyer.street,
              city: buyer.city,
              region: buyer.region,
              country: buyer.country,
              zipcode: buyer.zipcode,
            },
          },
        },
      };

      const paymentIntent = await createPaymentIntent(paymentDetails);
      setQrData(paymentIntent.data.qr_data);
    } catch (error) {
      console.error('Error al procesar el pago con QR:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRedirectToApp = async () => {
    setLoading(true);
    try {
      const paymentDetails = {
        store_id: store_id,
        platform: miTienda,
        callback_url:  `https://${miTienda}/user/payment-success`,
        order_id: Date.now(),
        mobile: true,
        payment_request: {
          transactions: [
            {
              products: items.map((item) => ({
                id: item.id,
                name: item.name,
                description: item.fragance.join(', '),
                quantity: item.quantity,
                unit_price: {
                  currency: 'ARS',
                  value: item.price.toFixed(2),
                },
              })),
              amount: {
                currency: 'ARS',
                value: total.toFixed(2),
              },
            },
          ],
          buyer: {
            user_id: buyer.email,
            doc_type: 'DNI',
            doc_number: buyer.docNumber,
            user_email: buyer.email,
            name: buyer.name,
            billing_address: {
              street_1: buyer.street,
              city: buyer.city,
              region: buyer.region,
              country: buyer.country,
              zipcode: buyer.zipcode,
            },
          },
        },
      };

      const paymentIntent = await createPaymentIntent(paymentDetails);
      window.location.href = paymentIntent.data.redirect_to;
    } catch (error) {
      console.error('Error al redirigir a la app:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">Resumen de Compra</h2>
      <ul className="mb-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex justify-between border-b py-2 text-sm"
          >
            <span>{item.name} (x{item.quantity})</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between text-lg font-bold border-t pt-2">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <form className="mt-4 space-y-4">
        <input
          type="text"
          name="name"
          value={buyer.name}
          onChange={handleChange}
          placeholder="Nombre completo"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={buyer.email}
          onChange={handleChange}
          placeholder="Correo electrónico"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="docNumber"
          value={buyer.docNumber}
          onChange={handleChange}
          placeholder="DNI"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="street"
          value={buyer.street}
          onChange={handleChange}
          placeholder="Dirección"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="city"
          value={buyer.city}
          onChange={handleChange}
          placeholder="Ciudad"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="region"
          value={buyer.region}
          onChange={handleChange}
          placeholder="Provincia/Región"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="zipcode"
          value={buyer.zipcode}
          onChange={handleChange}
          placeholder="Código postal"
          className="w-full p-2 border rounded"
          required
        />
      </form>

      <div className="mt-4 space-y-4">
        <button
          onClick={handlePayWithQR}
          disabled={loading}
          className={`w-full bg-green-600 text-white py-2 px-4 rounded-lg ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Procesando...' : 'Pagar con QR'}
        </button>
        <button
          onClick={handleRedirectToApp}
          disabled={loading}
          className={`w-full bg-blue-600 text-white py-2 px-4 rounded-lg ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Procesando...' : 'Redirigir a la App'}
        </button>
      </div>

      {qrData && (
        <div className="mt-6 text-center">
          <p className="text-sm mb-2">Escanea este QR para completar tu pago:</p>
          <QRCodeCanvas value={qrData} size={200} />
        </div>
      )}
    </div>
  );
};

export default PurchaseSummary;
