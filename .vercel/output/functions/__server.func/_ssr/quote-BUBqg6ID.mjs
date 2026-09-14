import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Eyebrow, r as PageHeader, t as Container } from "./Section-CWDhBlFD.mjs";
import { t as company } from "./company-CYMT_m4Z.mjs";
import { t as Reveal } from "./Reveal-BHA4QcZj.mjs";
import { s as products, t as categories } from "./products-stYZEPF5.mjs";
import { k as isRedirect, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as CircleCheck, u as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-dIYKwL6j.mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { t as Route } from "./quote-oIFf7rPh.mjs";
import { i as stringType, n as literalType, r as objectType, t as arrayType } from "../_libs/zod.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quote-BUBqg6ID.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
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
var submitRfq = createServerFn({ method: "POST" }).inputValidator((input) => rfqSchema.parse(input)).handler(createSsrRpc("734f4d746ddb2b1e931f1004330a70be1fed7cc99da2f1b12614af0e6d7560b4"));
var timelines = [
	"Immediate",
	"Within 1 month",
	"1–3 months",
	"3–6 months",
	"Planning stage"
];
var budgets = [
	"Under ₹10 lakh",
	"₹10–50 lakh",
	"₹50 lakh – 1 crore",
	"Above ₹1 crore",
	"Not decided"
];
var fieldClass = "w-full border border-hairline bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";
var labelClass = "block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground";
function QuotePage() {
	const { product } = Route.useSearch();
	const submit = useServerFn(submitRfq);
	const [sending, setSending] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)(false);
	const [selected, setSelected] = (0, import_react.useState)(product ? [product] : []);
	function toggleProduct(slug) {
		setSelected((prev) => prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]);
	}
	async function handleSubmit(event) {
		event.preventDefault();
		const form = event.currentTarget;
		const fd = new FormData(form);
		const value = (key) => String(fd.get(key) ?? "").trim();
		setSending(true);
		try {
			await submit({ data: {
				fullName: value("fullName"),
				email: value("email"),
				phone: value("phone"),
				company: value("company"),
				designation: value("designation"),
				city: value("city"),
				country: value("country"),
				industry: value("industry"),
				productInterest: selected,
				quantity: value("quantity"),
				capacityRequirement: value("capacityRequirement"),
				timeline: value("timeline"),
				budgetRange: value("budgetRange"),
				requirement: value("requirement"),
				source: value("source")
			} });
			setDone(true);
			form.reset();
			setSelected([]);
			toast.success("Request received. Our team will get back to you shortly.");
		} catch (error) {
			console.error(error);
			toast.error(error instanceof Error ? error.message : "Something went wrong. Please try again.");
		} finally {
			setSending(false);
		}
	}
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Request for Quotation",
		title: "Request received",
		intro: "Thank you — your enquiry has reached our engineering desk."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-2xl border border-hairline p-6 sm:p-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-10 w-10 text-primary" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 font-display text-2xl font-extrabold uppercase",
					children: "What happens next"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted-foreground",
					children: [
						"Our team reviews your specifications and responds with a detailed quotation. For urgent requirements you can write to us directly at",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "text-primary",
							href: `mailto:${company.email}`,
							children: company.email
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setDone(false),
					className: "mt-8 inline-flex items-center gap-2 bg-primary px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary-foreground",
					children: ["Submit another request ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
				})
			]
		}) })
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Request for Quotation",
		title: "Tell us what you need to build",
		intro: "Share your equipment, capacity and timeline details. The more specific your requirement, the more precise our quotation."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit,
			className: "grid gap-14 lg:grid-cols-[minmax(0,1fr)_300px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "border-t border-hairline pt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "01 — Your details" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 grid gap-6 md:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: labelClass,
									htmlFor: "fullName",
									children: "Full name *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "fullName",
									name: "fullName",
									required: true,
									className: `mt-2 ${fieldClass}`
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: labelClass,
									htmlFor: "email",
									children: "Email *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "email",
									name: "email",
									type: "email",
									required: true,
									className: `mt-2 ${fieldClass}`
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: labelClass,
									htmlFor: "phone",
									children: "Phone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "phone",
									name: "phone",
									className: `mt-2 ${fieldClass}`
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: labelClass,
									htmlFor: "designation",
									children: "Designation"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "designation",
									name: "designation",
									className: `mt-2 ${fieldClass}`
								})] })
							]
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "border-t border-hairline pt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "02 — Company" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 grid gap-6 md:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: labelClass,
									htmlFor: "company",
									children: "Company name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "company",
									name: "company",
									className: `mt-2 ${fieldClass}`
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: labelClass,
									htmlFor: "industry",
									children: "Industry"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "industry",
									name: "industry",
									placeholder: "Steel, cement, power…",
									className: `mt-2 ${fieldClass}`
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: labelClass,
									htmlFor: "city",
									children: "City"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "city",
									name: "city",
									className: `mt-2 ${fieldClass}`
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: labelClass,
									htmlFor: "country",
									children: "Country"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "country",
									name: "country",
									defaultValue: "India",
									className: `mt-2 ${fieldClass}`
								})] })
							]
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "border-t border-hairline pt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "03 — Equipment of interest" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 space-y-8",
							children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground",
								children: category.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 flex flex-wrap gap-2",
								children: products.filter((p) => p.category === category.id).map((p) => {
									const active = selected.includes(p.slug);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => toggleProduct(p.slug),
										"aria-pressed": active,
										className: `border px-4 py-2 text-[12px] uppercase tracking-[0.1em] transition-colors ${active ? "border-primary bg-primary text-primary-foreground" : "border-hairline text-muted-foreground hover:border-primary hover:text-primary"}`,
										children: p.name
									}, p.slug);
								})
							})] }, category.id))
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "border-t border-hairline pt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "04 — Requirement" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 grid gap-6 md:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: labelClass,
									htmlFor: "quantity",
									children: "Quantity"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "quantity",
									name: "quantity",
									className: `mt-2 ${fieldClass}`
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: labelClass,
									htmlFor: "capacityRequirement",
									children: "Capacity / tonnage"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "capacityRequirement",
									name: "capacityRequirement",
									placeholder: "e.g. 10 T EOT crane",
									className: `mt-2 ${fieldClass}`
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: labelClass,
									htmlFor: "timeline",
									children: "Timeline"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									id: "timeline",
									name: "timeline",
									className: `mt-2 ${fieldClass}`,
									defaultValue: "",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Select"
									}), timelines.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: t,
										children: t
									}, t))]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: labelClass,
									htmlFor: "budgetRange",
									children: "Indicative budget"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									id: "budgetRange",
									name: "budgetRange",
									className: `mt-2 ${fieldClass}`,
									defaultValue: "",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Select"
									}), budgets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: b,
										children: b
									}, b))]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "md:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: labelClass,
										htmlFor: "requirement",
										children: "Describe your requirement *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										id: "requirement",
										name: "requirement",
										required: true,
										minLength: 10,
										rows: 6,
										placeholder: "Application, duty cycle, span, site conditions, drawings available…",
										className: `mt-2 ${fieldClass}`
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "md:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: labelClass,
										htmlFor: "source",
										children: "How did you hear about us?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "source",
										name: "source",
										className: `mt-2 ${fieldClass}`
									})]
								})
							]
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						disabled: sending,
						className: "inline-flex items-center gap-2 bg-primary px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60",
						children: [
							sending ? "Sending…" : "Submit request",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "h-fit border border-hairline p-6 lg:sticky lg:top-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Direct contact" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm leading-relaxed text-muted-foreground",
						children: "Prefer to speak first? Write to our team and we will route your enquiry to the right engineer."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-6 space-y-5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: labelClass,
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "text-primary",
									href: `mailto:${company.email}`,
									children: company.email
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: labelClass,
								children: "Contact person"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-foreground",
								children: company.contactPerson
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: labelClass,
								children: company.works.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-muted-foreground",
								children: company.works.lines.join(", ")
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: labelClass,
								children: "Working days"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-muted-foreground",
								children: company.workingDays
							})] })
						]
					})
				]
			})]
		}) })
	})] });
}
//#endregion
export { QuotePage as component };
