import type { Metadata } from "next";
import LocationsHub from "@/components/pages/LocationsHub";

export const metadata: Metadata = {
  title: "Commercial Refrigeration Repairs Near You — Service Areas",
  description:
    "24/7 emergency repairs, preventative maintenance and cold room builds across South-East Queensland. Find your local refrigeration team in Brisbane, Gold Coast and Sunshine Coast.",
  alternates: { canonical: "https://acrorefrigeration.com.au/locations" },
  openGraph: { url: "https://acrorefrigeration.com.au/locations" },
};

export default function LocationsPage() {
  return <LocationsHub />;
}
