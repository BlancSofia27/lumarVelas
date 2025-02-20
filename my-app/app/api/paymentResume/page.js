import { redirect } from "next/navigation";
import api from "../../../api";
import PurchaseResume from "../../../components/PurchaseResume"; // Suponiendo que ya tienes este componente
import { supabase } from "../../../utils/supabaseClient"; // Asegúrate de tener configurado supabase

export default async function ResumePage() {
  // Obtener los datos del cliente desde la tabla 'clients'
  const { data: client, error: clientError } = await supabase
    .from("clients")
    .select("*")
    .eq("email", "alanfish@gmail.com") // Aquí pones el email o alguna otra forma de identificar al cliente
    .single();

  if (clientError) {
    console.error("Error al obtener los datos del cliente: ", clientError.message);
    return;
  }

  // Si el cliente ya ha autorizado MercadoPago, se muestra el formulario
  const authorizationUrl = client.user_id ? null : await api.oauth.getAuthURL();

  // Función para manejar el envío del mensaje
  async function add(formData) {
    "use server";

    const message = formData.get("text");

    // Crear un registro de venta en Supabase
    const { data, error } = await supabase
      .from("sales")
      .insert([
        {
          client_id: client.id, // Usamos el id del cliente desde la tabla 'clients'
          status: "pending", // Ajusta según tu flujo
          message_text: message,
        },
      ]);

    if (error) {
      console.error("Error al registrar la compra: ", error.message);
      return;
    }

    // Redirigir al usuario a la URL de pago si ya ha autorizado MercadoPago
    if (client.mp_user_id) {
      const url = await api.message.submit(message);
      redirect(url);
    } else {
      console.error("El cliente no ha autorizado MercadoPago");
    }
  }

  return (
    <section className="p-6">
      {/* Componente PurchaseResume con el resumen de la compra */}
      <PurchaseResume />

      {/* Si el cliente ya autorizó la integración, mostramos el formulario */}
      {client.user_id ? (
        <form action={add} className="grid gap-2">
          <textarea
            className="border-2 border-blue-400 p-2"
            name="text"
            placeholder="Escribe tu mensaje aquí"
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
    </section>
  );
}
