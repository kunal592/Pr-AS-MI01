import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-Bu3rVGHl.js
var import_jsx_runtime = require_jsx_runtime();
function ProductNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[70vh] items-center justify-center px-6 pt-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-extrabold uppercase",
					children: "Product not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "This item is not in the published catalogue."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/products",
					search: {
						category: "all",
						q: ""
					},
					className: "mt-7 inline-flex bg-primary px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary-foreground",
					children: "Back to catalogue"
				})
			]
		})
	});
}
//#endregion
export { ProductNotFound as notFoundComponent };
