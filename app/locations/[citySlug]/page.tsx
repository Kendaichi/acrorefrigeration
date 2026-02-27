import type { Metadata } from "next";
import CityHub from "@/components/pages/CityHub";
import { notFound } from "next/navigation";
import { getCityBySlug, cities } from "@/lib/seo/locations";

type Props = { params: Promise<{ citySlug: string }> };

export function generateStaticParams() {
  return cities.map((city) => ({ citySlug: city.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return {};
  return {
    title: `Commercial Refrigeration Repairs ${city.name}`,
    description: city.regionDescription,
    alternates: { canonical: `https://acrorefrigeration.com.au/locations/${citySlug}` },
    openGraph: { url: `https://acrorefrigeration.com.au/locations/${citySlug}` },
  };
}

export default async function CityPageRoute({ params }: Props) {
  const { citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) notFound();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Acro Refrigeration",
    description: city.regionDescription,
    url: "https://acrorefrigeration.com.au",
    telephone: "+611300227600",
    email: "service@acrorefrigeration.com.au",
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "QLD",
      addressCountry: "AU",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
    priceRange: "$$",
    sameAs: ["https://acrorefrigeration.com.au"],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://acrorefrigeration.com.au" },
      { "@type": "ListItem", position: 2, name: "Locations", item: "https://acrorefrigeration.com.au/locations" },
      { "@type": "ListItem", position: 3, name: city.name, item: `https://acrorefrigeration.com.au/locations/${citySlug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CityHub />
    </>
  );
}
