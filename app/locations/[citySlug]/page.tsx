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
  if (!getCityBySlug(citySlug)) notFound();
  return <CityHub />;
}
