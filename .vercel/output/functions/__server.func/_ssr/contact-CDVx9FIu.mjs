import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Eyebrow, r as PageHeader, t as Container } from "./Section-CWDhBlFD.mjs";
import { t as company } from "./company-CYMT_m4Z.mjs";
import { t as Reveal } from "./Reveal-BHA4QcZj.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as MapPin, n as User, o as Mail, s as Clock, u as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CDVx9FIu.js
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Contact",
		title: "Talk to the equipment desk",
		intro: "Send a requirement and the team will respond with scope, configuration options and commercial terms."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "grid gap-14 lg:grid-cols-[1fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Direct contact" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-7 space-y-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
								className: "mt-1 h-5 w-5 shrink-0 text-primary",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg font-bold uppercase",
								children: company.contactPerson
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Contact person"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								className: "mt-1 h-5 w-5 shrink-0 text-primary",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${company.email}`,
								className: "font-display text-lg font-bold uppercase",
								children: company.email
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Enquiry email"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
								className: "mt-1 h-5 w-5 shrink-0 text-primary",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg font-bold uppercase",
								children: company.workingDays
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Working days"
							})] })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/quote",
					className: "mt-12 inline-flex items-center gap-2 bg-primary px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:-translate-y-0.5",
					children: ["Submit a detailed RFQ ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 100,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Locations" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-7 space-y-px bg-hairline",
						children: [company.works, company.registeredOffice].map((loc) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "bg-card p-7",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									className: "mt-1 h-5 w-5 shrink-0 text-primary",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow text-muted-foreground",
									children: loc.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("address", {
									className: "mt-2 not-italic text-base leading-relaxed",
									children: loc.lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block",
										children: l
									}, l))
								})] })]
							})
						}, loc.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 border border-hairline p-7 text-sm leading-relaxed text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							company.legalName,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"CIN ",
							company.cin,
							" · GSTIN ",
							company.gstin,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Registered with ",
							company.roc,
							"."
						] })
					})
				]
			})]
		})
	})] });
}
//#endregion
export { Contact as component };
