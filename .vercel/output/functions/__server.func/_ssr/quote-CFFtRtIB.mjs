import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quote-CFFtRtIB.js
var $$splitComponentImporter = () => import("./quote-TEmxtfw0.mjs");
var Route = createFileRoute("/quote")({
	validateSearch: (search) => typeof search["product"] === "string" ? { product: search["product"] } : {},
	head: () => ({ meta: [
		{ title: "Request a Quote | Micro Technocam Equipments Pvt. Ltd." },
		{
			name: "description",
			content: "Send your steel plant, crane or material handling equipment requirement to Micro Technocam Equipments and receive a tailored quotation."
		},
		{
			property: "og:title",
			content: "Request a Quote | Micro Technocam Equipments"
		},
		{
			property: "og:description",
			content: "Share specifications, capacity and timelines for ladle furnaces, EOT cranes, conveyors and more. Our team responds with a detailed quotation."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
