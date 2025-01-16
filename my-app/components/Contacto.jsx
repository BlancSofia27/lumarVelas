"use client";
import { useState } from 'react';
import Swal from 'sweetalert2'; // Asegúrate de tener sweetalert2 importado
import { sendEmail } from '../utils/email'; // Asegúrate de que esta función esté definida

export default function Contacto() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Validación de campos vacíos
    const { name, email, phone, message } = formData;
    if (!name || !email || !phone || !message) {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Completa todos los campos para realizar la consulta',
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    // Enviar la consulta por email
    const dataToSend = {
      name,
      email,
      phone,
      message,
    };

    try {
      await sendEmail(dataToSend); // Llama a la función que maneja el envío del email
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Consulta Realizada',
        showConfirmButton: false,
        timer: 1500,
      });
      resetForm();
    } catch (error) {
      console.error('Error al enviar la consulta:', error);
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Hubo un problema al enviar la consulta',
        showConfirmButton: true,
      });
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-l from-verde to-gris">
      <div className="flex flex-col sm:flex-row sm:max-w-6xl w-full p-8 gap-8 items-center justify-center">
        {/* Columna izquierda con información */}
        <div className="bg-white p-8 rounded shadow-md flex-1 sm:max-w-md w-full mb-8 sm:mb-0">
          <h1 className="text-2xl font-bold mb-4">¿Querés revender nuestros productos?</h1>
          <p className="text-gray-700 mb-4">
            Completa el formulario y nos pondremos en contacto para brindarte toda la información sobre nuestras velas y las opciones de reventa.
          </p>
        </div>

        {/* Formulario de contacto */}
        <form className="bg-white p-8 rounded shadow-md flex-1 sm:max-w-md w-full" onSubmit={handleFormSubmit}>
          <label className="block mb-2">Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded mb-4"
            required
          />

          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded mb-4"
            required
          />

          <label className="block mb-2">Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded mb-4"
            required
          />

          <label className="block mb-2">Mensaje</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-2 rounded mb-4"
            rows="4" // Reducimos la altura del textarea
            required
          ></textarea>

          <button
            type="submit"
            className="bg-verde text-white py-2 px-6 rounded hover:bg-negro w-full"
          >
            Enviar
          </button>

          {status && <p className="mt-4 text-center">{status}</p>}
        </form>
      </div>
    </div>
  );
}
