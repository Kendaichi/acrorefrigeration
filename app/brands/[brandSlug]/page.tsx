import type { Metadata } from "next";
import BrandPage from "@/components/pages/BrandPage";
import { notFound } from "next/navigation";
import { brandsData } from "@/lib/seo/brands";

type Props = { params: Promise<{ brandSlug: string }> };

export function generateStaticParams() {
  return Object.keys(brandsData).map((slug) => ({ brandSlug: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { brandSlug } = await params;
  const brand = brandsData[brandSlug];
  if (!brand) return {};
  return {
    title: `${brand.name} Compressor Repairs & Servicing`,
    description: brand.description,
    alternates: { canonical: `https://acrorefrigeration.com.au/brands/${brandSlug}` },
    openGraph: { url: `https://acrorefrigeration.com.au/brands/${brandSlug}` },
  };
}

export default async function BrandPageRoute({ params }: Props) {
  const { brandSlug } = await params;
  if (!brandsData[brandSlug]) notFound();
  return <BrandPage />;
}
