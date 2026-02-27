import type { Metadata } from "next";
import SuburbPage from "@/components/pages/SuburbPage";
import { notFound } from "next/navigation";
import { getSuburbBySlug, cities } from "@/lib/seo/locations";

type Props = { params: Promise<{ citySlug: string; suburbSlug: string }> };

export function generateStaticParams() {
  return cities.flatMap((city) =>
    city.suburbs.map((suburb) => ({
      citySlug: city.slug,
      suburbSlug: suburb.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { citySlug, suburbSlug } = await params;
  const result = getSuburbBySlug(citySlug, suburbSlug);
  if (!result) return {};
  const { suburb } = result;
  return {
    title: `Commercial Refrigeration Repairs ${suburb.name}`,
    description: `24/7 emergency repairs, preventative maintenance and cold room builds in ${suburb.name} and surrounding areas. Fast response, HACCP-certified.`,
    alternates: { canonical: `https://acrorefrigeration.com.au/locations/${citySlug}/${suburbSlug}` },
    openGraph: { url: `https://acrorefrigeration.com.au/locations/${citySlug}/${suburbSlug}` },
  };
}

export default async function SuburbPageRoute({ params }: Props) {
  const { citySlug, suburbSlug } = await params;
  const result = getSuburbBySlug(citySlug, suburbSlug);
  if (!result) notFound();
  const { city, suburb } = result;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Acro Refrigeration",
    description: `24/7 emergency refrigeration repairs and maintenance in ${suburb.name}, ${city.name}.`,
    url: "https://acrorefrigeration.com.au",
    telephone: "+611300227600",
    email: "service@acrorefrigeration.com.au",
    areaServed: [
      { "@type": "City", name: city.name },
      { "@type": "Place", name: suburb.name },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: suburb.name,
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
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://acrorefrigeration.com.au" },
      { "@type": "ListItem", position: 2, name: "Locations", item: "https://acrorefrigeration.com.au/locations" },
      { "@type": "ListItem", position: 3, name: city.name, item: `https://acrorefrigeration.com.au/locations/${citySlug}` },
      { "@type": "ListItem", position: 4, name: suburb.name, item: `https://acrorefrigeration.com.au/locations/${citySlug}/${suburbSlug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SuburbPage />
    </>
  );
}
