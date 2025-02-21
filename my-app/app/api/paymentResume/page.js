import { redirect } from 'next/navigation';
import api from '../../../api';

export default async function ResumePage() {
  // Obtener los datos dinámicamente dentro del componente
  const user = await api.user.fetch();
  const messages = await api.message.list();
  const authorizationUrl = await api.user.authorize();

  // Función para manejar el envío del mensaje
  async function add(formData) {
    "use server";

    const message = formData.get("text");
    const url = await api.message.submit(message);

    // Usar redirect de next/navigation
    redirect(url);
  }

  return (
    <section className="grid gap-8">
      {/* Si el usuario ya autorizó la integración, mostramos el formulario */}
      {user.marketplace ? (
        <form action={add} className="grid gap-2">
          <textarea
            className="border-2 border-blue-400 p-2"
            name="text"
            placeholder="Hola perro"
            rows="3"
          />
          <button className="rounded bg-blue-400 p-2" type="submit">
            Enviar
          </button>
        </form>
      ) : (
        // Si no autorizó la integración, mostramos un botón para redirigirlo a Mercado Pago a autorizar
        <a className="rounded bg-blue-400 p-2 text-center" href={authorizationUrl}>
          Conectar Mercado Pago
        </a>
      )}
      <ul className="grid gap-2">
        {messages.map((message) => (
          <li key={message.id} className="rounded bg-blue-400/10 p-4">
            {message.text}
          </li>
        ))}
      </ul>
    </section>
  );
}
