import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Container, Eyebrow } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { SmartImage } from "@/components/common/SmartImage";
import { getCategory, getProduct, relatedProducts } from "@/data/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.product;
    return {
      meta: [
        { title: `${p.name} — Micro Technocam Equipments` },
        { name: "description", content: p.shortDescription },
        { property: "og:title", content: `${p.name} — Micro Technocam Equipments` },
        { property: "og:description", content: p.shortDescription },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/products/${params.slug}` },
        { property: "og:image", content: p.image },
        { name: "twitter:image", content: p.image },
      ],
      links: [{ rel: "canonical", href: `/products/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: p.name,
            description: p.shortDescription,
            image: p.image,
            brand: { "@type": "Brand", name: "Micro Technocam Equipments Private Limited" },
          }),
        },
      ],
    };
  },
  notFoundComponent: ProductNotFound,
  component: ProductDetail,
});

function ProductNotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 pt-24">
      <div className="text-center">
        <h1 className="font-display text-3xl font-extrabold uppercase">Product not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">This item is not in the published catalogue.</p>
        <Link
          to="/products"
          search={{ category: "all", q: "" }}
          className="mt-7 inline-flex bg-primary px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary-foreground"
        >
          Back to catalogue
        </Link>
      </div>
    </div>
  );
}

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const category = getCategory(product.category);
  const related = relatedProducts(product);

  return (
    <>
      <section className="tech-grid border-b border-hairline-dark bg-ink pb-16 pt-32 text-ink-foreground md:pb-20 md:pt-40">
        <Container>
          <Link
            to="/products"
            search={{ category: product.category, q: "" }}
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> {category.name}
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <Reveal>
              <div className="aspect-[4/3] overflow-hidden border border-hairline-dark bg-graphite">
                <SmartImage
                  src={product.image}
                  fallback={product.fallbackImage}
                  alt={product.name}
                  loading="eager"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <Eyebrow>{category.tagline}</Eyebrow>
              <h1 className="mt-5 font-display text-4xl font-extrabold uppercase leading-[0.95] md:text-6xl">
                {product.name}
              </h1>
              <p className="mt-6 text-base leading-relaxed text-ink-muted">{product.shortDescription}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/quote"
                  search={{ product: product.slug }}
                  className="inline-flex items-center gap-2 bg-primary px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Request a quote <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-hairline-dark px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors hover:border-primary hover:text-primary"
                >
                  Talk to the team
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            {product.overview ? (
              <Reveal>
                <Eyebrow>Overview</Eyebrow>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">{product.overview}</p>
              </Reveal>
            ) : null}

            {product.features?.length ? (
              <Reveal delay={80} className="mt-12">
                <Eyebrow>Listed features</Eyebrow>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 border-b border-hairline pb-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ) : null}

            {product.applications?.length ? (
              <Reveal delay={120} className="mt-12">
                <Eyebrow>Typical applications</Eyebrow>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {product.applications.map((a) => (
                    <li key={a} className="border border-hairline px-4 py-2 text-xs uppercase tracking-[0.1em]">
                      {a}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ) : null}
          </div>

          <Reveal delay={140}>
            <div className="border border-hairline bg-card p-7">
              <Eyebrow>Specification</Eyebrow>
              {product.specifications?.length ? (
                <dl className="mt-5 divide-y divide-hairline">
                  {product.specifications.map((s) => (
                    <div key={s.label} className="flex justify-between gap-6 py-3 text-sm">
                      <dt className="text-muted-foreground">{s.label}</dt>
                      <dd className="text-right font-medium">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  No specification is publicly published for this item. Capacity, dimensions and duty are
                  confirmed against your plant requirement during enquiry.
                </p>
              )}
              {product.sourceUrl ? (
                <a
                  href={product.sourceUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-7 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary"
                >
                  Public listing <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </Reveal>
        </Container>
      </section>

      {related.length ? (
        <section className="border-t border-hairline bg-card py-16 md:py-20">
          <Container>
            <Eyebrow>Related equipment</Eyebrow>
            <ul className="mt-8 grid gap-8 sm:grid-cols-3">
              {related.map((p) => (
                <li key={p.id} className="group">
                  <Link to="/products/$slug" params={{ slug: p.slug }}>
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <SmartImage
                        src={p.image}
                        fallback={p.fallbackImage}
                        alt={p.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold uppercase">{p.name}</h3>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}
    </>
  );
}
