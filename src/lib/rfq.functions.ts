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


export const submitRfq = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => rfqSchema.parse(input))
  .handler(async ({ data }) => {
    // MVP mode: log submission server-side; database integration added later
    console.log("[rfq] Received RFQ submission:", {
      fullName: data.fullName,
      email: data.email,
      company: data.company,
      requirement: data.requirement.slice(0, 100) + (data.requirement.length > 100 ? "…" : ""),
    });
    return { ok: true as const };
  });
