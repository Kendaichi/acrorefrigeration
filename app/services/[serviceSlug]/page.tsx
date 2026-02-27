import type { Metadata } from "next";
import ServicePage from "@/components/pages/ServicePage";
import { notFound } from "next/navigation";
import { servicesData } from "@/lib/seo/services";

type Props = { params: Promise<{ serviceSlug: string }> };

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ serviceSlug: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = servicesData[serviceSlug];
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `https://acrorefrigeration.com.au/services/${serviceSlug}` },
    openGraph: { url: `https://acrorefrigeration.com.au/services/${serviceSlug}` },
  };
}

export default async function ServicePageRoute({ params }: Props) {
  const { serviceSlug } = await params;
  if (!servicesData[serviceSlug]) notFound();
  return <ServicePage />;
}
