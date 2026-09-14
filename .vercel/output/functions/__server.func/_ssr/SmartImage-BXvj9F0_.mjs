import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SmartImage-BXvj9F0_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Image that swaps to a local asset if the remote catalogue photo fails. */
function SmartImage({ src, fallback, alt, className = "", loading = "lazy" }) {
	const [current, setCurrent] = (0, import_react.useState)(src);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: current,
		alt,
		loading,
		decoding: "async",
		onError: () => setCurrent(fallback),
		className
	});
}
//#endregion
export { SmartImage as t };
