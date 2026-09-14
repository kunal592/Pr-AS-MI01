import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/common/Section";
import { company } from "@/data/company";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/industries", label: "Industries" },
  { to: "/capabilities", label: "Capabilities" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          scrolled
            ? "border-hairline-dark bg-ink/95 backdrop-blur"
            : "border-transparent bg-gradient-to-b from-ink/80 to-transparent"
        }`}
      >
        <Container className="flex h-[72px] items-center justify-between gap-6 md:h-20">
          <Link to="/" className="group flex items-center gap-3" aria-label={`${company.shortName} home`}>
            <span className="flex h-9 w-9 items-center justify-center bg-primary font-display text-lg font-black text-primary-foreground">
              M
            </span>
            <span className="leading-tight text-ink-foreground">
              <span className="block font-display text-sm font-extrabold uppercase tracking-wide md:text-base">
                Micro Technocam
              </span>
              <span className="eyebrow block text-[9px] text-ink-muted">Equipments Pvt. Ltd.</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {nav.filter((item) => item.to !== "/").map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="relative py-2 text-[13px] font-medium uppercase tracking-[0.12em] text-ink-muted transition-colors hover:text-ink-foreground data-[status=active]:text-ink-foreground"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/quote"
              className="hidden items-center gap-2.5 bg-primary px-6 py-4 text-[13px] font-extrabold uppercase tracking-[0.14em] text-primary-foreground transition-all duration-200 hover:bg-primary/90 rounded-none sm:inline-flex"
            >
              REQUEST A QUOTE
              <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-label="Open menu"
              className="inline-flex h-11 w-11 items-center justify-center border border-hairline-dark text-ink-foreground lg:hidden hover:border-primary hover:text-primary transition-colors"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Full Screen Menu Overlay */}
      {open ? (
        <div className="tech-grid fixed inset-0 z-[100] flex flex-col justify-between bg-black/98 p-6 text-white overflow-y-auto lg:hidden">
          {/* Mobile Overlay Header */}
          <div className="flex items-center justify-between pb-6 border-b border-hairline-dark">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="group flex items-center gap-3"
              aria-label={`${company.shortName} home`}
            >
              <span className="flex h-9 w-9 items-center justify-center bg-primary font-display text-lg font-black text-white">
                M
              </span>
              <span className="leading-tight text-white">
                <span className="block font-display text-sm font-extrabold uppercase tracking-wide">
                  Micro Technocam
                </span>
                <span className="eyebrow block text-[9px] text-gray-400">Equipments Pvt. Ltd.</span>
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-11 w-11 items-center justify-center border border-hairline-dark text-white hover:border-primary hover:text-primary transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="my-auto py-8 flex flex-col" aria-label="Mobile Navigation">
            {nav.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                onClick={() => setOpen(false)}
                className="border-b border-hairline-dark py-4 font-display text-2xl font-bold uppercase text-white transition-colors hover:text-primary data-[status=active]:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Bottom Actions & Contact Info */}
          <div className="pt-6 border-t border-hairline-dark flex flex-col gap-6">
            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="flex h-14 items-center justify-between bg-primary px-6 font-mono text-xs font-bold uppercase tracking-[0.14em] text-white rounded-none transition-all hover:bg-primary/90"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
            </Link>

            <div className="flex flex-col gap-1 font-mono text-xs text-gray-400">
              <p className="text-white font-medium">{company.email}</p>
              <p>{company.works.city}, Chhattisgarh, India</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
