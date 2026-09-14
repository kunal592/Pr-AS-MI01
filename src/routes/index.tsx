import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Container } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { SmartImage } from "@/components/common/SmartImage";
import { categories, products } from "@/data/products";
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
  const selectedProducts = products.slice(0, 3);

  return (
    <>
      {/* SECTION 0: HERO (Dark Industrial Aesthetic) */}
      <section className="relative isolate flex min-h-screen flex-col justify-between overflow-hidden bg-black pt-28 pb-8 text-white">
        <img
          src={heroImg}
          alt="Heavy industrial steel plant with molten metal casting machinery"
          className="absolute inset-0 h-full w-full object-cover opacity-50 contrast-125 brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />
        <div className="tech-grid absolute inset-0 opacity-40" />

        <Container className="relative z-10 my-auto py-12">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-300 font-medium">
              INDUSTRIAL EQUIPMENT · DURG, INDIA · SINCE 2010
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
                className="inline-flex h-14 items-center justify-center gap-3 bg-primary px-8 font-mono text-[13px] font-bold uppercase tracking-[0.14em] text-white rounded-none transition-all hover:bg-primary/90 hover:translate-x-0.5"
              >
                EXPLORE PRODUCTS <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
              </Link>
              <Link
                to="/quote"
                className="inline-flex h-14 items-center justify-center gap-3 border border-white/40 bg-transparent px-8 font-mono text-[13px] font-bold uppercase tracking-[0.14em] text-white rounded-none transition-all hover:border-primary hover:text-primary"
              >
                START A CONVERSATION <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
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

      {/* SECTION 01: COMPANY (Warm Beige Stats Section) */}
      <section className="bg-[#EAE7E1] py-20 text-neutral-900 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Info Column */}
            <Reveal className="lg:col-span-6">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
                01 / COMPANY
              </p>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                Built around the realities of industry.
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-neutral-700 sm:text-base">
                MICRO TECHNOCAM EQUIPMENTS PRIVATE LIMITED is a manufacturer, supplier and trading company
                established in 2010, with a public product portfolio spanning steel melting equipment,
                conveyors, cranes and industrial machinery.
              </p>
            </Reveal>

            {/* Right Stats Column */}
            <Reveal delay={120} className="flex flex-col justify-center lg:col-span-6">
              <div className="divide-y divide-neutral-300 border-t border-b border-neutral-300">
                {/* Stat 1 */}
                <div className="flex items-baseline justify-between py-6">
                  <span className="font-display text-4xl font-extrabold sm:text-5xl md:text-6xl">
                    2010
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-neutral-600">
                    ESTABLISHED
                  </span>
                </div>
                {/* Stat 2 */}
                <div className="flex items-baseline justify-between py-6">
                  <span className="font-display text-4xl font-extrabold sm:text-5xl md:text-6xl">
                    Durg
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-neutral-600">
                    CHHATTISGARH, INDIA
                  </span>
                </div>
                {/* Stat 3 */}
                <div className="flex items-baseline justify-between py-6">
                  <span className="font-display text-4xl font-extrabold sm:text-5xl md:text-6xl">
                    26+
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-neutral-600">
                    PRODUCTS PUBLICLY LISTED
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* SECTION 02: PRODUCT ECOSYSTEM (Dark Rows) */}
      <section className="bg-[#121212] py-20 text-white md:py-28">
        <Container>
          <Reveal>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
              02 / PRODUCT ECOSYSTEM
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              A catalogue built for heavy work.
            </h2>
          </Reveal>

          {/* Product Rows List */}
          <div className="mt-14 border-t border-white/10 divide-y divide-white/10">
            {categories.map((c, i) => (
              <Reveal key={c.id} delay={i * 80} className="group">
                <Link
                  to="/products"
                  search={{ category: c.id, q: "" }}
                  className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between transition-colors hover:bg-white/[0.02]"
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    <span className="font-mono text-sm font-bold text-primary sm:text-base">
                      0{i + 1}
                    </span>
                    <div className="h-20 w-32 shrink-0 overflow-hidden bg-neutral-800 md:h-24 md:w-40">
                      <img
                        src={c.image}
                        alt={c.name}
                        loading="lazy"
                        className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold uppercase sm:text-2xl md:text-3xl transition-colors group-hover:text-primary">
                        {c.name}
                      </h3>
                      <p className="mt-1 max-w-md text-xs text-neutral-400 sm:text-sm">
                        {c.description}
                      </p>
                    </div>
                  </div>
                  <div className="self-end sm:self-center">
                    <ArrowRight className="h-6 w-6 text-white/50 transition-all duration-300 group-hover:translate-x-2 group-hover:text-primary" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 03: SELECTED EQUIPMENT (3 Card Grid on Warm Beige Canvas) */}
      <section className="bg-[#EAE7E1] py-20 text-neutral-900 md:py-28">
        <Container>
          <Reveal>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
              03 / SELECTED EQUIPMENT
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Products with a job to do.
            </h2>
          </Reveal>

          {/* 3 Product Cards Grid */}
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {selectedProducts.map((p, i) => (
              <Reveal key={p.id} delay={i * 80} className="group">
                <Link to="/products/$slug" params={{ slug: p.slug }} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-300">
                    <SmartImage
                      src={p.image}
                      fallback={p.fallbackImage}
                      alt={p.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute right-0 bottom-0 bg-primary px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5 transition-colors group-hover:bg-primary/90">
                      View detail <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
                    </div>
                  </div>
                  <p className="mt-6 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                    STEEL &amp; METALLURGICAL EQUIPMENT
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold uppercase leading-snug sm:text-2xl">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-700 sm:text-sm">
                    {p.shortDescription}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 flex justify-start">
            <Link
              to="/products"
              search={{ category: "all", q: "" }}
              className="inline-flex h-14 items-center gap-3 border border-neutral-900 bg-transparent px-8 font-mono text-xs font-bold uppercase tracking-[0.14em] text-neutral-900 rounded-none transition-all hover:bg-neutral-900 hover:text-white"
            >
              VIEW COMPLETE CATALOGUE <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
            </Link>
          </div>
        </Container>
      </section>

      {/* SECTION 04: CAPABILITY (Dark Graphite Canvas) */}
      <section className="bg-[#1C1D1D] py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
            <Reveal className="lg:col-span-7">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
                04 / CAPABILITY
              </p>
              <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight sm:text-5xl md:text-6xl lg:text-[4rem]">
                Precision starts <br />
                <span className="text-primary">before</span> <br />
                production.
              </h2>
            </Reveal>

            <Reveal delay={120} className="flex flex-col gap-8 lg:col-span-5">
              <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                Every industrial requirement begins with the right questions. Tell us what you need
                to move, melt, cast or lift — and start a focused conversation about the equipment.
              </p>
              <div>
                <Link
                  to="/quote"
                  className="inline-flex h-14 items-center gap-3 bg-primary px-8 font-mono text-xs font-bold uppercase tracking-[0.14em] text-white rounded-none transition-all hover:bg-primary/90 hover:translate-x-0.5"
                >
                  DISCUSS YOUR REQUIREMENT <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
