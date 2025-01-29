// paymentSuccess.js
"use client";
import Image from "next/image";
import useRouter from "next/router";

const PaymentSuccess = () => {
  const router = useRouter();


  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800">
      <Image
        src="/success-icon.png" // Asegúrate de tener este recurso disponible
        alt="Pago exitoso"
        width={100}
        height={100}
        className="mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">¡Pago realizado con éxito!</h1>
      <p className="text-gray-600 text-center mb-4">
        Gracias por tu compra. En breve recibirás un correo electrónico con los
        detalles de tu pedido.
      </p>
      <button
        onClick={() => router.push("/user/products")}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Volver al catálogo ahora
      </button>
    </div>
  );
};

export default PaymentSuccess;
