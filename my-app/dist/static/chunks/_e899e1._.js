(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_e899e1._.js", {

"[project]/components/Detail.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/supabaseClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$K6AXKMTT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-router/dist/development/chunk-K6AXKMTT.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
const ProductDetail = ()=>{
    _s();
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$K6AXKMTT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])(); // Obtiene el ID del producto desde la URL
    const [product, setProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchProduct = async ()=>{
            try {
                setLoading(true);
                // Consulta para obtener los datos del producto
                const { data: productData, error: productError } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("products").select("*").eq("id", id).single();
                if (productError) {
                    setError("Producto no encontrado.");
                    return;
                }
                // Consulta para obtener las fragancias relacionadas
                const { data: fraganceData, error: fraganceError } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("fragances").select("name, color, description").in("id", productData.fragance);
                if (fraganceError) {
                    setError("No se pudieron cargar las fragancias.");
                    return;
                }
                // Combinar los datos
                setProduct({
                    ...productData,
                    fragances: fraganceData
                });
            } catch (err) {
                setError("Hubo un error al cargar el producto.", err);
            } finally{
                setLoading(false);
            }
        };
        fetchProduct();
    }, [
        id
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mt-10",
            children: "Cargando producto..."
        }, void 0, false, {
            fileName: "[project]/components/Detail.jsx",
            lineNumber: 56,
            columnNumber: 12
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mt-10 text-red-500",
            children: error
        }, void 0, false, {
            fileName: "[project]/components/Detail.jsx",
            lineNumber: 60,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 py-8 flex flex-wrap lg:flex-nowrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full lg:w-1/2 mb-6 lg:mb-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: product.image_url,
                    alt: product.name,
                    className: "rounded-lg shadow-md w-full h-auto object-cover"
                }, void 0, false, {
                    fileName: "[project]/components/Detail.jsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Detail.jsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full lg:w-1/2 p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-semibold mb-4",
                        children: product.name
                    }, void 0, false, {
                        fileName: "[project]/components/Detail.jsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Descripción:"
                            }, void 0, false, {
                                fileName: "[project]/components/Detail.jsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            " ",
                            product.description
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Detail.jsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Precio:"
                            }, void 0, false, {
                                fileName: "[project]/components/Detail.jsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            " $",
                            product.price
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Detail.jsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Intensidad:"
                            }, void 0, false, {
                                fileName: "[project]/components/Detail.jsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            " ",
                            product.intensity,
                            " / 5"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Detail.jsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold mb-2",
                                children: "Fragancias:"
                            }, void 0, false, {
                                fileName: "[project]/components/Detail.jsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            product.fragances?.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-4",
                                children: product.fragances.map((fragance, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "p-4 border rounded-md shadow-sm bg-gray-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Nombre:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Detail.jsx",
                                                        lineNumber: 98,
                                                        columnNumber: 21
                                                    }, this),
                                                    " ",
                                                    fragance.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Detail.jsx",
                                                lineNumber: 97,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-2 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Color:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Detail.jsx",
                                                        lineNumber: 101,
                                                        columnNumber: 21
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            backgroundColor: fragance.color
                                                        },
                                                        className: "inline-block w-6 h-6 rounded-full border ml-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Detail.jsx",
                                                        lineNumber: 102,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Detail.jsx",
                                                lineNumber: 100,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Descripción:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Detail.jsx",
                                                        lineNumber: 108,
                                                        columnNumber: 21
                                                    }, this),
                                                    " ",
                                                    fragance.description
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Detail.jsx",
                                                lineNumber: 107,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/components/Detail.jsx",
                                        lineNumber: 93,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Detail.jsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "No hay fragancias asociadas a este producto."
                            }, void 0, false, {
                                fileName: "[project]/components/Detail.jsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Detail.jsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Detail.jsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Detail.jsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
};
_s(ProductDetail, "f7EN1YxU1YYnw9hNF8hKHfhzw/8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$K6AXKMTT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = ProductDetail;
const __TURBOPACK__default__export__ = ProductDetail;
var _c;
__turbopack_refresh__.register(_c, "ProductDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/user/products/[id]/page.jsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
"[project]/node_modules/react-router-dom/dist/index.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/**
 * react-router-dom v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ // index.ts
__turbopack_esm__({});
;
;
;
}}),
"[project]/node_modules/react-router-dom/dist/index.mjs [app-client] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Await": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Await"]),
    "BrowserRouter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowserRouter"]),
    "Form": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"]),
    "HashRouter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HashRouter"]),
    "HydratedRouter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$dom$2d$export$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HydratedRouter"]),
    "IDLE_BLOCKER": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IDLE_BLOCKER"]),
    "IDLE_FETCHER": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IDLE_FETCHER"]),
    "IDLE_NAVIGATION": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IDLE_NAVIGATION"]),
    "Link": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"]),
    "Links": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Links"]),
    "MemoryRouter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MemoryRouter"]),
    "Meta": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Meta"]),
    "NavLink": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"]),
    "Navigate": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navigate"]),
    "NavigationType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationType"]),
    "Outlet": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Outlet"]),
    "PrefetchPageLinks": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrefetchPageLinks"]),
    "Route": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"]),
    "Router": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Router"]),
    "RouterProvider": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$dom$2d$export$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterProvider"]),
    "Routes": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Routes"]),
    "Scripts": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scripts"]),
    "ScrollRestoration": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollRestoration"]),
    "ServerRouter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServerRouter"]),
    "StaticRouter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaticRouter"]),
    "StaticRouterProvider": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaticRouterProvider"]),
    "UNSAFE_DataRouterContext": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNSAFE_DataRouterContext"]),
    "UNSAFE_DataRouterStateContext": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNSAFE_DataRouterStateContext"]),
    "UNSAFE_ErrorResponseImpl": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNSAFE_ErrorResponseImpl"]),
    "UNSAFE_FetchersContext": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNSAFE_FetchersContext"]),
    "UNSAFE_FrameworkContext": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNSAFE_FrameworkContext"]),
    "UNSAFE_LocationContext": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNSAFE_LocationContext"]),
    "UNSAFE_NavigationContext": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNSAFE_NavigationContext"]),
    "UNSAFE_RemixErrorBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNSAFE_RemixErrorBoundary"]),
    "UNSAFE_RouteContext": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNSAFE_RouteContext"]),
    "UNSAFE_ServerMode": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNSAFE_ServerMode"]),
    "UNSAFE_SingleFetchRedirectSymbol": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNSAFE_SingleFetchRedirectSymbol"]),
    "UNSAFE_ViewTransitionContext": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNSAFE_ViewTransitionContext"]),
    "UNSAFE_createBrowserHistory": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNSAFE_createBrowserHistory"]),
    "UNSAFE_createClientRoutes": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNSAFE_createClientRoutes"]),
    "UNSAFE_createClientRoutesWithHMRRevalidationOptOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNSAFE_createClientRoutesWithHMRRevalidationOptOut"]),
    "UNSAFE_createRouter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNSAFE_createRouter"]),
    "UNSAFE_decodeViaTurboStream": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNSAFE_decodeViaTurboStream"]),
    "UNSAFE_deserializeErrors": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNSAFE_deserializeErrors"]),
    "UNSAFE_getPatchRoutesOnNavigationFunction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNSAFE_getPatchRoutesOnNavigationFunction"]),
    "UNSAFE_getSingleFetchDataStrategy": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNSAFE_getSingleFetchDataStrategy"]),
    "UNSAFE_invariant": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNSAFE_invariant"]),
    "UNSAFE_mapRouteProperties": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNSAFE_mapRouteProperties"]),
    "UNSAFE_shouldHydrateRouteLoader": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNSAFE_shouldHydrateRouteLoader"]),
    "UNSAFE_useFogOFWarDiscovery": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNSAFE_useFogOFWarDiscovery"]),
    "UNSAFE_useScrollRestoration": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNSAFE_useScrollRestoration"]),
    "createBrowserRouter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserRouter"]),
    "createCookie": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCookie"]),
    "createCookieSessionStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCookieSessionStorage"]),
    "createHashRouter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashRouter"]),
    "createMemoryRouter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMemoryRouter"]),
    "createMemorySessionStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMemorySessionStorage"]),
    "createPath": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPath"]),
    "createRequestHandler": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRequestHandler"]),
    "createRoutesFromChildren": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRoutesFromChildren"]),
    "createRoutesFromElements": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRoutesFromElements"]),
    "createRoutesStub": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRoutesStub"]),
    "createSearchParams": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSearchParams"]),
    "createSession": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSession"]),
    "createSessionStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSessionStorage"]),
    "createStaticHandler": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStaticHandler"]),
    "createStaticRouter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStaticRouter"]),
    "data": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["data"]),
    "generatePath": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generatePath"]),
    "isCookie": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCookie"]),
    "isRouteErrorResponse": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRouteErrorResponse"]),
    "isSession": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSession"]),
    "matchPath": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchPath"]),
    "matchRoutes": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchRoutes"]),
    "parsePath": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePath"]),
    "redirect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redirect"]),
    "redirectDocument": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redirectDocument"]),
    "renderMatches": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderMatches"]),
    "replace": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"]),
    "resolvePath": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePath"]),
    "unstable_HistoryRouter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstable_HistoryRouter"]),
    "unstable_setDevServerHooks": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstable_setDevServerHooks"]),
    "unstable_usePrompt": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstable_usePrompt"]),
    "useActionData": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionData"]),
    "useAsyncError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncError"]),
    "useAsyncValue": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncValue"]),
    "useBeforeUnload": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBeforeUnload"]),
    "useBlocker": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlocker"]),
    "useFetcher": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFetcher"]),
    "useFetchers": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFetchers"]),
    "useFormAction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormAction"]),
    "useHref": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHref"]),
    "useInRouterContext": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInRouterContext"]),
    "useLinkClickHandler": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLinkClickHandler"]),
    "useLoaderData": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoaderData"]),
    "useLocation": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocation"]),
    "useMatch": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMatch"]),
    "useMatches": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMatches"]),
    "useNavigate": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"]),
    "useNavigation": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigation"]),
    "useNavigationType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigationType"]),
    "useOutlet": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOutlet"]),
    "useOutletContext": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOutletContext"]),
    "useParams": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]),
    "useResolvedPath": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolvedPath"]),
    "useRevalidator": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRevalidator"]),
    "useRouteError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouteError"]),
    "useRouteLoaderData": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouteLoaderData"]),
    "useRoutes": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRoutes"]),
    "useSearchParams": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]),
    "useSubmit": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSubmit"]),
    "useViewTransitionState": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useViewTransitionState"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$dom$2d$export$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-router/dist/development/dom-export.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-router/dist/development/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/react-router-dom/dist/index.mjs [app-client] (ecmascript) <locals>");
}}),
}]);

//# sourceMappingURL=_e899e1._.js.map