import type { Metadata } from "next";
import Services from "@/components/pages/Services";

export const metadata: Metadata = {
  title: "Commercial Refrigeration Services",
  description:
    "End-to-end commercial refrigeration services including cold room construction, system installation, HACCP compliance, smart monitoring and 24/7 emergency repairs across Brisbane & SE Queensland.",
  alternates: { canonical: "https://acrorefrigeration.com.au/services" },
  openGraph: { url: "https://acrorefrigeration.com.au/services" },
};

export default function ServicesPage() {
  return <Services />;
}
