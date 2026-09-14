import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Eyebrow, r as PageHeader, t as Container } from "./Section-CWDhBlFD.mjs";
import { n as editable, t as company } from "./company-CYMT_m4Z.mjs";
import { t as Reveal } from "./Reveal-BHA4QcZj.mjs";
import { t as categories } from "./products-stYZEPF5.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/capabilities-C1DSUBjT.js
var import_jsx_runtime = require_jsx_runtime();
var process = [
	{
		title: "Requirement study",
		body: "Duty cycle, plant layout, capacity and interface points are recorded from your specification or site inputs."
	},
	{
		title: "Configuration",
		body: "Equipment is configured to the stated requirement — capacity, dimensions and construction are set per project rather than fixed."
	},
	{
		title: "Manufacture & supply",
		body: "The company operates as manufacturer, supplier and trading company, so scope can cover fabrication, supply or both."
	},
	{
		title: "Delivery & support",
		body: "Despatch is coordinated to the site schedule, with the company operating seven days a week."
	}
];
function Capabilities() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Capabilities",
			title: "Engineering scope and working model",
			intro: `Operating as ${company.businessType.join(", ").toLowerCase()} since ${company.establishedYear}, with works at ${company.works.city}.`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "How we work" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 font-display text-3xl font-extrabold uppercase leading-tight md:text-5xl",
					children: "From specification to commissioned equipment"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-14 grid gap-px bg-hairline md:grid-cols-2 lg:grid-cols-4",
				children: process.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					as: "li",
					delay: i * 70,
					className: "bg-background p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-4xl font-medium text-primary",
							children: String(i + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 font-display text-xl font-bold uppercase leading-tight",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: s.body
						})
					]
				}, s.title))
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-hairline-dark bg-ink py-16 text-ink-foreground md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Equipment scope" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-5 font-display text-3xl font-extrabold uppercase md:text-4xl",
				children: "Four supply lines"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-12 grid gap-px bg-hairline-dark md:grid-cols-2",
				children: categories.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					as: "li",
					delay: i * 60,
					className: "bg-ink p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-primary",
							children: c.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-2xl font-bold uppercase leading-tight",
							children: c.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-ink-muted",
							children: c.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/products",
							search: {
								category: c.id,
								q: ""
							},
							className: "mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-foreground",
							children: ["See equipment ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
						})
					]
				}, c.id))
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-3xl border border-hairline bg-card p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Quality & certification" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-sm leading-relaxed text-muted-foreground",
					children: editable.certificationsNote
				})]
			}) })
		})
	] });
}
//#endregion
export { Capabilities as component };
