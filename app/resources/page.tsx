import type { Metadata } from "next";
import Resources from "@/components/pages/Resources";

export const metadata: Metadata = {
  title: "Guides, Articles & Resources",
  description:
    "Expert guides and articles on commercial refrigeration, HACCP compliance, energy efficiency and cold room maintenance. Free resources from Acro Refrigeration.",
  alternates: { canonical: "https://acrorefrigeration.com.au/resources" },
  openGraph: { url: "https://acrorefrigeration.com.au/resources" },
};

export default function ResourcesPage() {
  return <Resources />;
}
