import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Eyebrow, t as Container } from "./Section-CWDhBlFD.mjs";
import { t as Reveal } from "./Reveal-BHA4QcZj.mjs";
import { i as getCategory, l as relatedProducts } from "./products-stYZEPF5.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as ArrowLeft, l as Check, u as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as Route } from "./products._slug-CstTlZQp.mjs";
import { t as SmartImage } from "./SmartImage-BXvj9F0_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-2Kb7IW95.js
var import_jsx_runtime = require_jsx_runtime();
function ProductDetail() {
	const { product } = Route.useLoaderData();
	const category = getCategory(product.category);
	const related = relatedProducts(product);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "tech-grid border-b border-hairline-dark bg-ink pb-16 pt-32 text-ink-foreground md:pb-20 md:pt-40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/products",
				search: {
					category: product.category,
					q: ""
				},
				className: "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted transition-colors hover:text-primary",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }),
					" ",
					category.name
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-[4/3] overflow-hidden border border-hairline-dark bg-graphite",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
						src: product.image,
						fallback: product.fallbackImage,
						alt: product.name,
						loading: "eager",
						className: "h-full w-full object-cover"
					})
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 100,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: category.tagline }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-5 font-display text-4xl font-extrabold uppercase leading-[0.95] md:text-6xl",
							children: product.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-base leading-relaxed text-ink-muted",
							children: product.shortDescription
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-9 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/quote",
								search: { product: product.slug },
								className: "inline-flex items-center gap-2 bg-primary px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:-translate-y-0.5",
								children: ["Request a quote ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "inline-flex items-center gap-2 border border-hairline-dark px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors hover:border-primary hover:text-primary",
								children: "Talk to the team"
							})]
						})
					]
				})]
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "grid gap-16 lg:grid-cols-[1.2fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					product.overview ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Overview" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-base leading-relaxed text-muted-foreground",
						children: product.overview
					})] }) : null,
					product.features?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 80,
						className: "mt-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Listed features" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 grid gap-3 sm:grid-cols-2",
							children: product.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 border-b border-hairline pb-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "mt-0.5 h-4 w-4 shrink-0 text-primary",
									"aria-hidden": "true"
								}), f]
							}, f))
						})]
					}) : null,
					product.applications?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 120,
						className: "mt-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Typical applications" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 flex flex-wrap gap-2",
							children: product.applications.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border border-hairline px-4 py-2 text-xs uppercase tracking-[0.1em]",
								children: a
							}, a))
						})]
					}) : null
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 140,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-hairline bg-card p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Specification" }),
							product.specifications?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "mt-5 divide-y divide-hairline",
								children: product.specifications.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between gap-6 py-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted-foreground",
										children: s.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "text-right font-medium",
										children: s.value
									})]
								}, s.label))
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-sm leading-relaxed text-muted-foreground",
								children: "No specification is publicly published for this item. Capacity, dimensions and duty are confirmed against your plant requirement during enquiry."
							}),
							product.sourceUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: product.sourceUrl,
								target: "_blank",
								rel: "noreferrer noopener",
								className: "mt-7 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary",
								children: ["Public listing ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
							}) : null
						]
					})
				})]
			})
		}),
		related.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-hairline bg-card py-16 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Related equipment" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-8 sm:grid-cols-3",
				children: related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "group",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/products/$slug",
						params: { slug: p.slug },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/3] overflow-hidden bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
								src: p.image,
								fallback: p.fallbackImage,
								alt: p.name,
								className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-lg font-bold uppercase",
							children: p.name
						})]
					})
				}, p.id))
			})] })
		}) : null
	] });
}
//#endregion
export { ProductDetail as component };
