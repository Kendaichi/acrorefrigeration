import type { Metadata } from "next";
import IndustryPage from "@/components/pages/IndustryPage";
import { notFound } from "next/navigation";
import { industriesData } from "@/lib/seo/industries";

type Props = { params: Promise<{ industrySlug: string }> };

export function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({ industrySlug: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industrySlug } = await params;
  const industry = industriesData[industrySlug];
  if (!industry) return {};
  return {
    title: industry.title,
    description: industry.description,
    alternates: { canonical: `https://acrorefrigeration.com.au/industries/${industrySlug}` },
    openGraph: { url: `https://acrorefrigeration.com.au/industries/${industrySlug}` },
  };
}

export default async function IndustryPageRoute({ params }: Props) {
  const { industrySlug } = await params;
  if (!industriesData[industrySlug]) notFound();
  return <IndustryPage />;
}
