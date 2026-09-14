import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Eyebrow, t as Container } from "./Section-CWDhBlFD.mjs";
import { r as verifiedFacts, t as company } from "./company-CYMT_m4Z.mjs";
import { t as Reveal } from "./Reveal-BHA4QcZj.mjs";
import { o as hero_steel_default, s as products, t as categories } from "./products-stYZEPF5.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as ArrowRight, u as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as industries } from "./industries-Cxcf9zXA.mjs";
import { t as SmartImage } from "./SmartImage-BXvj9F0_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DEOSvnQx.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const featured = products.slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate flex min-h-[90vh] items-end overflow-hidden bg-ink text-ink-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_steel_default,
					alt: "Ladle furnace operating inside a steel melting shop",
					className: "absolute inset-0 h-full w-full object-cover opacity-45"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tech-grid absolute inset-0 opacity-60" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
					className: "relative z-10 pb-14 pt-36 md:pb-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Eyebrow, { children: [
							"Established ",
							company.establishedYear,
							" · Durg, Chhattisgarh"
						] }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-5 max-w-5xl font-display text-4xl font-extrabold uppercase leading-[0.92] sm:text-5xl md:text-7xl lg:text-[5.5rem]",
								children: ["Heavy equipment for", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-primary",
									children: "steel, lifting & handling"
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 160,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base md:text-lg",
								children: "Micro Technocam Equipments Pvt. Ltd. is a manufacturer, supplier and trading company for steel melting equipment, industrial conveyors and cranes — built to plant layout and customised to project requirement."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 240,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-col gap-3 xs:flex-row xs:flex-wrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/products",
									search: {
										category: "all",
										q: ""
									},
									className: "inline-flex items-center justify-center gap-2 bg-primary px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:-translate-y-0.5 sm:px-7",
									children: ["View product catalogue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/quote",
									className: "inline-flex items-center justify-center gap-2 border border-hairline-dark px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors hover:border-primary hover:text-primary sm:px-7",
									children: ["Request a quote ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
								})]
							})
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-hairline bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
				className: "px-0 md:px-10 lg:px-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "grid grid-cols-2 md:grid-cols-4",
					children: verifiedFacts.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 60,
						className: "border-hairline px-5 py-8 [&:nth-child(odd)]:border-r md:border-r md:px-8 md:py-10 last:border-r-0 md:last:border-r-0 [&:nth-child(3)]:md:border-r [&:nth-child(4)]:border-r-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "eyebrow text-muted-foreground",
								children: f.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-3 font-display text-3xl font-extrabold text-foreground md:text-5xl",
								children: f.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-muted-foreground",
								children: f.note
							})
						]
					}, f.label))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Capability areas" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 font-display text-3xl font-extrabold uppercase leading-tight md:text-5xl",
					children: "Four equipment lines, one engineering discipline"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-px bg-hairline md:grid-cols-2",
				children: categories.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 70,
					className: "group bg-background",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/products",
						search: {
							category: c.id,
							q: ""
						},
						className: "flex h-full flex-col p-8 md:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative aspect-[16/9] overflow-hidden bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: c.image,
									alt: c.name,
									loading: "lazy",
									className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mt-7 text-primary",
								children: c.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-2xl font-bold uppercase leading-tight md:text-3xl",
								children: c.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed text-muted-foreground",
								children: c.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-6 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-foreground",
								children: ["Explore range", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
							})
						]
					})
				}, c.id))
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-hairline-dark bg-ink py-20 text-ink-foreground md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "From the catalogue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 font-display text-3xl font-extrabold uppercase md:text-5xl",
					children: "Featured equipment"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/products",
					search: {
						category: "all",
						q: ""
					},
					className: "inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary",
					children: ["All products ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-14 grid gap-px bg-hairline-dark sm:grid-cols-2 lg:grid-cols-3",
				children: featured.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					as: "li",
					delay: i * 60,
					className: "group bg-ink",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/products/$slug",
						params: { slug: p.slug },
						className: "block p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative aspect-[4/3] overflow-hidden bg-graphite",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
									src: p.image,
									fallback: p.fallbackImage,
									alt: p.name,
									className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 font-display text-xl font-bold uppercase",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-ink-muted",
								children: p.shortDescription
							})
						]
					})
				}, p.id))
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Industries served" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 font-display text-3xl font-extrabold uppercase leading-tight md:text-5xl",
					children: "Built for plants that run continuously"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-12 grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4",
				children: industries.map((ind, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					as: "li",
					delay: i * 60,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/3] overflow-hidden bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: ind.image,
								alt: ind.name,
								loading: "lazy",
								className: "h-full w-full object-cover"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-base font-bold uppercase md:text-lg",
							children: ind.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm",
							children: ind.description
						})
					]
				}, ind.id))
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-hairline bg-card py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "flex flex-col items-start justify-between gap-8 md:flex-row md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Next step" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 max-w-2xl font-display text-2xl font-extrabold uppercase leading-tight md:text-4xl",
					children: "Share your specification and we will respond with a scoped proposal"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/quote",
					className: "inline-flex w-full shrink-0 items-center justify-center gap-2 bg-primary px-8 py-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:-translate-y-0.5 sm:w-auto",
					children: ["Start an RFQ ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
				})]
			})
		})
	] });
}
//#endregion
export { Home as component };
