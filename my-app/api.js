
import { MercadoPagoConfig, Preference, OAuth } from "mercadopago";
import { supabase } from "./utils/supabaseClient";
export const mercadopago = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });

const api = {
  user: {
    async fetch() {
      // Obtenemos los datos de la tabla 'clients' desde Supabase
      const { data, error } = await supabase
        .from('clients')
        .select('*')
        .single(); // Asegura que solo devuelvas un objeto
    
      if (error) {
        throw new Error(`Error al obtener los datos del cliente: ${error.message}`);
      }
    
      // Devolvemos los datos del usuario
      console.log('Datos del cliente:', data);
      return data;
    },
    
    async update(data) {
      // Actualizamos los datos en Supabase
      const { error } = await supabase
      .from('clients')
      .update(data)  // Actualiza la fila existente con los datos proporcionados
      .eq('id', 1);  // Filtra para asegurar que actualizas la fila correcta (en este caso, la fila con id 1)
  
      if (error) {
        throw new Error(`Error al actualizar los datos del cliente: ${error.message}`);
      }
  
      // Si quieres devolver los datos actualizados (opcional)
      console.log('Datos del cliente actualizados:', data);
      return data;
    },
    async authorize() {
      // Obtenemos la url de autorización
      const url = new OAuth(mercadopago).getAuthorizationURL({
        options: {
          client_id: process.env.NEXT_PUBLIC_MP_CLIENT_ID,
          redirect_uri: `${process.env.APP_URL}/api/mercadopago/connect`,
        },
      });

      // Devolvemos la url
      return url;
    },
    async connect(code) {
      // Obtenemos las credenciales del usuario usando el code que obtuvimos de oauth
      const credentials = await new OAuth(mercadopago).create({
        body: {
          client_id: process.env.NEXT_PUBLIC_MP_CLIENT_ID,
          client_secret: process.env.MP_CLIENT_SECRET,
          code,
          redirect_uri: `${process.env.APP_URL}/api/mercadopago/connect`,
        },
      });

      // Devolvemos las credenciales
      return credentials;
    },
  },
  message: {
    async list() {
      const { data, error } = await supabase
        .from("messages")  // Tu tabla de mensajes en Supabase
        .select("*")
        .order("created_at", { ascending: false });  // Puedes ordenar los mensajes por fecha de creación si lo deseas

      if (error) {
        throw new Error(`Error al obtener los mensajes: ${error.message}`);
      }
      
      return data;
    },
    
    async add({ text, id_mercadopago, amount, status }) {
      console.log("Agregando mensaje:", text);
    
      // Guardamos el mensaje y los nuevos campos en la base de datos
      const { data, error } = await supabase.from("messages").insert([{ 
        text, 
        id_mercadopago, 
        amount, 
        status 
      }]);
    
      if (error) {
        throw new Error(`Error al agregar el mensaje: ${error.message}`);
      }
    
      console.log("Mensaje agregado:", data);
      return data;
    },
    
    

async submit(text) {
  // Consultamos la base de datos de Supabase para obtener el accessToken
  const { data: clientData, error } = await supabase
    .from('clients')  // Nombre de la tabla donde está la columna marketplace
    .select('marketplace')  // Seleccionamos solo la columna marketplace
    .single();  // Nos aseguramos de obtener solo un registro (si es único)

  if (error) {
    console.error('Error al obtener el accessToken:', error);
    throw new Error('No se pudo obtener el accessToken');
  }

  const accessToken = clientData?.marketplace;  // Usamos el accessToken de la columna marketplace
  if (!accessToken) {
    throw new Error('Access token no disponible');
  }

  const client = new MercadoPagoConfig({ accessToken });

  const items = [
    {
      id: "message",
      unit_price: 70,  // Precio del mensaje
      quantity: 1,      // Cantidad
      title: "Mensaje de muro",
    }
  ];

  // Creamos la preferencia de pago en Mercado Pago
  const preference = await new Preference(client).create({
    body: {
      items,
      metadata: { text },
      marketplace_fee: items[0].unit_price * 0.10,  // 10% como comisión para tu cuenta
      back_urls: {
        success: `${process.env.BASE_URL}/api/payment-success?text=${encodeURIComponent(text)}`,
        failure: `${process.env.BASE_URL}/api/payment-failed`,
        pending: `${process.env.BASE_URL}/api/payment-pending`,
      },
      auto_return: "approved",
    },
  });

  return preference.init_point;  // URL para redirigir al usuario a la página de pago


      
      
      // // Creamos el cliente de Mercado Pago usando el access token del Marketplace
      // const accessToken = process.env.MP_ACCESS_TOKEN;
      // const client = new MercadoPagoConfig({ accessToken });
      // console.log('Access token:', accessToken);
    
      // // Definimos el artículo que será comprado (en este caso, un mensaje)
      // const items = [
      //   {
      //     id: "message",        // ID del artículo
      //     unit_price: 100,      // Precio unitario del mensaje
      //     quantity: 1,          // Cantidad del artículo
      //     title: "Mensaje de muro", // Título del artículo
      //   }
      // ];
    
      // // Creamos la preferencia de Mercado Pago incluyendo el precio, título y metadata
      // const preference = await new Preference(client).create({
      //   body: {
      //     items: items,
      //     metadata: {
      //       text, // Metadata con el texto del mensaje
      //     },
      //     marketplace_fee: items[0].unit_price * 0.10, // Calculamos el 10% de comisión sobre el precio del artículo
      //   },
      // });
    
      // // Devolvemos el URL de la preferencia (la URL donde el usuario puede pagar)
      // return preference.init_point;  // Este es el enlace para que el usuario inicie el pago
    }
    
  },
};

export default api;