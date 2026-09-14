import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container, Eyebrow, PageHeader } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { industries } from "@/data/industries";
import { getCategory, productsByCategory } from "@/data/products";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries Served — Micro Technocam Equipments" },
      {
        name: "description",
        content:
          "Steel and metallurgy, heavy engineering, bulk material handling and industrial processing plants served by Micro Technocam equipment.",
      },
      { property: "og:title", content: "Industries Served — Micro Technocam Equipments" },
      {
        property: "og:description",
        content: "Where our steel plant, lifting and conveying equipment is deployed.",
      },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: Industries,
});

function Industries() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Where the equipment works"
        intro="Sectors mapped directly to the company's published product lines — no claim is made for markets outside that portfolio."
      />

      <section className="py-16 md:py-24">
        <Container className="space-y-px bg-hairline">
          {industries.map((ind, i) => (
            <Reveal key={ind.id} delay={i * 60} className="bg-background">
              <div className="grid gap-8 py-10 px-4 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-16 md:px-2 md:py-12">
                <div className={i % 2 ? "md:order-2" : ""}>
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img src={ind.image} alt={ind.name} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                </div>
                <div>
                  <Eyebrow>{String(i + 1).padStart(2, "0")}</Eyebrow>
                  <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight md:text-4xl">
                    {ind.name}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">{ind.description}</p>
                  <ul className="mt-7 flex flex-wrap gap-2">
                    {ind.relatedCategories.flatMap((c) => productsByCategory(c)).slice(0, 5).map((p) => (
                      <li key={p.id}>
                        <Link
                          to="/products/$slug"
                          params={{ slug: p.slug }}
                          className="inline-block border border-hairline px-3 py-2 text-xs transition-colors hover:border-primary hover:text-primary"
                        >
                          {p.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {ind.relatedCategories[0] ? (
                    <Link
                      to="/products"
                      search={{ category: ind.relatedCategories[0], q: "" }}
                      className="mt-7 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary"
                    >
                      {getCategory(ind.relatedCategories[0]).name} <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>
    </>
  );
}
