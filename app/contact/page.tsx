import type { Metadata } from "next";
import Contact from "@/components/pages/Contact";
import { createClient } from "@/lib/supabase/server";
import { getSiteSettings } from "@/lib/supabase/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Request a quote for emergency repairs, maintenance plans or a new cold room build. Fast response, HACCP-certified. Acro Refrigeration — Brisbane & SE Queensland.",
  alternates: { canonical: "https://acrorefrigeration.com.au/contact" },
  openGraph: { url: "https://acrorefrigeration.com.au/contact" },
};

export default async function ContactPage() {
  const supabase = await createClient();
  const settings = await getSiteSettings(supabase);
  return <Contact settings={settings} />;
}
