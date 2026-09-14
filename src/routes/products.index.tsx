import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Search } from "lucide-react";
import { Container, PageHeader } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { SmartImage } from "@/components/common/SmartImage";
import { categories, products, type CategoryId } from "@/data/products";

type ProductSearch = { category: CategoryId | "all"; q: string };

const validCategories = new Set<string>([...categories.map((c) => c.id), "all"]);

export const Route = createFileRoute("/products/")({
  validateSearch: (search: Record<string, unknown>): ProductSearch => {
    const category = String(search['category'] ?? "all");
    return {
      category: (validCategories.has(category) ? category : "all") as ProductSearch["category"],
      q: String(search['q'] ?? "").slice(0, 80),
    };
  },
  head: () => ({
    meta: [
      { title: "Product Catalogue — Micro Technocam Equipments" },
      {
        name: "description",
        content:
          "Steel melting equipment, EOT and goliath cranes, hoists, magnetic and sponge iron feeding conveyors, rolling mills and ball mills.",
      },
      { property: "og:title", content: "Product Catalogue — Micro Technocam Equipments" },
      {
        property: "og:description",
        content: "Browse the published equipment range by category and requirement.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { category, q } = Route.useSearch();
  const navigate = useNavigate({ from: "/products" });

  const query = q.trim().toLowerCase();
  const filtered = products.filter((p) => {
    const inCategory = category === "all" || p.category === category;
    const matches =
      !query ||
      p.name.toLowerCase().includes(query) ||
      p.shortDescription.toLowerCase().includes(query);
    return inCategory && matches;
  });

  const tabs = [{ id: "all" as const, name: "All equipment" }, ...categories.map((c) => ({ id: c.id, name: c.name }))];

  return (
    <>
      <PageHeader
        eyebrow="Product catalogue"
        title="Equipment range"
        intro="Every item below is drawn from the company's published catalogue. Specifications are listed only where they are publicly stated; all other configurations are scoped at enquiry."
      />

      <section className="border-b border-hairline bg-card">
        <Container className="flex flex-col gap-4 py-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="-mx-1 flex flex-wrap gap-2">
            {tabs.map((t) => (
              <Link
                key={t.id}
                to="/products"
                search={{ category: t.id, q }}
                className={`px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors sm:px-4 sm:py-2.5 ${
                  category === t.id
                    ? "bg-ink text-ink-foreground"
                    : "border border-hairline text-muted-foreground hover:border-primary hover:text-foreground"
                }`}
              >
                {t.name}
              </Link>
            ))}
          </div>
          <label className="relative flex w-full items-center lg:w-72">
            <Search className="pointer-events-none absolute left-3 h-4 w-4 text-muted-foreground" aria-hidden="true" />
            <span className="sr-only">Search products</span>
            <input
              value={q}
              onChange={(e) =>
                navigate({ search: (prev) => ({ ...prev, q: e.target.value.slice(0, 80) }), replace: true })
              }
              placeholder="Search equipment"
              className="w-full border border-hairline bg-background py-3 pl-10 pr-3 text-sm outline-none focus:border-primary"
            />
          </label>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <p className="eyebrow text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "product" : "products"}
          </p>
          {filtered.length === 0 ? (
            <p className="mt-10 text-base text-muted-foreground">
              No equipment matches that search. Try another term or clear the filter.
            </p>
          ) : (
            <ul className="mt-8 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <Reveal as="li" key={p.id} delay={(i % 3) * 60} className="group bg-background">
                  <Link to="/products/$slug" params={{ slug: p.slug }} className="flex h-full flex-col p-6">
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <SmartImage
                        src={p.image}
                        fallback={p.fallbackImage}
                        alt={p.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h2 className="mt-6 font-display text-xl font-bold uppercase leading-tight">{p.name}</h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {p.shortDescription}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                      View details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          )}
        </Container>
      </section>
    </>
  );
}
