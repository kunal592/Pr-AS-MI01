import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as PageHeader, t as Container } from "./Section-CWDhBlFD.mjs";
import { t as Reveal } from "./Reveal-BHA4QcZj.mjs";
import { s as products, t as categories } from "./products-stYZEPF5.mjs";
import { g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as ArrowRight, r as Search } from "../_libs/lucide-react.mjs";
import { t as SmartImage } from "./SmartImage-BXvj9F0_.mjs";
import { t as Route } from "./products.index-CY94c3au.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products.index-DtOYIVA5.js
var import_jsx_runtime = require_jsx_runtime();
function ProductsPage() {
	const { category, q } = Route.useSearch();
	const navigate = useNavigate({ from: "/products" });
	const query = q.trim().toLowerCase();
	const filtered = products.filter((p) => {
		const inCategory = category === "all" || p.category === category;
		const matches = !query || p.name.toLowerCase().includes(query) || p.shortDescription.toLowerCase().includes(query);
		return inCategory && matches;
	});
	const tabs = [{
		id: "all",
		name: "All equipment"
	}, ...categories.map((c) => ({
		id: c.id,
		name: c.name
	}))];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Product catalogue",
			title: "Equipment range",
			intro: "Every item below is drawn from the company's published catalogue. Specifications are listed only where they are publicly stated; all other configurations are scoped at enquiry."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-hairline bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "flex flex-col gap-4 py-5 lg:flex-row lg:items-center lg:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "-mx-1 flex flex-wrap gap-2",
					children: tabs.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/products",
						search: {
							category: t.id,
							q
						},
						className: `px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors sm:px-4 sm:py-2.5 ${category === t.id ? "bg-ink text-ink-foreground" : "border border-hairline text-muted-foreground hover:border-primary hover:text-foreground"}`,
						children: t.name
					}, t.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "relative flex w-full items-center lg:w-72",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							className: "pointer-events-none absolute left-3 h-4 w-4 text-muted-foreground",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Search products"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: q,
							onChange: (e) => navigate({
								search: (prev) => ({
									...prev,
									q: e.target.value.slice(0, 80)
								}),
								replace: true
							}),
							placeholder: "Search equipment",
							className: "w-full border border-hairline bg-background py-3 pl-10 pr-3 text-sm outline-none focus:border-primary"
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow text-muted-foreground",
				children: [
					filtered.length,
					" ",
					filtered.length === 1 ? "product" : "products"
				]
			}), filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-base text-muted-foreground",
				children: "No equipment matches that search. Try another term or clear the filter."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3",
				children: filtered.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					as: "li",
					delay: i % 3 * 60,
					className: "group bg-background",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/products/$slug",
						params: { slug: p.slug },
						className: "flex h-full flex-col p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative aspect-[4/3] overflow-hidden bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
									src: p.image,
									fallback: p.fallbackImage,
									alt: p.name,
									className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-6 font-display text-xl font-bold uppercase leading-tight",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
								children: p.shortDescription
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary",
								children: ["View details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
							})
						]
					})
				}, p.id))
			})] })
		})
	] });
}
//#endregion
export { ProductsPage as component };
