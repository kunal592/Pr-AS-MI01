import { t as categories } from "./products-stYZEPF5.mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products.index-CY94c3au.js
var $$splitComponentImporter = () => import("./products.index-DtOYIVA5.mjs");
var validCategories = /* @__PURE__ */ new Set([...categories.map((c) => c.id), "all"]);
var Route = createFileRoute("/products/")({
	validateSearch: (search) => {
		const category = String(search["category"] ?? "all");
		return {
			category: validCategories.has(category) ? category : "all",
			q: String(search["q"] ?? "").slice(0, 80)
		};
	},
	head: () => ({
		meta: [
			{ title: "Product Catalogue — Micro Technocam Equipments" },
			{
				name: "description",
				content: "Steel melting equipment, EOT and goliath cranes, hoists, magnetic and sponge iron feeding conveyors, rolling mills and ball mills."
			},
			{
				property: "og:title",
				content: "Product Catalogue — Micro Technocam Equipments"
			},
			{
				property: "og:description",
				content: "Browse the published equipment range by category and requirement."
			},
			{
				property: "og:url",
				content: "/products"
			}
		],
		links: [{
			rel: "canonical",
			href: "/products"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
