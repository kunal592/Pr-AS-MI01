import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Container, Eyebrow, PageHeader } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { company, editable } from "@/data/company";
import { categories } from "@/data/products";

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "Capabilities — Micro Technocam Equipments" },
      {
        name: "description",
        content:
          "Manufacturing, supply and trading capability across steel melting equipment, cranes, conveyors and processing machinery, customised to project requirement.",
      },
      { property: "og:title", content: "Capabilities — Micro Technocam Equipments" },
      {
        property: "og:description",
        content: "How enquiries move from specification to commissioned equipment.",
      },
      { property: "og:url", content: "/capabilities" },
    ],
    links: [{ rel: "canonical", href: "/capabilities" }],
  }),
  component: Capabilities,
});

const process = [
  {
    title: "Requirement study",
    body: "Duty cycle, plant layout, capacity and interface points are recorded from your specification or site inputs.",
  },
  {
    title: "Configuration",
    body: "Equipment is configured to the stated requirement — capacity, dimensions and construction are set per project rather than fixed.",
  },
  {
    title: "Manufacture & supply",
    body: "The company operates as manufacturer, supplier and trading company, so scope can cover fabrication, supply or both.",
  },
  {
    title: "Delivery & support",
    body: "Despatch is coordinated to the site schedule, with the company operating seven days a week.",
  },
];

function Capabilities() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title="Engineering scope and working model"
        intro={`Operating as ${company.businessType.join(", ").toLowerCase()} since ${company.establishedYear}, with works at ${company.works.city}.`}
      />

      <section className="py-16 md:py-24">
        <Container>
          <Reveal className="max-w-3xl">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold uppercase leading-tight md:text-5xl">
              From specification to commissioned equipment
            </h2>
          </Reveal>
          <ol className="mt-14 grid gap-px bg-hairline md:grid-cols-2 lg:grid-cols-4">
            {process.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 70} className="bg-background p-8">
                <span className="font-mono text-4xl font-medium text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-xl font-bold uppercase leading-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-y border-hairline-dark bg-ink py-16 text-ink-foreground md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>Equipment scope</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold uppercase md:text-4xl">
              Four supply lines
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-px bg-hairline-dark md:grid-cols-2">
            {categories.map((c, i) => (
              <Reveal as="li" key={c.id} delay={i * 60} className="bg-ink p-8">
                <p className="eyebrow text-primary">{c.tagline}</p>
                <h3 className="mt-3 font-display text-2xl font-bold uppercase leading-tight">{c.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">{c.description}</p>
                <Link
                  to="/products"
                  search={{ category: c.id, q: "" }}
                  className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-foreground"
                >
                  See equipment <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <Reveal className="max-w-3xl border border-hairline bg-card p-8">
            <Eyebrow>Quality & certification</Eyebrow>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{editable.certificationsNote}</p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
