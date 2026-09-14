import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

import { Container, Eyebrow, PageHeader } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { products, categories } from "@/data/products";
import { company } from "@/data/company";

export const Route = createFileRoute("/quote")({
  validateSearch: (search: Record<string, unknown>): { product?: string } =>
    typeof search["product"] === "string" ? { product: search["product"] as string } : {},
  head: () => ({
    meta: [
      { title: "Request a Quote | Micro Technocam Equipments Pvt. Ltd." },
      {
        name: "description",
        content:
          "Send your steel plant, crane or material handling equipment requirement to Micro Technocam Equipments and receive a tailored quotation.",
      },
      { property: "og:title", content: "Request a Quote | Micro Technocam Equipments" },
      {
        property: "og:description",
        content:
          "Share specifications, capacity and timelines for ladle furnaces, EOT cranes, conveyors and more. Our team responds with a detailed quotation.",
      },
    ],
  }),
  component: QuotePage,
});

const timelines = ["Immediate", "Within 1 month", "1–3 months", "3–6 months", "Planning stage"];
const budgets = ["Under ₹10 lakh", "₹10–50 lakh", "₹50 lakh – 1 crore", "Above ₹1 crore", "Not decided"];

const fieldClass =
  "w-full border border-hairline bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";
const labelClass = "block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground";

function QuotePage() {
  const { product } = Route.useSearch();
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [selected, setSelected] = useState<string[]>(product ? [product] : []);

  function toggleProduct(slug: string) {
    setSelected((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    const value = (key: string) => String(fd.get(key) ?? "").trim();

    setSending(true);
    try {
      const fullName = value("fullName");
      const email = value("email");
      const phone = value("phone");
      const company_ = value("company");
      const designation = value("designation");
      const city = value("city");
      const country = value("country");
      const industry = value("industry");
      const quantity = value("quantity");
      const capacity = value("capacityRequirement");
      const timeline = value("timeline");
      const budget = value("budgetRange");
      const requirement = value("requirement");
      const source = value("source");
      const products_ = selected.join(", ") || "Not specified";

      const subject = encodeURIComponent(
        `RFQ from ${fullName}${company_ ? ` — ${company_}` : ""}`
      );

      const body = encodeURIComponent(
        [
          "REQUEST FOR QUOTATION",
          "======================",
          "",
          "CONTACT DETAILS",
          `Name        : ${fullName}`,
          `Email       : ${email}`,
          `Phone       : ${phone || "—"}`,
          `Designation : ${designation || "—"}`,
          "",
          "COMPANY",
          `Company     : ${company_ || "—"}`,
          `Industry    : ${industry || "—"}`,
          `City        : ${city || "—"}`,
          `Country     : ${country || "—"}`,
          "",
          "EQUIPMENT OF INTEREST",
          `Products    : ${products_}`,
          "",
          "REQUIREMENT",
          `Quantity    : ${quantity || "—"}`,
          `Capacity    : ${capacity || "—"}`,
          `Timeline    : ${timeline || "—"}`,
          `Budget      : ${budget || "—"}`,
          "",
          "DESCRIPTION",
          requirement,
          "",
          "HOW THEY HEARD ABOUT US",
          source || "—",
        ].join("\n")
      );

      window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;

      // Small delay so the mailto opens before we reset
      await new Promise((r) => setTimeout(r, 800));

      setDone(true);
      form.reset();
      setSelected([]);
      toast.success("Your email client has opened — please send the pre-filled email to complete your request.");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please email us directly at " + company.email);
    } finally {
      setSending(false);
    }
  }

  if (done) {
    return (
      <>
        <PageHeader
          eyebrow="Request for Quotation"
          title="Request received"
          intro="Thank you — your enquiry has reached our engineering desk."
        />
        <section className="py-20 md:py-28">
          <Container>
            <div className="max-w-2xl border border-hairline p-6 sm:p-10">
              <CheckCircle2 className="h-10 w-10 text-primary" />
              <h2 className="mt-6 font-display text-2xl font-extrabold uppercase">What happens next</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Our team reviews your specifications and responds with a detailed quotation. For urgent
                requirements you can write to us directly at{" "}
                <a className="text-primary" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
                .
              </p>
              <button
                onClick={() => setDone(false)}
                className="mt-8 inline-flex items-center gap-2 bg-primary px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary-foreground"
              >
                Submit another request <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </Container>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Request for Quotation"
        title="Tell us what you need to build"
        intro="Share your equipment, capacity and timeline details. The more specific your requirement, the more precise our quotation."
      />

      <section className="py-16 md:py-24">
        <Container>
          <form onSubmit={handleSubmit} className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_300px]">
            <div className="space-y-14">
              <Reveal>
                <fieldset className="border-t border-hairline pt-8">
                  <Eyebrow>01 — Your details</Eyebrow>
                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="fullName">
                        Full name *
                      </label>
                      <input id="fullName" name="fullName" required className={`mt-2 ${fieldClass}`} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="email">
                        Email *
                      </label>
                      <input id="email" name="email" type="email" required className={`mt-2 ${fieldClass}`} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="phone">
                        Phone
                      </label>
                      <input id="phone" name="phone" className={`mt-2 ${fieldClass}`} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="designation">
                        Designation
                      </label>
                      <input id="designation" name="designation" className={`mt-2 ${fieldClass}`} />
                    </div>
                  </div>
                </fieldset>
              </Reveal>

              <Reveal>
                <fieldset className="border-t border-hairline pt-8">
                  <Eyebrow>02 — Company</Eyebrow>
                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="company">
                        Company name
                      </label>
                      <input id="company" name="company" className={`mt-2 ${fieldClass}`} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="industry">
                        Industry
                      </label>
                      <input
                        id="industry"
                        name="industry"
                        placeholder="Steel, cement, power…"
                        className={`mt-2 ${fieldClass}`}
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="city">
                        City
                      </label>
                      <input id="city" name="city" className={`mt-2 ${fieldClass}`} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="country">
                        Country
                      </label>
                      <input id="country" name="country" defaultValue="India" className={`mt-2 ${fieldClass}`} />
                    </div>
                  </div>
                </fieldset>
              </Reveal>

              <Reveal>
                <fieldset className="border-t border-hairline pt-8">
                  <Eyebrow>03 — Equipment of interest</Eyebrow>
                  <div className="mt-8 space-y-8">
                    {categories.map((category) => (
                      <div key={category.id}>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground">
                          {category.name}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {products
                            .filter((p) => p.category === category.id)
                            .map((p) => {
                              const active = selected.includes(p.slug);
                              return (
                                <button
                                  type="button"
                                  key={p.slug}
                                  onClick={() => toggleProduct(p.slug)}
                                  aria-pressed={active}
                                  className={`border px-4 py-2 text-[12px] uppercase tracking-[0.1em] transition-colors ${
                                    active
                                      ? "border-primary bg-primary text-primary-foreground"
                                      : "border-hairline text-muted-foreground hover:border-primary hover:text-primary"
                                  }`}
                                >
                                  {p.name}
                                </button>
                              );
                            })}
                        </div>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </Reveal>

              <Reveal>
                <fieldset className="border-t border-hairline pt-8">
                  <Eyebrow>04 — Requirement</Eyebrow>
                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="quantity">
                        Quantity
                      </label>
                      <input id="quantity" name="quantity" className={`mt-2 ${fieldClass}`} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="capacityRequirement">
                        Capacity / tonnage
                      </label>
                      <input
                        id="capacityRequirement"
                        name="capacityRequirement"
                        placeholder="e.g. 10 T EOT crane"
                        className={`mt-2 ${fieldClass}`}
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="timeline">
                        Timeline
                      </label>
                      <select id="timeline" name="timeline" className={`mt-2 ${fieldClass}`} defaultValue="">
                        <option value="">Select</option>
                        {timelines.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="budgetRange">
                        Indicative budget
                      </label>
                      <select id="budgetRange" name="budgetRange" className={`mt-2 ${fieldClass}`} defaultValue="">
                        <option value="">Select</option>
                        {budgets.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className={labelClass} htmlFor="requirement">
                        Describe your requirement *
                      </label>
                      <textarea
                        id="requirement"
                        name="requirement"
                        required
                        minLength={10}
                        rows={6}
                        placeholder="Application, duty cycle, span, site conditions, drawings available…"
                        className={`mt-2 ${fieldClass}`}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className={labelClass} htmlFor="source">
                        How did you hear about us?
                      </label>
                      <input id="source" name="source" className={`mt-2 ${fieldClass}`} />
                    </div>
                  </div>
                </fieldset>
              </Reveal>

              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-2 bg-primary px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? "Sending…" : "Submit request"} <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>

            <aside className="h-fit border border-hairline p-6 lg:sticky lg:top-28">
              <Eyebrow>Direct contact</Eyebrow>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Prefer to speak first? Write to our team and we will route your enquiry to the right engineer.
              </p>
              <dl className="mt-6 space-y-5 text-sm">
                <div>
                  <dt className={labelClass}>Email</dt>
                  <dd className="mt-1">
                    <a className="text-primary" href={`mailto:${company.email}`}>
                      {company.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className={labelClass}>Contact person</dt>
                  <dd className="mt-1 text-foreground">{company.contactPerson}</dd>
                </div>
                <div>
                  <dt className={labelClass}>{company.works.label}</dt>
                  <dd className="mt-1 text-muted-foreground">{company.works.lines.join(", ")}</dd>
                </div>
                <div>
                  <dt className={labelClass}>Working days</dt>
                  <dd className="mt-1 text-muted-foreground">{company.workingDays}</dd>
                </div>
              </dl>
            </aside>
          </form>
        </Container>
      </section>
    </>
  );
}
