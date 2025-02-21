(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_764f20._.js", {

"[project]/utils/supabaseClient.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "supabase": (()=>supabase)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://hngtcilvtlfttimesspf.supabase.co");
const supabaseKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuZ3RjaWx2dGxmdHRpbWVzc3BmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzMDIyODgsImV4cCI6MjA1MDg3ODI4OH0.QI4AB25s9Uc5t1Oc4C9Lgo0R6n9LmbkNXOfJ4Jfh2gg");
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
}
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/api.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "mercadopago": (()=>mercadopago)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mercadopago$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/mercadopago/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/supabaseClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
;
;
const mercadopago = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mercadopago$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MercadoPagoConfig"]({
    accessToken: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.MP_ACCESS_TOKEN
});
const api = {
    user: {
        async fetch () {
            // Obtenemos los datos de la tabla 'clients' desde Supabase
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('clients').select('*').single(); // Asegura que solo devuelvas un objeto
            if (error) {
                throw new Error(`Error al obtener los datos del cliente: ${error.message}`);
            }
            // Devolvemos los datos del usuario
            console.log('Datos del cliente:', data);
            return data;
        },
        async update (data) {
            // Actualizamos los datos en Supabase
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('clients').update(data) // Actualiza la fila existente con los datos proporcionados
            .eq('id', 1); // Filtra para asegurar que actualizas la fila correcta (en este caso, la fila con id 1)
            if (error) {
                throw new Error(`Error al actualizar los datos del cliente: ${error.message}`);
            }
            // Si quieres devolver los datos actualizados (opcional)
            console.log('Datos del cliente actualizados:', data);
            return data;
        },
        async authorize () {
            // Obtenemos la url de autorización
            const url = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mercadopago$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OAuth"](mercadopago).getAuthorizationURL({
                options: {
                    client_id: ("TURBOPACK compile-time value", "6463485720081234"),
                    redirect_uri: `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.APP_URL}/api/mercadopago/connect`
                }
            });
            // Devolvemos la url
            return url;
        },
        async connect (code) {
            // Obtenemos las credenciales del usuario usando el code que obtuvimos de oauth
            const credentials = await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mercadopago$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OAuth"](mercadopago).create({
                body: {
                    client_id: ("TURBOPACK compile-time value", "6463485720081234"),
                    client_secret: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.MP_CLIENT_SECRET,
                    code,
                    redirect_uri: `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.APP_URL}/api/mercadopago/connect`
                }
            });
            // Devolvemos las credenciales
            return credentials;
        }
    },
    message: {
        async list () {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("messages") // Tu tabla de mensajes en Supabase
            .select("*").order("created_at", {
                ascending: false
            }); // Puedes ordenar los mensajes por fecha de creación si lo deseas
            if (error) {
                throw new Error(`Error al obtener los mensajes: ${error.message}`);
            }
            return data;
        },
        async add (text) {
            console.log("Agregando mensaje:", text);
            // Guardamos solo el texto en la base de datos
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("messages").insert([
                {
                    text
                }
            ]);
            if (error) {
                throw new Error(`Error al agregar el mensaje: ${error.message}`);
            }
            console.log("Mensaje agregado:", data);
            return data;
        },
        async submit (text) {
            // Consultamos la base de datos de Supabase para obtener el accessToken
            const { data: clientData, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('clients') // Nombre de la tabla donde está la columna marketplace
            .select('marketplace') // Seleccionamos solo la columna marketplace
            .single(); // Nos aseguramos de obtener solo un registro (si es único)
            if (error) {
                console.error('Error al obtener el accessToken:', error);
                throw new Error('No se pudo obtener el accessToken');
            }
            const accessToken = clientData?.marketplace; // Usamos el accessToken de la columna marketplace
            if (!accessToken) {
                throw new Error('Access token no disponible');
            }
            const client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mercadopago$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MercadoPagoConfig"]({
                accessToken
            });
            const items = [
                {
                    id: "message",
                    unit_price: 70,
                    quantity: 1,
                    title: "Mensaje de muro"
                }
            ];
            // Creamos la preferencia de pago en Mercado Pago
            const preference = await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mercadopago$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Preference"](client).create({
                body: {
                    items,
                    metadata: {
                        text
                    },
                    marketplace_fee: items[0].unit_price * 0.10,
                    back_urls: {
                        success: `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.BASE_URL}/api/payment-success?text=${encodeURIComponent(text)}`,
                        failure: `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.BASE_URL}/api/payment-failed`,
                        pending: `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.BASE_URL}/api/payment-pending`
                    },
                    auto_return: "approved"
                }
            });
            return preference.init_point; // URL para redirigir al usuario a la página de pago
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
    }
};
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/api/payment-success/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>PaymentSuccess)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function PaymentSuccess() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const text = searchParams.get("text");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Procesando pago...");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PaymentSuccess.useEffect": ()=>{
            async function addMessage() {
                if (!text) return setStatus("Error: No se recibió el mensaje");
                try {
                    console.log("Agregando mensaje:", text);
                    await __TURBOPACK__imported__module__$5b$project$5d2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].message.add(text); // Solo pasamos el texto
                    setStatus("✅ Pago exitoso y mensaje agregado.");
                } catch (error) {
                    setStatus(`❌ Error: ${error.message}`);
                }
            }
            addMessage();
        }
    }["PaymentSuccess.useEffect"], [
        text
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 text-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-xl font-bold",
            children: status
        }, void 0, false, {
            fileName: "[project]/app/api/payment-success/page.jsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/api/payment-success/page.jsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(PaymentSuccess, "H1kSkOiy8msDs4P3XacKYzRwsR0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = PaymentSuccess;
var _c;
__turbopack_refresh__.register(_c, "PaymentSuccess");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/api/payment-success/page.jsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_764f20._.js.map