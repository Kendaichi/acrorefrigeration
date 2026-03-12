import type { Metadata } from "next";
import CTABanner from "@/components/home/CTABanner";
import FAQSection from "@/components/home/FAQSection";
import Layout from "@/components/Layout";
import { createClient } from "@/lib/supabase/server";
import { getAllPricingTiers } from "@/lib/supabase/content";
import PricingCards from "./PricingCards";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Commercial Refrigeration Pricing",
  description:
    "Transparent pricing for commercial cold rooms and refrigeration systems. Standard cold rooms from $15,000. Get a custom quote for your project.",
  alternates: { canonical: "https://acrorefrigeration.com.au/pricing" },
  openGraph: { url: "https://acrorefrigeration.com.au/pricing" },
};

export default async function PricingPage() {
  const supabase = await createClient();
  const tiers = await getAllPricingTiers(supabase);

  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <PricingCards tiers={tiers} />
        </div>
      </section>
      <CTABanner />
      <FAQSection />
    </Layout>
  );
}
