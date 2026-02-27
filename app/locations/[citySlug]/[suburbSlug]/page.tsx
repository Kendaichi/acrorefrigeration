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
  if (!getSuburbBySlug(citySlug, suburbSlug)) notFound();
  return <SuburbPage />;
}
