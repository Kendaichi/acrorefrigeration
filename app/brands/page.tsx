import type { Metadata } from "next";
import Brands from "@/components/pages/Brands";

export const metadata: Metadata = {
  title: "Commercial Refrigeration Brands We Service",
  description:
    "Specialist repairs and servicing for all major commercial refrigeration brands — Bitzer, Copeland, Danfoss, Daikin, Carrier and more. Expert technicians across Brisbane & SE Queensland.",
  alternates: { canonical: "https://acrorefrigeration.com.au/brands" },
  openGraph: { url: "https://acrorefrigeration.com.au/brands" },
};

export default function BrandsPage() {
  return <Brands />;
}
