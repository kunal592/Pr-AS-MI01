import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Container, Eyebrow, PageHeader } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { editable } from "@/data/company";
import { categories, productsByCategory } from "@/data/products";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Deployments — Micro Technocam Equipments" },
      {
        name: "description",
        content:
          "Deployment areas for Micro Technocam equipment across steel melting shops, crane installations and bulk handling lines.",
      },
      { property: "og:title", content: "Projects & Deployments — Micro Technocam Equipments" },
      {
        property: "og:description",
        content: "Typical deployment scopes by equipment line, with client project references to follow.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Deployment scopes"
        intro="Project references are published only once supplied and approved by the company. Below are the deployment scopes represented by the current equipment portfolio."
      />

      <section className="py-16 md:py-24">
        <Container>
          <ul className="grid gap-px bg-hairline md:grid-cols-2">
            {categories.map((c, i) => {
              const items = productsByCategory(c.id);
              return (
                <Reveal as="li" key={c.id} delay={i * 70} className="bg-background p-8 md:p-10">
                  <div className="aspect-[16/9] overflow-hidden bg-muted">
                    <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <Eyebrow>{c.tagline}</Eyebrow>
                  <h2 className="mt-3 font-display text-2xl font-bold uppercase leading-tight">{c.name}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
                  <p className="eyebrow mt-6 text-muted-foreground">{items.length} equipment items in scope</p>
                  <Link
                    to="/products"
                    search={{ category: c.id, q: "" }}
                    className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary"
                  >
                    View scope <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Reveal>
              );
            })}
          </ul>

          <Reveal className="mt-16 border border-hairline bg-card p-8 md:p-10">
            <Eyebrow>Project references</Eyebrow>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              {editable.projectsNote}
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 bg-primary px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary-foreground"
            >
              Discuss a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
