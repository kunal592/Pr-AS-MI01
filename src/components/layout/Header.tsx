import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/common/Section";
import { company } from "@/data/company";

const nav = [
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
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
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
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
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
            className="hidden items-center gap-2 bg-primary px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 sm:inline-flex"
          >
            Request a Quote
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center border border-hairline-dark text-ink-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div className="tech-grid fixed inset-0 top-[72px] z-40 overflow-y-auto bg-ink px-5 pb-12 pt-6 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {nav.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                style={{ animationDelay: `${i * 40}ms` }}
                className="animate-in fade-in slide-in-from-bottom-2 border-b border-hairline-dark py-5 font-display text-2xl font-bold uppercase text-ink-foreground data-[status=active]:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/quote"
            className="mt-8 flex items-center justify-between bg-primary px-6 py-5 font-display text-lg font-bold uppercase text-primary-foreground"
          >
            Request a Quote
            <ArrowUpRight className="h-5 w-5" />
          </Link>
          <p className="mt-8 text-sm text-ink-muted">
            {company.email}
            <br />
            {company.works.city}
          </p>
        </div>
      ) : null}
    </header>
  );
}
