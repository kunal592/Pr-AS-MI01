import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Section-CWDhBlFD.js
var import_jsx_runtime = require_jsx_runtime();
function Container({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-14 ${className}`,
		children
	});
}
function Eyebrow({ children, tone = "dark" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: `eyebrow flex items-center gap-3 ${tone === "light" ? "text-primary" : "text-primary"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-block h-px w-8 bg-primary",
			"aria-hidden": "true"
		}), children]
	});
}
function PageHeader({ eyebrow, title, intro }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "tech-grid border-b border-hairline-dark bg-ink pb-14 pt-28 text-ink-foreground md:pb-24 md:pt-44",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: eyebrow }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-5 max-w-4xl text-3xl font-extrabold uppercase leading-[0.95] sm:text-4xl md:text-6xl lg:text-7xl",
				children: title
			}),
			intro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base md:text-lg",
				children: intro
			}) : null
		] })
	});
}
//#endregion
export { Eyebrow as n, PageHeader as r, Container as t };
