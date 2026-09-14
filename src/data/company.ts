/**
 * Company data — every field below is sourced from public records.
 * Sources:
 *  - TradeIndia seller profile: https://www.tradeindia.com/micro-technocam-equipments-private-limited-3419357/
 *  - MCA/ZaubaCorp record:      https://www.zaubacorp.com/MICRO-TECHNOCAM-EQUIPMENTS-PRIVATE-LIMITED-U29219DL2010PTC199156
 *
 * Anything not verifiable from those sources is intentionally left out or marked
 * as editable placeholder content (see `editable` blocks) so it can be replaced
 * by the client before launch.
 */

export const company = {
  legalName: "Micro Technocam Equipments Private Limited",
  shortName: "Micro Technocam",
  establishedYear: 2010,
  incorporationDate: "16 February 2010",
  cin: "U29219DL2010PTC199156",
  registrationNumber: "199156",
  gstin: "22AAGCM4611A2Z8",
  roc: "ROC Delhi",
  companyStatus: "Active",
  companyClass: "Private, Non-government company",
  authorisedCapital: "₹ 25,00,000",
  paidUpCapital: "₹ 25,00,000",
  nic: { code: "2921", description: "Manufacture of agricultural and forestry machinery" },
  businessType: ["Manufacturer", "Supplier", "Trading Company"],
  workingDays: "Monday – Sunday",
  directors: ["Ramesh Kumar Jangra", "Manju Jangra", "Subhash Singh", "Samer Singh"],
  contactPerson: "Mr. J. Ramesh Kumar",
  email: "mtcebhilai@gmail.com",
  works: {
    label: "Works / Operations",
    lines: ["Ph No 16, Kh No 1280, Joratarai", "Durg, Chhattisgarh 490023", "India"],
    city: "Durg, Chhattisgarh",
  },
  registeredOffice: {
    label: "Registered Office",
    lines: ["409/2 DDA Building II, District Center", "Janak Palace, Janakpuri", "New Delhi 110058, India"],
    city: "New Delhi",
  },
  listedProductCount: 26,
  sources: {
    tradeindia: "https://www.tradeindia.com/micro-technocam-equipments-private-limited-3419357/",
    mca: "https://www.zaubacorp.com/MICRO-TECHNOCAM-EQUIPMENTS-PRIVATE-LIMITED-U29219DL2010PTC199156",
  },
  developer: {
    name: "Appnity Softwares Private Limited",
  },
} as const;

/** Verified, source-backed facts safe to display as figures. */
export const verifiedFacts = [
  { value: String(company.establishedYear), label: "Year established", note: "Incorporated 16 Feb 2010" },
  { value: `${company.listedProductCount}+`, label: "Products listed", note: "Public TradeIndia catalogue" },
  { value: "3", label: "Business roles", note: "Manufacturer · Supplier · Trading" },
  { value: "7", label: "Working days", note: "Monday to Sunday" },
] as const;

/**
 * Editable placeholders — no factual claims are made here. These blocks exist so
 * the client can supply verified content (plant photos, project references,
 * certifications) without redesigning the page.
 */
export const editable = {
  projectsNote:
    "Project references and site photographs will be published here once supplied and approved by Micro Technocam Equipments Pvt. Ltd.",
  certificationsNote:
    "Certification and quality documentation can be listed in this section when the company provides the relevant certificates.",
};
