import type { Metadata } from "next";
import ResourcePage from "@/components/pages/ResourcePage";
import { notFound } from "next/navigation";
import { resourcesData } from "@/lib/seo/resources";

type Props = { params: Promise<{ resourceSlug: string }> };

export function generateStaticParams() {
  return Object.keys(resourcesData).map((slug) => ({ resourceSlug: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { resourceSlug } = await params;
  const resource = resourcesData[resourceSlug];
  if (!resource) return {};
  return {
    title: resource.title,
    description: resource.description,
    alternates: { canonical: `https://acrorefrigeration.com.au/resources/${resourceSlug}` },
    openGraph: { url: `https://acrorefrigeration.com.au/resources/${resourceSlug}` },
  };
}

export default async function ResourcePageRoute({ params }: Props) {
  const { resourceSlug } = await params;
  if (!resourcesData[resourceSlug]) notFound();
  return <ResourcePage />;
}
