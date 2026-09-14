import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MapPin, Clock, ArrowUpRight, User } from "lucide-react";
import { Container, Eyebrow, PageHeader } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { company } from "@/data/company";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Micro Technocam Equipments Pvt. Ltd." },
      {
        name: "description",
        content:
          "Contact Micro Technocam Equipments — works at Joratarai, Durg, Chhattisgarh and registered office at Janakpuri, New Delhi.",
      },
      { property: "og:title", content: "Contact Micro Technocam Equipments" },
      { property: "og:description", content: "Reach the works, registered office or the sales desk." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to the equipment desk"
        intro="Send a requirement and the team will respond with scope, configuration options and commercial terms."
      />

      <section className="py-16 md:py-24">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <Eyebrow>Direct contact</Eyebrow>
            <ul className="mt-7 space-y-8">
              <li className="flex gap-4">
                <User className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-display text-lg font-bold uppercase">{company.contactPerson}</p>
                  <p className="text-sm text-muted-foreground">Contact person</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <a href={`mailto:${company.email}`} className="font-display text-lg font-bold uppercase">
                    {company.email}
                  </a>
                  <p className="text-sm text-muted-foreground">Enquiry email</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-display text-lg font-bold uppercase">{company.workingDays}</p>
                  <p className="text-sm text-muted-foreground">Working days</p>
                </div>
              </li>
            </ul>

            <Link
              to="/quote"
              className="mt-12 inline-flex items-center gap-2 bg-primary px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Submit a detailed RFQ <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={100}>
            <Eyebrow>Locations</Eyebrow>
            <div className="mt-7 space-y-px bg-hairline">
              {[company.works, company.registeredOffice].map((loc) => (
                <div key={loc.label} className="bg-card p-7">
                  <div className="flex gap-4">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <p className="eyebrow text-muted-foreground">{loc.label}</p>
                      <address className="mt-2 not-italic text-base leading-relaxed">
                        {loc.lines.map((l) => (
                          <span key={l} className="block">
                            {l}
                          </span>
                        ))}
                      </address>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 border border-hairline p-7 text-sm leading-relaxed text-muted-foreground">
              <p>
                {company.legalName}
                <br />
                CIN {company.cin} · GSTIN {company.gstin}
                <br />
                Registered with {company.roc}.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
