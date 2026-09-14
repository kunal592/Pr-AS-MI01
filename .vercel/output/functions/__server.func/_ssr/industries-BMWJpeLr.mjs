import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Eyebrow, r as PageHeader, t as Container } from "./Section-CWDhBlFD.mjs";
import { t as Reveal } from "./Reveal-BHA4QcZj.mjs";
import { c as productsByCategory, i as getCategory } from "./products-stYZEPF5.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as industries } from "./industries-Cxcf9zXA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/industries-BMWJpeLr.js
var import_jsx_runtime = require_jsx_runtime();
function Industries() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Industries",
		title: "Where the equipment works",
		intro: "Sectors mapped directly to the company's published product lines — no claim is made for markets outside that portfolio."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
			className: "space-y-px bg-hairline",
			children: industries.map((ind, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 60,
				className: "bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 py-10 px-4 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-16 md:px-2 md:py-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: i % 2 ? "md:order-2" : "",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[16/10] overflow-hidden bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: ind.image,
								alt: ind.name,
								loading: "lazy",
								className: "h-full w-full object-cover"
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: String(i + 1).padStart(2, "0") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-3xl font-extrabold uppercase leading-tight md:text-4xl",
							children: ind.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-base leading-relaxed text-muted-foreground",
							children: ind.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-7 flex flex-wrap gap-2",
							children: ind.relatedCategories.flatMap((c) => productsByCategory(c)).slice(0, 5).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/products/$slug",
								params: { slug: p.slug },
								className: "inline-block border border-hairline px-3 py-2 text-xs transition-colors hover:border-primary hover:text-primary",
								children: p.name
							}) }, p.id))
						}),
						ind.relatedCategories[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/products",
							search: {
								category: ind.relatedCategories[0],
								q: ""
							},
							className: "mt-7 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary",
							children: [
								getCategory(ind.relatedCategories[0]).name,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
							]
						}) : null
					] })]
				})
			}, ind.id))
		})
	})] });
}
//#endregion
export { Industries as component };
