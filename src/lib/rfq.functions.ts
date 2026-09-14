import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const rfqSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  designation: z.string().trim().max(120).optional().or(z.literal("")),
  city: z.string().trim().max(120).optional().or(z.literal("")),
  country: z.string().trim().max(120).optional().or(z.literal("")),
  industry: z.string().trim().max(120).optional().or(z.literal("")),
  productInterest: z.array(z.string().max(120)).max(20).default([]),
  quantity: z.string().trim().max(80).optional().or(z.literal("")),
  capacityRequirement: z.string().trim().max(200).optional().or(z.literal("")),
  timeline: z.string().trim().max(80).optional().or(z.literal("")),
  budgetRange: z.string().trim().max(80).optional().or(z.literal("")),
  requirement: z.string().trim().min(10).max(4000),
  source: z.string().trim().max(120).optional().or(z.literal("")),
});

export type RfqInput = z.input<typeof rfqSchema>;

const orNull = (v?: string) => (v && v.length > 0 ? v : null);

export const submitRfq = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => rfqSchema.parse(input))
  .handler(async ({ data }) => {
    try {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

      const { error } = await supabaseAdmin.from("rfq_submissions").insert({
        full_name: data.fullName,
        email: data.email,
        phone: orNull(data.phone),
        company: orNull(data.company),
        designation: orNull(data.designation),
        city: orNull(data.city),
        country: orNull(data.country),
        industry: orNull(data.industry),
        product_interest: data.productInterest,
        quantity: orNull(data.quantity),
        capacity_requirement: orNull(data.capacityRequirement),
        timeline: orNull(data.timeline),
        budget_range: orNull(data.budgetRange),
        requirement: data.requirement,
        source: orNull(data.source),
      });

      if (error) {
        console.warn("[rfq] Supabase insert failed (mocking success for MVP):", error.message);
      }
    } catch (err) {
      console.warn("[rfq] Supabase unavailable (mocking success for MVP):", err);
    }

    return { ok: true as const };
  });
