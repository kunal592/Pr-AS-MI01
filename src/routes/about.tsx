import { createFileRoute } from "@tanstack/react-router";
import { Container, Eyebrow, PageHeader } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { company } from "@/data/company";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Micro Technocam Equipments Pvt. Ltd." },
      {
        name: "description",
        content:
          "Incorporated in 2010 and registered with ROC Delhi, Micro Technocam Equipments manufactures and supplies steel plant, lifting and conveying equipment from Durg, Chhattisgarh.",
      },
      { property: "og:title", content: "About Micro Technocam Equipments" },
      {
        property: "og:description",
        content: "Company record, leadership and locations — all figures sourced from public filings.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const record = [
  ["Legal name", company.legalName],
  ["CIN", company.cin],
  ["Date of incorporation", company.incorporationDate],
  ["Registrar", company.roc],
  ["Company class", company.companyClass],
  ["Company status", company.companyStatus],
  ["Authorised capital", company.authorisedCapital],
  ["Paid-up capital", company.paidUpCapital],
  ["Industrial activity (NIC " + company.nic.code + ")", company.nic.description],
  ["GSTIN", company.gstin],
] as const;

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About the company"
        title="A heavy engineering supplier working out of India's steel belt"
        intro={`Micro Technocam Equipments Private Limited was incorporated on ${company.incorporationDate} and operates as a manufacturer, supplier and trading company for steel melting, material handling and lifting equipment.`}
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <Eyebrow>Profile</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold uppercase leading-tight md:text-4xl">
              Equipment engineered to the plant, not to a catalogue page
            </h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                The company's published portfolio spans steel melting equipment — ladle furnaces, ladle
                preheaters, AOD decarburisation and continuous casting machines — alongside conveyor
                systems for sponge iron and ferrous material, and lifting equipment including EOT,
                goliath and gantry cranes, hoists and crane components.
              </p>
              <p>
                Works are located at Joratarai, Durg in Chhattisgarh, close to the central Indian steel
                cluster, with the registered office at Janakpuri, New Delhi. The business operates seven
                days a week and works with clients across manufacturer, supplier and trading engagements.
              </p>
              <p>
                Capacities and dimensions are configured per project. Where a specification is stated on
                the public listing it is reproduced on the relevant product page; where it is not, the
                requirement is scoped during enquiry rather than assumed.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Eyebrow>Statutory record</Eyebrow>
            <dl className="mt-6 divide-y divide-hairline border-y border-hairline">
              {record.map(([k, v]) => (
                <div key={k} className="flex flex-col gap-1 py-4 sm:flex-row sm:justify-between sm:gap-8">
                  <dt className="text-sm text-muted-foreground">{k}</dt>
                  <dd className="text-sm font-medium text-foreground sm:text-right">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
              Sourced from the company's public MCA record and TradeIndia seller profile.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-hairline-dark bg-ink py-20 text-ink-foreground md:py-24">
        <Container className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Board of directors</Eyebrow>
            <ul className="mt-7 space-y-4">
              {company.directors.map((d) => (
                <li key={d} className="border-b border-hairline-dark pb-4 font-display text-xl font-bold uppercase">
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>Locations</Eyebrow>
            <div className="mt-7 grid gap-8 sm:grid-cols-2">
              {[company.works, company.registeredOffice].map((loc) => (
                <div key={loc.label}>
                  <p className="font-display text-lg font-bold uppercase text-primary">{loc.label}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {loc.lines.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-sm text-ink-muted">
              Contact person: <span className="text-ink-foreground">{company.contactPerson}</span>
              <br />
              Working days: {company.workingDays}
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
