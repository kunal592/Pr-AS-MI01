import { a as getProduct } from "./products-stYZEPF5.mjs";
import { P as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-CstTlZQp.js
var $$splitComponentImporter = () => import("./products._slug-2Kb7IW95.mjs");
var $$splitNotFoundComponentImporter = () => import("./products._slug-Bu3rVGHl.mjs");
var Route = createFileRoute("/products/$slug")({
	loader: ({ params }) => {
		const product = getProduct(params.slug);
		if (!product) throw notFound();
		return { product };
	},
	head: ({ params, loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Product unavailable" }, {
			name: "robots",
			content: "noindex"
		}] };
		const p = loaderData.product;
		return {
			meta: [
				{ title: `${p.name} — Micro Technocam Equipments` },
				{
					name: "description",
					content: p.shortDescription
				},
				{
					property: "og:title",
					content: `${p.name} — Micro Technocam Equipments`
				},
				{
					property: "og:description",
					content: p.shortDescription
				},
				{
					property: "og:type",
					content: "product"
				},
				{
					property: "og:url",
					content: `/products/${params.slug}`
				},
				{
					property: "og:image",
					content: p.image
				},
				{
					name: "twitter:image",
					content: p.image
				}
			],
			links: [{
				rel: "canonical",
				href: `/products/${params.slug}`
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Product",
					name: p.name,
					description: p.shortDescription,
					image: p.image,
					brand: {
						"@type": "Brand",
						name: "Micro Technocam Equipments Private Limited"
					}
				})
			}]
		};
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
