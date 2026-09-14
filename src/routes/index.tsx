import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Container, Eyebrow } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { SmartImage } from "@/components/common/SmartImage";
import { categories, products } from "@/data/products";
import { industries } from "@/data/industries";
import { verifiedFacts } from "@/data/company";
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
      {/* Hero Section — Matching Reference Design */}
      <section className="relative isolate flex min-h-screen flex-col justify-between overflow-hidden bg-ink pt-28 pb-8 text-ink-foreground">
        <img
          src={heroImg}
          alt="Heavy industrial steel plant with molten metal casting machinery"
          className="absolute inset-0 h-full w-full object-cover opacity-50 contrast-125 brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />
        <div className="tech-grid absolute inset-0 opacity-40" />

        <Container className="relative z-10 my-auto py-12">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-ink-muted">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-gray-300">
                INDUSTRIAL EQUIPMENT · DURG, INDIA · SINCE 2010
              </span>
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 max-w-5xl font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-tight sm:text-6xl md:text-7xl lg:text-[6.2rem]">
              Engineering <br />
              <span className="text-primary">industrial</span> <br />
              excellence.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
              Steel melting equipment, material handling systems and industrial machinery for
              demanding environments.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-4 xs:flex-row xs:items-center">
              <Link
                to="/products"
                search={{ category: "all", q: "" }}
                className="inline-flex items-center justify-center gap-2.5 bg-primary px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.14em] text-white transition-all hover:bg-primary/90 hover:translate-x-0.5"
              >
                EXPLORE PRODUCTS <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2.5 border border-white/30 bg-transparent px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.14em] text-white transition-all hover:border-primary hover:text-primary"
              >
                START A CONVERSATION <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </Container>

        {/* Hero Bottom Bar */}
        <Container className="relative z-10 w-full pt-4">
          <div className="flex items-center justify-between border-t border-white/10 pt-4 font-mono text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <ArrowDownRight className="h-4 w-4 text-primary" />
              <span className="uppercase tracking-wider">Scroll to explore</span>
            </div>
            <div className="font-mono tracking-widest text-white/80 font-medium">
              01 / 04
            </div>
          </div>
        </Container>
      </section>

      {/* Verified Facts & Stats */}
      <section className="border-b border-hairline bg-card">
        <Container className="px-0 md:px-10 lg:px-14">
          <dl className="grid grid-cols-2 md:grid-cols-4">
            {verifiedFacts.map((f, i) => (
              <Reveal
                key={f.label}
                delay={i * 60}
                className="border-hairline px-5 py-8 [&:nth-child(odd)]:border-r md:border-r md:px-8 md:py-10 last:border-r-0 md:last:border-r-0 [&:nth-child(3)]:md:border-r [&:nth-child(4)]:border-r-0"
              >
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

      {/* Capability Lines */}
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
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
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

      {/* Featured Equipment Catalogue */}
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
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {p.shortDescription}
                  </p>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Industries Served */}
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
                  <img
                    src={ind.image}
                    alt={ind.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 font-display text-base font-bold uppercase md:text-lg">
                  {ind.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {ind.description}
                </p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Proposal CTA */}
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
