// components/ClientAuthorization.js
import React from "react";
const authorizationUrl = await api.user.authorize();
const ClientAuthorization = ({ mpUserId }) => {
  // Si el cliente ya tiene el mp_user_id, no mostramos nada o podemos mostrar un mensaje
  if (mpUserId) {
    return <p className="text-center text-green-500">Tu cuenta ya está conectada a Mercado Pago.</p>;
  }

  // Si el cliente no ha autorizado, mostramos un enlace para autorizar Mercado Pago
  const authorizationUrl = process.env.MP_AUTHORIZATION_URL || "";

  return (
    <div className="text-center">
      <p className="text-gray-600">Conecta tu cuenta de Mercado Pago para continuar.</p>
      <a
        href={authorizationUrl}
        className="rounded bg-blue-500 text-white p-2 mt-4 inline-block"
      >
        Autorizar Mercado Pago
      </a>
    </div>
  );
};

export default ClientAuthorization;
