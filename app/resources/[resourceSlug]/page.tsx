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
    openGraph: { url: `https://acrorefrigeration.com.au/resources/${resourceSlug}`, type: "article" },
  };
}

export default async function ResourcePageRoute({ params }: Props) {
  const { resourceSlug } = await params;
  const resource = resourcesData[resourceSlug];
  if (!resource) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resource.title,
    description: resource.description,
    url: `https://acrorefrigeration.com.au/resources/${resourceSlug}`,
    author: {
      "@type": "Organization",
      name: "Acro Refrigeration",
      url: "https://acrorefrigeration.com.au",
    },
    publisher: {
      "@type": "Organization",
      name: "Acro Refrigeration",
      url: "https://acrorefrigeration.com.au",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://acrorefrigeration.com.au/resources/${resourceSlug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://acrorefrigeration.com.au" },
      { "@type": "ListItem", position: 2, name: "Resources", item: "https://acrorefrigeration.com.au/resources" },
      { "@type": "ListItem", position: 3, name: resource.title, item: `https://acrorefrigeration.com.au/resources/${resourceSlug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ResourcePage />
    </>
  );
}
