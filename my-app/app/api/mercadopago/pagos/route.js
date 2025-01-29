import { Payment } from "mercadopago";
import { revalidatePath } from "next/cache";

import api, { mercadopago } from "../../../../api";

export async function POST(request) {
  try {
    // Obtenemos el cuerpo de la petición que incluye información sobre la notificación
    const body = await request.json();

    // Obtenemos el pago
    const payment = await new Payment(mercadopago).get({ id: body.data.id });

    // Si se aprueba, agregamos el mensaje
    if (payment.status === "approved") {
      // Obtenemos los datos
      await api.message.add({ id: payment.id, text: payment.metadata.text });

      // Revalidamos la página de inicio para mostrar los datos actualizados
      revalidatePath("/");
    }

    // Respondemos con un estado 200 para indicar que la notificación fue recibida
    return new Response(null, { status: 200 });

  } catch (error) {
    console.error("Error en el webhook de MercadoPago:", error);
    return new Response(JSON.stringify({ error: "Error procesando la notificación" }), { 
      status: 500, 
      headers: { "Content-Type": "application/json" } 
    });
  }
}
