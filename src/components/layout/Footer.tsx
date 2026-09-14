import { Link } from "@tanstack/react-router";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/common/Section";
import { company } from "@/data/company";
import { categories } from "@/data/products";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline-dark bg-ink text-ink-foreground">
      <Container className="py-16 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <p className="font-display text-xl font-extrabold uppercase leading-tight">
              Micro Technocam
              <span className="block text-primary">Equipments Pvt. Ltd.</span>
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-muted">
              Established {company.establishedYear}. Manufacturer, supplier and trading company for steel melting
              equipment, conveyor systems and industrial lifting equipment, operating from {company.works.city}.
            </p>
            <p className="eyebrow mt-6 text-ink-muted">CIN {company.cin}</p>
            <p className="eyebrow mt-1 text-ink-muted">GST {company.gstin}</p>
          </div>

          <nav aria-label="Product categories">
            <h2 className="eyebrow text-primary">Products</h2>
            <ul className="mt-5 space-y-3 text-sm text-ink-muted">
              {categories.map((c) => (
                <li key={c.id}>
                  <Link
                    to="/products"
                    search={{ category: c.id, q: "" }}
                    className="transition-colors hover:text-ink-foreground"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Quick links">
            <h2 className="eyebrow text-primary">Company</h2>
            <ul className="mt-5 space-y-3 text-sm text-ink-muted">
              {[
                { to: "/about", label: "About" },
                { to: "/industries", label: "Industries" },
                { to: "/capabilities", label: "Capabilities" },
                { to: "/projects", label: "Projects" },
                { to: "/contact", label: "Contact" },
                { to: "/quote", label: "Request a Quote" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-ink-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-primary">Contact</h2>
            <ul className="mt-5 space-y-5 text-sm text-ink-muted">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <span className="block text-ink-foreground">{company.works.label}</span>
                  {company.works.lines.join(", ")}
                </span>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <span className="block text-ink-foreground">{company.registeredOffice.label}</span>
                  {company.registeredOffice.lines.join(", ")}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <a href={`mailto:${company.email}`} className="hover:text-ink-foreground">
                  {company.email}
                </a>
              </li>
            </ul>
            <Link
              to="/quote"
              className="mt-8 inline-flex items-center gap-2 border border-hairline-dark px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors hover:border-primary hover:text-primary"
            >
              Submit a requirement <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 border-t border-hairline-dark pt-6">
          <div className="mb-4 inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-3 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
              prototype-ASXMI01 &mdash; Appnity Softwares Pvt. Ltd.
            </span>
          </div>
          <div className="flex flex-col gap-3 text-xs text-ink-muted md:flex-row md:items-center md:justify-between">
            <p>
              © {year} {company.legalName}. All rights reserved.
            </p>
            <p>
              Website developed by <span className="text-ink-foreground">{company.developer.name}</span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
