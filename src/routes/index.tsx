import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container, Eyebrow } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { SmartImage } from "@/components/common/SmartImage";
import { categories, products } from "@/data/products";
import { industries } from "@/data/industries";
import { company, verifiedFacts } from "@/data/company";
import heroImg from "@/assets/hero-steel.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Micro Technocam Equipments — Steel Plant & Crane Equipment" },
      {
        name: "description",
        content:
          "Manufacturer and supplier of steel melting equipment, EOT and goliath cranes and conveyor systems. Established 2010, works at Durg, Chhattisgarh.",
      },
      { property: "og:title", content: "Micro Technocam Equipments Pvt. Ltd." },
      {
        property: "og:description",
        content:
          "Steel melting equipment, cranes and material handling systems engineered for heavy industrial duty.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const featured = products.slice(0, 6);

  return (
    <>
      <section className="relative isolate flex min-h-[90vh] items-end overflow-hidden bg-ink text-ink-foreground">
        <img
          src={heroImg}
          alt="Ladle furnace operating inside a steel melting shop"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="tech-grid absolute inset-0 opacity-60" />
        <Container className="relative z-10 pb-14 pt-36 md:pb-24">
          <Reveal>
            <Eyebrow>Established {company.establishedYear} · Durg, Chhattisgarh</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 max-w-5xl font-display text-4xl font-extrabold uppercase leading-[0.92] sm:text-5xl md:text-7xl lg:text-[5.5rem]">
              Heavy equipment for
              <span className="block text-primary">steel, lifting &amp; handling</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base md:text-lg">
              Micro Technocam Equipments Pvt. Ltd. is a manufacturer, supplier and trading company for
              steel melting equipment, industrial conveyors and cranes — built to plant layout and
              customised to project requirement.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
              <Link
                to="/products"
                search={{ category: "all", q: "" }}
                className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:-translate-y-0.5 sm:px-7"
              >
                View product catalogue <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 border border-hairline-dark px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors hover:border-primary hover:text-primary sm:px-7"
              >
                Request a quote <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-hairline bg-card">
        <Container className="px-0 md:px-10 lg:px-14">
          <dl className="grid grid-cols-2 md:grid-cols-4">
            {verifiedFacts.map((f, i) => (
              <Reveal key={f.label} delay={i * 60} className="border-hairline px-5 py-8 [&:nth-child(odd)]:border-r md:border-r md:px-8 md:py-10 last:border-r-0 md:last:border-r-0 [&:nth-child(3)]:md:border-r [&:nth-child(4)]:border-r-0">
                <dt className="eyebrow text-muted-foreground">{f.label}</dt>
                <dd className="mt-3 font-display text-3xl font-extrabold text-foreground md:text-5xl">
                  {f.value}
                </dd>
                <p className="mt-2 text-xs text-muted-foreground">{f.note}</p>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <Reveal className="max-w-3xl">
            <Eyebrow>Capability areas</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold uppercase leading-tight md:text-5xl">
              Four equipment lines, one engineering discipline
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px bg-hairline md:grid-cols-2">
            {categories.map((c, i) => (
              <Reveal key={c.id} delay={i * 70} className="group bg-background">
                <Link
                  to="/products"
                  search={{ category: c.id, q: "" }}
                  className="flex h-full flex-col p-8 md:p-10"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                    <img
                      src={c.image}
                      alt={c.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="eyebrow mt-7 text-primary">{c.tagline}</p>
                  <h3 className="mt-3 font-display text-2xl font-bold uppercase leading-tight md:text-3xl">
                    {c.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-foreground">
                    Explore range
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-hairline-dark bg-ink py-20 text-ink-foreground md:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <Eyebrow>From the catalogue</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-extrabold uppercase md:text-5xl">
                Featured equipment
              </h2>
            </Reveal>
            <Link
              to="/products"
              search={{ category: "all", q: "" }}
              className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary"
            >
              All products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <ul className="mt-14 grid gap-px bg-hairline-dark sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal as="li" key={p.id} delay={i * 60} className="group bg-ink">
                <Link to="/products/$slug" params={{ slug: p.slug }} className="block p-6">
                  <div className="relative aspect-[4/3] overflow-hidden bg-graphite">
                    <SmartImage
                      src={p.image}
                      fallback={p.fallbackImage}
                      alt={p.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold uppercase">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.shortDescription}</p>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <Reveal className="max-w-3xl">
            <Eyebrow>Industries served</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold uppercase leading-tight md:text-5xl">
              Built for plants that run continuously
            </h2>
          </Reveal>
          <ul className="mt-12 grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind, i) => (
              <Reveal as="li" key={ind.id} delay={i * 60}>
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={ind.image} alt={ind.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold uppercase md:text-lg">{ind.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">{ind.description}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-hairline bg-card py-16 md:py-24">
        <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Eyebrow>Next step</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-2xl font-extrabold uppercase leading-tight md:text-4xl">
              Share your specification and we will respond with a scoped proposal
            </h2>
          </div>
          <Link
            to="/quote"
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 bg-primary px-8 py-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            Start an RFQ <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Container>
      </section>
    </>
  );
}
