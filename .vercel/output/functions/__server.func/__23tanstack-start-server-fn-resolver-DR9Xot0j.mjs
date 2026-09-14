//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-DR9Xot0j.js
var manifest = { "734f4d746ddb2b1e931f1004330a70be1fed7cc99da2f1b12614af0e6d7560b4": {
	functionName: "submitRfq_createServerFn_handler",
	importer: () => import("./_ssr/rfq.functions-1trVuMhL.mjs")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
