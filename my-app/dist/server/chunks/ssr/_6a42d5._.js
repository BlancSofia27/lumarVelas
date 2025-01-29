module.exports = {

"[project]/utils/api.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const api = {
    user: {
        async authorize () {
            // Obtenemos la url de autorización
            const url = new OAuth(mercadopago).getAuthorizationURL({
                options: {
                    client_id: ("TURBOPACK compile-time value", "63552421902314"),
                    redirect_uri: `${process.env.APP_URL}/api/mercadopago`
                }
            });
            // Devolvemos la url
            return url;
        }
    }
};
}}),
"[project]/app/user/paymentResume/page.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>PaymentResumePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/api.js [app-rsc] (ecmascript)");
;
;
async function PaymentResumePage() {
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.fetch();
    const messages = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].message.list();
    const authorizationUrl = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.authorize();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "grid gap-8",
        children: [
            user.marketplace ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "grid gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        className: "border-2 border-blue-400 p-2",
                        name: "text",
                        placeholder: "Hola perro",
                        rows: 3
                    }, void 0, false, {
                        fileName: "[project]/app/user/paymentResume/page.jsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "rounded bg-blue-400 p-2",
                        type: "submit",
                        children: "Enviar"
                    }, void 0, false, {
                        fileName: "[project]/app/user/paymentResume/page.jsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/user/paymentResume/page.jsx",
                lineNumber: 11,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "rounded bg-blue-400 p-2 text-center",
                href: authorizationUrl,
                children: "Conectar Mercado Pago"
            }, void 0, false, {
                fileName: "[project]/app/user/paymentResume/page.jsx",
                lineNumber: 23,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "grid gap-2",
                children: messages.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "rounded bg-blue-400/10 p-4",
                        children: message.text
                    }, message.id, false, {
                        fileName: "[project]/app/user/paymentResume/page.jsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/user/paymentResume/page.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/user/paymentResume/page.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/user/paymentResume/page.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_namespace__(__turbopack_import__("[project]/app/user/paymentResume/page.jsx [app-rsc] (ecmascript)"));
}}),
"[project]/.next-internal/server/app/user/paymentResume/page/actions.js [app-rsc] (ecmascript) <locals>": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/.next-internal/server/app/user/paymentResume/page/actions.js [app-rsc] (ecmascript) <locals>\n\nCaused by:\n- EcmascriptModuleLocalsModule must only be used on modules with EsmExports\n\nDebug info:\n- An error occurred while generating the chunk item [project]/.next-internal/server/app/user/paymentResume/page/actions.js [app-rsc] (ecmascript) <locals>\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of *EcmascriptModuleContent::new failed\n- Execution of <EcmascriptModuleLocalsModule as EcmascriptChunkPlaceable>::get_exports failed\n- EcmascriptModuleLocalsModule must only be used on modules with EsmExports");

}}),
"[project]/.next-internal/server/app/user/paymentResume/page/actions.js [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$user$2f$paymentResume$2f$page$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/.next-internal/server/app/user/paymentResume/page/actions.js [app-rsc] (ecmascript) <locals>");
}}),
"[project]/.next-internal/server/app/user/paymentResume/page/actions.js [app-rsc] (ecmascript) <exports>": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/.next-internal/server/app/user/paymentResume/page/actions.js [app-rsc] (ecmascript) <exports>\n\nCaused by:\n- EcmascriptModuleFacadeModule must only be used on modules with EsmExports\n\nDebug info:\n- An error occurred while generating the chunk item [project]/.next-internal/server/app/user/paymentResume/page/actions.js [app-rsc] (ecmascript) <exports>\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of <EcmascriptModuleFacadeChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of <EcmascriptModuleFacadeModule as EcmascriptChunkPlaceable>::get_exports failed\n- EcmascriptModuleFacadeModule must only be used on modules with EsmExports");

}}),
"[project]/.next-internal/server/app/user/paymentResume/page/actions.js [app-rsc] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/.next-internal/server/app/user/paymentResume/page/actions.js [app-rsc] (ecmascript)\n\nCaused by:\n- EcmascriptModuleFacadeModule must only be used on modules with EsmExports\n\nDebug info:\n- An error occurred while generating the chunk item [project]/.next-internal/server/app/user/paymentResume/page/actions.js [app-rsc] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of <EcmascriptModuleFacadeChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of <EcmascriptModuleFacadeModule as EcmascriptChunkPlaceable>::get_exports failed\n- EcmascriptModuleFacadeModule must only be used on modules with EsmExports");

}}),

};

//# sourceMappingURL=_6a42d5._.js.map