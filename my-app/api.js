import { MercadoPagoConfig, Preference, OAuth } from "mercadopago";
import { supabase } from "./utils/supabaseClient";

// Configuración de Mercado Pago
export const mercadopago = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });

const api = {
  oauth: {
    // Genera la URL para que los vendedores autoricen la app y obtengan un access_token
    getAuthURL() {
      const clientId = process.env.NEXT_PUBLIC_MP_CLIENT_ID;
      const redirectUri = `${process.env.APP_URL}/api/mercadopago/connect`;
      return `https://auth.mercadopago.com/authorization?client_id=${clientId}&response_type=code&platform_id=mp&redirect_uri=${redirectUri}`;
    },

    // Intercambia el authorization_code por un access_token del vendedor
    async exchangeCode(code) {
      const oauth = new OAuth(mercadopago);
      try {
        const response = await oauth.token({
          client_secret: process.env.MP_CLIENT_SECRET,
          grant_type: "authorization_code",
          code,
          redirect_uri: `${process.env.APP_URL}/api/mercadopago/connect`,
        });

        const { access_token, refresh_token, user_id } = response || {};
        if (!user_id) throw new Error("No se recibió user_id de MercadoPago");

        const { data, error } = await supabase
          .from("clients")
          .upsert([{ user_id, access_token, refresh_token }]);

        if (error) throw new Error("Error al guardar el vendedor: " + error.message);
        
        return { user_id, access_token };
      } catch (error) {
        throw new Error("Error en OAuth: " + error.message);
      }
    },

    // Refresca el access_token del vendedor si ha expirado
    async refreshToken(refreshToken) {
      const oauth = new OAuth(mercadopago);
      try {
        const response = await oauth.token({
          client_secret: process.env.MP_CLIENT_SECRET,
          grant_type: "refresh_token",
          refresh_token: refreshToken,
        });

        const { access_token, refresh_token } = response;
        return { access_token, refresh_token };
      } catch (error) {
        throw new Error("Error al refrescar el token: " + error.message);
      }
    },

    // Conectar el usuario usando el código de autorización
    async connect(code) {
      try {
        const credentials = await new OAuth(mercadopago).token({
          client_secret: process.env.MP_CLIENT_SECRET,
          grant_type: "authorization_code",
          code,
          redirect_uri: `${process.env.APP_URL}/api/mercadopago/connect`,
        });

        const { user_id, access_token, refresh_token } = credentials || {};
        if (!user_id) throw new Error("No se recibió user_id de MercadoPago");

        const { data, error } = await supabase
          .from("clients")
          .upsert([{ user_id, access_token, refresh_token }]);

        if (error) throw new Error("Error al guardar las credenciales");

        return { message: "Conexión exitosa", user_id, access_token };
      } catch (error) {
        throw new Error("Error al conectar con Mercado Pago");
      }
    },
  },

  sale: {
    async create({ sellerId, items, totalAmount }) {
      const { data, error } = await supabase
        .from("clients")
        .select("access_token")
        .eq("user_id", sellerId)
        .maybeSingle();

      if (error || !data || !data.access_token) {
        throw new Error("No se encontró el vendedor o su access_token no es válido");
      }

      const sellerAccessToken = data.access_token;
      
      const preference = await new Preference(new MercadoPagoConfig({ accessToken: sellerAccessToken })).create({
        body: {
          items: items.map((item) => ({
            id: item.id,
            title: item.name,
            quantity: item.quantity,
            unit_price: item.price,
            currency_id: "ARS", // Moneda obligatoria
          })),
          marketplace_fee: totalAmount * 0.10, // 10% de comisión
          payer: {
            email: "comprador@example.com",
          },
        },
      });
      
      const { data: saleData, error: saleError } = await supabase
        .from("sales")
        .insert([{ sale_id: preference.id, user_id: sellerId, amount: totalAmount, status: "pendiente", items }]);

      if (saleError) throw new Error("Error al registrar la venta: " + saleError.message);

      return { init_point: preference.init_point, sale: saleData };
    },
  },
};

export default api;
