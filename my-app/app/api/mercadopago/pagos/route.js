import { Payment } from "mercadopago";
import { revalidatePath } from "next/cache";

import api, { mercadopago } from "../../../../api";

export async function POST(request) {
  try {
    console.log("Recibiendo notificación de MercadoPago...");
    // Obtenemos el cuerpo de la petición que incluye información sobre la notificación
    const body = await request.json();

    // Obtenemos el pago
    const payment = await new Payment(mercadopago).get({ id: body.data.id });

    // Si se aprueba, agregamos el mensaje
    if (payment.status === "approved") {
      // Obtenemos los datos
      console.log("Agregando mensaje:", payment.metadata.text);
      await api.message.add({  
        id_mercadopago: payment.id,  // Guarda el ID del pago  
        text: payment.metadata.text,  // Guarda el mensaje  
        amount: payment.transaction_amount,  // Guarda el monto  
        status: payment.status  // Guarda el estado del pago  
      });

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
