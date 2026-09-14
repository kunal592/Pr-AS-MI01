import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Eyebrow, r as PageHeader, t as Container } from "./Section-CWDhBlFD.mjs";
import { n as editable } from "./company-CYMT_m4Z.mjs";
import { t as Reveal } from "./Reveal-BHA4QcZj.mjs";
import { c as productsByCategory, t as categories } from "./products-stYZEPF5.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-U4yeGCQt.js
var import_jsx_runtime = require_jsx_runtime();
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Projects",
		title: "Deployment scopes",
		intro: "Project references are published only once supplied and approved by the company. Below are the deployment scopes represented by the current equipment portfolio."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-px bg-hairline md:grid-cols-2",
			children: categories.map((c, i) => {
				const items = productsByCategory(c.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					as: "li",
					delay: i * 70,
					className: "bg-background p-8 md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[16/9] overflow-hidden bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: c.image,
								alt: c.name,
								loading: "lazy",
								className: "h-full w-full object-cover"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: c.tagline }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-2xl font-bold uppercase leading-tight",
							children: c.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: c.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "eyebrow mt-6 text-muted-foreground",
							children: [items.length, " equipment items in scope"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/products",
							search: {
								category: c.id,
								q: ""
							},
							className: "mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary",
							children: ["View scope ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
						})
					]
				}, c.id);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "mt-16 border border-hairline bg-card p-8 md:p-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Project references" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground",
					children: editable.projectsNote
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					className: "mt-7 inline-flex items-center gap-2 bg-primary px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary-foreground",
					children: ["Discuss a project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
				})
			]
		})] })
	})] });
}
//#endregion
export { Projects as component };
