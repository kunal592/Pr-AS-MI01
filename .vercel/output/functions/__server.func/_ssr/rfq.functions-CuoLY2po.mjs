import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { i as stringType, n as literalType, r as objectType, t as arrayType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/rfq.functions-CuoLY2po.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var rfqSchema = objectType({
	fullName: stringType().trim().min(2).max(120),
	email: stringType().trim().email().max(200),
	phone: stringType().trim().max(40).optional().or(literalType("")),
	company: stringType().trim().max(160).optional().or(literalType("")),
	designation: stringType().trim().max(120).optional().or(literalType("")),
	city: stringType().trim().max(120).optional().or(literalType("")),
	country: stringType().trim().max(120).optional().or(literalType("")),
	industry: stringType().trim().max(120).optional().or(literalType("")),
	productInterest: arrayType(stringType().max(120)).max(20).default([]),
	quantity: stringType().trim().max(80).optional().or(literalType("")),
	capacityRequirement: stringType().trim().max(200).optional().or(literalType("")),
	timeline: stringType().trim().max(80).optional().or(literalType("")),
	budgetRange: stringType().trim().max(80).optional().or(literalType("")),
	requirement: stringType().trim().min(10).max(4e3),
	source: stringType().trim().max(120).optional().or(literalType(""))
});
var orNull = (v) => v && v.length > 0 ? v : null;
var submitRfq_createServerFn_handler = createServerRpc({
	id: "734f4d746ddb2b1e931f1004330a70be1fed7cc99da2f1b12614af0e6d7560b4",
	name: "submitRfq",
	filename: "src/lib/rfq.functions.ts"
}, (opts) => submitRfq.__executeServer(opts));
var submitRfq = createServerFn({ method: "POST" }).inputValidator((input) => rfqSchema.parse(input)).handler(submitRfq_createServerFn_handler, async ({ data }) => {
	const { supabaseAdmin } = await import("./client.server-DV608Anp.mjs");
	const { error } = await supabaseAdmin.from("rfq_submissions").insert({
		full_name: data.fullName,
		email: data.email,
		phone: orNull(data.phone),
		company: orNull(data.company),
		designation: orNull(data.designation),
		city: orNull(data.city),
		country: orNull(data.country),
		industry: orNull(data.industry),
		product_interest: data.productInterest,
		quantity: orNull(data.quantity),
		capacity_requirement: orNull(data.capacityRequirement),
		timeline: orNull(data.timeline),
		budget_range: orNull(data.budgetRange),
		requirement: data.requirement,
		source: orNull(data.source)
	});
	if (error) {
		console.error("[rfq] insert failed", error);
		throw new Error("We could not record your request. Please try again or email us directly.");
	}
	return { ok: true };
});
//#endregion
export { submitRfq_createServerFn_handler };
