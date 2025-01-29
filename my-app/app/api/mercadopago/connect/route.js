import { NextResponse} from "next/server";
import api from "../../../../api";

// Queremos que esta página sea dinámica para saber el estado del marketplace
export const revalidate = 10; // Revalidar cada 10 segundos, por ejemplo
export async function GET(request) {
  // Obtenemos el code de la request
  const code = request.nextUrl.searchParams.get("code");

  // Conectamos al usuario con el code y obtenemos las credenciales
  const credentials = await api.user.connect(code);

  // Actualizamos las credenciales del usuario
  await api.user.update({ marketplace: credentials.access_token });

  // Redirigimos al usuario a la página del marketplace
  return NextResponse.redirect(`${process.env.APP_URL}/api/paymentResume`);
}
