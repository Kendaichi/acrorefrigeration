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
  const service = servicesData[serviceSlug];
  if (!service) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://acrorefrigeration.com.au" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://acrorefrigeration.com.au/services" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://acrorefrigeration.com.au/services/${serviceSlug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicePage />
    </>
  );
}
