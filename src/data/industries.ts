import heroImg from "@/assets/hero-steel.jpg";
import cranesImg from "@/assets/cranes.jpg";
import conveyorsImg from "@/assets/conveyors.jpg";
import rollingImg from "@/assets/rolling.jpg";
import type { CategoryId } from "./products";

export type Industry = {
  id: string;
  name: string;
  description: string;
  image: string;
  relatedCategories: CategoryId[];
};

/** Derived strictly from the company's publicly listed product portfolio. */
export const industries: Industry[] = [
  {
    id: "steel-metallurgy",
    name: "Steel & Metallurgy",
    description:
      "Melting shops, secondary refining and casting bays — the core environment for ladle furnaces, AOD decarburisation and continuous casting equipment.",
    image: heroImg,
    relatedCategories: ["steel-metallurgical"],
  },
  {
    id: "heavy-engineering",
    name: "Heavy Engineering & Fabrication",
    description:
      "Fabrication shops and assembly bays where EOT, goliath and gantry cranes, hoists and crane components carry the working load.",
    image: cranesImg,
    relatedCategories: ["cranes-lifting"],
  },
  {
    id: "material-handling",
    name: "Bulk Material Handling",
    description:
      "Plants moving sponge iron, ferrous scrap and bulk material through magnetic and feeding conveyor systems.",
    image: conveyorsImg,
    relatedCategories: ["material-handling"],
  },
  {
    id: "industrial-processing",
    name: "Industrial Processing",
    description:
      "Rolling and grinding operations where rolling mills and ball mills form part of the production line.",
    image: rollingImg,
    relatedCategories: ["processing-machinery"],
  },
];
