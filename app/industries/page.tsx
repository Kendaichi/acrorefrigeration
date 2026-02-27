import type { Metadata } from "next";
import Industries from "@/components/pages/Industries";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Specialist commercial refrigeration repairs and maintenance for restaurants, supermarkets, pharmaceuticals, warehousing and food production. HACCP and TGA compliant. Brisbane & SE Queensland.",
  alternates: { canonical: "https://acrorefrigeration.com.au/industries" },
  openGraph: { url: "https://acrorefrigeration.com.au/industries" },
};

export default function IndustriesPage() {
  return <Industries />;
}
