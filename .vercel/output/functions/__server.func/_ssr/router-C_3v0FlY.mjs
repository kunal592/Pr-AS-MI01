import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as Container } from "./Section-CWDhBlFD.mjs";
import { t as company } from "./company-CYMT_m4Z.mjs";
import { t as categories } from "./products-stYZEPF5.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as MapPin, i as Menu, o as Mail, t as X, u as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as Route$8 } from "./products._slug-CstTlZQp.mjs";
import { t as Route$9 } from "./products.index-CY94c3au.mjs";
import { t as Route$10 } from "./quote-CFFtRtIB.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C_3v0FlY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CKY4-m8m.css";
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/products",
		label: "Products"
	},
	{
		to: "/industries",
		label: "Industries"
	},
	{
		to: "/capabilities",
		label: "Capabilities"
	},
	{
		to: "/projects",
		label: "Projects"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => setOpen(false), [pathname]);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${scrolled || open ? "border-hairline-dark bg-ink/95 backdrop-blur" : "border-transparent bg-gradient-to-b from-ink/80 to-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "flex h-[72px] items-center justify-between gap-6 md:h-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "group flex items-center gap-3",
					"aria-label": `${company.shortName} home`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex h-9 w-9 items-center justify-center bg-primary font-display text-lg font-black text-primary-foreground",
						children: "M"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "leading-tight text-ink-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-sm font-extrabold uppercase tracking-wide md:text-base",
							children: "Micro Technocam"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow block text-[9px] text-ink-muted",
							children: "Equipments Pvt. Ltd."
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 lg:flex",
					"aria-label": "Primary",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: item.to,
						activeOptions: { exact: item.to === "/" },
						className: "relative py-2 text-[13px] font-medium uppercase tracking-[0.12em] text-ink-muted transition-colors hover:text-ink-foreground data-[status=active]:text-ink-foreground",
						children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" })]
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/quote",
						className: "hidden items-center gap-2 bg-primary px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 sm:inline-flex",
						children: ["Request a Quote", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen((v) => !v),
						"aria-expanded": open,
						"aria-label": open ? "Close menu" : "Open menu",
						className: "inline-flex h-11 w-11 items-center justify-center border border-hairline-dark text-ink-foreground lg:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "tech-grid fixed inset-0 top-[72px] z-40 overflow-y-auto bg-ink px-5 pb-12 pt-6 lg:hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex flex-col",
					"aria-label": "Mobile",
					children: nav.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						activeOptions: { exact: item.to === "/" },
						style: { animationDelay: `${i * 40}ms` },
						className: "animate-in fade-in slide-in-from-bottom-2 border-b border-hairline-dark py-5 font-display text-2xl font-bold uppercase text-ink-foreground data-[status=active]:text-primary",
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/quote",
					className: "mt-8 flex items-center justify-between bg-primary px-6 py-5 font-display text-lg font-bold uppercase text-primary-foreground",
					children: ["Request a Quote", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-5 w-5" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 text-sm text-ink-muted",
					children: [
						company.email,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						company.works.city
					]
				})
			]
		}) : null]
	});
}
function Footer() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-hairline-dark bg-ink text-ink-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-16 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-xl font-extrabold uppercase leading-tight",
							children: ["Micro Technocam", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-primary",
								children: "Equipments Pvt. Ltd."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 max-w-sm text-sm leading-relaxed text-ink-muted",
							children: [
								"Established ",
								company.establishedYear,
								". Manufacturer, supplier and trading company for steel melting equipment, conveyor systems and industrial lifting equipment, operating from ",
								company.works.city,
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "eyebrow mt-6 text-ink-muted",
							children: ["CIN ", company.cin]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "eyebrow mt-1 text-ink-muted",
							children: ["GST ", company.gstin]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Product categories",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "eyebrow text-primary",
							children: "Products"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-3 text-sm text-ink-muted",
							children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/products",
								search: {
									category: c.id,
									q: ""
								},
								className: "transition-colors hover:text-ink-foreground",
								children: c.name
							}) }, c.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Quick links",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "eyebrow text-primary",
							children: "Company"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-3 text-sm text-ink-muted",
							children: [
								{
									to: "/about",
									label: "About"
								},
								{
									to: "/industries",
									label: "Industries"
								},
								{
									to: "/capabilities",
									label: "Capabilities"
								},
								{
									to: "/projects",
									label: "Projects"
								},
								{
									to: "/contact",
									label: "Contact"
								},
								{
									to: "/quote",
									label: "Request a Quote"
								}
							].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: l.to,
								className: "transition-colors hover:text-ink-foreground",
								children: l.label
							}) }, l.to))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "eyebrow text-primary",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-5 space-y-5 text-sm text-ink-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "mt-0.5 h-4 w-4 shrink-0 text-primary",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-ink-foreground",
										children: company.works.label
									}), company.works.lines.join(", ")] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "mt-0.5 h-4 w-4 shrink-0 text-primary",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-ink-foreground",
										children: company.registeredOffice.label
									}), company.registeredOffice.lines.join(", ")] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
										className: "mt-0.5 h-4 w-4 shrink-0 text-primary",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `mailto:${company.email}`,
										className: "hover:text-ink-foreground",
										children: company.email
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/quote",
							className: "mt-8 inline-flex items-center gap-2 border border-hairline-dark px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors hover:border-primary hover:text-primary",
							children: ["Submit a requirement ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
						})
					] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 border-t border-hairline-dark pt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-3 py-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary",
						children: "prototype-ASXMI01 — Appnity Softwares Pvt. Ltd."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 text-xs text-ink-muted md:flex-row md:items-center md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						year,
						" ",
						company.legalName,
						". All rights reserved."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Website developed by ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-ink-foreground",
						children: company.developer.name
					})] })]
				})]
			})]
		})
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	ssr: false,
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "author",
				content: "Micro Technocam Equipments Private Limited"
			},
			{
				property: "og:site_name",
				content: "Micro Technocam Equipments Pvt. Ltd."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800;900&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "Micro Technocam Equipments Private Limited",
				foundingDate: "2010-02-16",
				email: "mtcebhilai@gmail.com",
				address: {
					"@type": "PostalAddress",
					streetAddress: "Ph No 16, Kh No 1280, Joratarai",
					addressLocality: "Durg",
					addressRegion: "Chhattisgarh",
					postalCode: "490023",
					addressCountry: "IN"
				}
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const queryClient = Route$7.useRouteContext()?.queryClient ?? new QueryClient();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "min-h-screen",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "top-right" })
		]
	});
}
var $$splitComponentImporter$6 = () => import("./routes-DEOSvnQx.mjs");
var Route$6 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Micro Technocam Equipments — Steel Plant & Crane Equipment" },
			{
				name: "description",
				content: "Manufacturer and supplier of steel melting equipment, EOT and goliath cranes and conveyor systems. Established 2010, works at Durg, Chhattisgarh."
			},
			{
				property: "og:title",
				content: "Micro Technocam Equipments Pvt. Ltd."
			},
			{
				property: "og:description",
				content: "Steel melting equipment, cranes and material handling systems engineered for heavy industrial duty."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./about-C1sh_us_.mjs");
var Route$5 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About — Micro Technocam Equipments Pvt. Ltd." },
			{
				name: "description",
				content: "Incorporated in 2010 and registered with ROC Delhi, Micro Technocam Equipments manufactures and supplies steel plant, lifting and conveying equipment from Durg, Chhattisgarh."
			},
			{
				property: "og:title",
				content: "About Micro Technocam Equipments"
			},
			{
				property: "og:description",
				content: "Company record, leadership and locations — all figures sourced from public filings."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./capabilities-C1DSUBjT.mjs");
var Route$4 = createFileRoute("/capabilities")({
	head: () => ({
		meta: [
			{ title: "Capabilities — Micro Technocam Equipments" },
			{
				name: "description",
				content: "Manufacturing, supply and trading capability across steel melting equipment, cranes, conveyors and processing machinery, customised to project requirement."
			},
			{
				property: "og:title",
				content: "Capabilities — Micro Technocam Equipments"
			},
			{
				property: "og:description",
				content: "How enquiries move from specification to commissioned equipment."
			},
			{
				property: "og:url",
				content: "/capabilities"
			}
		],
		links: [{
			rel: "canonical",
			href: "/capabilities"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-CDVx9FIu.mjs");
var Route$3 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact — Micro Technocam Equipments Pvt. Ltd." },
			{
				name: "description",
				content: "Contact Micro Technocam Equipments — works at Joratarai, Durg, Chhattisgarh and registered office at Janakpuri, New Delhi."
			},
			{
				property: "og:title",
				content: "Contact Micro Technocam Equipments"
			},
			{
				property: "og:description",
				content: "Reach the works, registered office or the sales desk."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./industries-BMWJpeLr.mjs");
var Route$2 = createFileRoute("/industries")({
	head: () => ({
		meta: [
			{ title: "Industries Served — Micro Technocam Equipments" },
			{
				name: "description",
				content: "Steel and metallurgy, heavy engineering, bulk material handling and industrial processing plants served by Micro Technocam equipment."
			},
			{
				property: "og:title",
				content: "Industries Served — Micro Technocam Equipments"
			},
			{
				property: "og:description",
				content: "Where our steel plant, lifting and conveying equipment is deployed."
			},
			{
				property: "og:url",
				content: "/industries"
			}
		],
		links: [{
			rel: "canonical",
			href: "/industries"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./products-C7F03LXy.mjs");
var Route$1 = createFileRoute("/products")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./projects-U4yeGCQt.mjs");
var Route = createFileRoute("/projects")({
	head: () => ({
		meta: [
			{ title: "Projects & Deployments — Micro Technocam Equipments" },
			{
				name: "description",
				content: "Deployment areas for Micro Technocam equipment across steel melting shops, crane installations and bulk handling lines."
			},
			{
				property: "og:title",
				content: "Projects & Deployments — Micro Technocam Equipments"
			},
			{
				property: "og:description",
				content: "Typical deployment scopes by equipment line, with client project references to follow."
			},
			{
				property: "og:url",
				content: "/projects"
			}
		],
		links: [{
			rel: "canonical",
			href: "/projects"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$7
});
var AboutRoute = Route$5.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$7
});
var CapabilitiesRoute = Route$4.update({
	id: "/capabilities",
	path: "/capabilities",
	getParentRoute: () => Route$7
});
var ContactRoute = Route$3.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$7
});
var IndustriesRoute = Route$2.update({
	id: "/industries",
	path: "/industries",
	getParentRoute: () => Route$7
});
var ProductsRoute = Route$1.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => Route$7
});
var ProjectsRoute = Route.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => Route$7
});
var QuoteRoute = Route$10.update({
	id: "/quote",
	path: "/quote",
	getParentRoute: () => Route$7
});
var ProductsIndexRoute = Route$9.update({
	id: "/",
	path: "/",
	getParentRoute: () => ProductsRoute
});
var ProductsRouteChildren = {
	ProductsSlugRoute: Route$8.update({
		id: "/$slug",
		path: "/$slug",
		getParentRoute: () => ProductsRoute
	}),
	ProductsIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	CapabilitiesRoute,
	ContactRoute,
	IndustriesRoute,
	ProductsRoute: ProductsRoute._addFileChildren(ProductsRouteChildren),
	ProjectsRoute,
	QuoteRoute
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0,
		notFoundMode: "root"
	});
};
//#endregion
export { getRouter };
