import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Eyebrow, r as PageHeader, t as Container } from "./Section-CWDhBlFD.mjs";
import { t as company } from "./company-CYMT_m4Z.mjs";
import { t as Reveal } from "./Reveal-BHA4QcZj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-C1sh_us_.js
var import_jsx_runtime = require_jsx_runtime();
var record = [
	["Legal name", company.legalName],
	["CIN", company.cin],
	["Date of incorporation", company.incorporationDate],
	["Registrar", company.roc],
	["Company class", company.companyClass],
	["Company status", company.companyStatus],
	["Authorised capital", company.authorisedCapital],
	["Paid-up capital", company.paidUpCapital],
	["Industrial activity (NIC " + company.nic.code + ")", company.nic.description],
	["GSTIN", company.gstin]
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "About the company",
			title: "A heavy engineering supplier working out of India's steel belt",
			intro: `Micro Technocam Equipments Private Limited was incorporated on ${company.incorporationDate} and operates as a manufacturer, supplier and trading company for steel melting, material handling and lifting equipment.`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "grid gap-12 lg:grid-cols-[1.1fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Profile" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 font-display text-3xl font-extrabold uppercase leading-tight md:text-4xl",
						children: "Equipment engineered to the plant, not to a catalogue page"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7 space-y-5 text-base leading-relaxed text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The company's published portfolio spans steel melting equipment — ladle furnaces, ladle preheaters, AOD decarburisation and continuous casting machines — alongside conveyor systems for sponge iron and ferrous material, and lifting equipment including EOT, goliath and gantry cranes, hoists and crane components." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Works are located at Joratarai, Durg in Chhattisgarh, close to the central Indian steel cluster, with the registered office at Janakpuri, New Delhi. The business operates seven days a week and works with clients across manufacturer, supplier and trading engagements." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Capacities and dimensions are configured per project. Where a specification is stated on the public listing it is reproduced on the relevant product page; where it is not, the requirement is scoped during enquiry rather than assumed." })
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 120,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Statutory record" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-6 divide-y divide-hairline border-y border-hairline",
							children: record.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1 py-4 sm:flex-row sm:justify-between sm:gap-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-sm text-muted-foreground",
									children: k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-sm font-medium text-foreground sm:text-right",
									children: v
								})]
							}, k))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-xs leading-relaxed text-muted-foreground",
							children: "Sourced from the company's public MCA record and TradeIndia seller profile."
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-hairline-dark bg-ink py-20 text-ink-foreground md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "grid gap-14 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Board of directors" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-7 space-y-4",
					children: company.directors.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-b border-hairline-dark pb-4 font-display text-xl font-bold uppercase",
						children: d
					}, d))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 100,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Locations" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-7 grid gap-8 sm:grid-cols-2",
							children: [company.works, company.registeredOffice].map((loc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg font-bold uppercase text-primary",
								children: loc.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-ink-muted",
								children: loc.lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									children: l
								}, l))
							})] }, loc.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-10 text-sm text-ink-muted",
							children: [
								"Contact person: ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-ink-foreground",
									children: company.contactPerson
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Working days: ",
								company.workingDays
							]
						})
					]
				})]
			})
		})
	] });
}
//#endregion
export { About as component };
