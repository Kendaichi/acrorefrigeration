import type { Metadata } from "next";
import Contact from "@/components/pages/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Request a quote for emergency repairs, maintenance plans or a new cold room build. Fast response, HACCP-certified. Acro Refrigeration — Brisbane & SE Queensland.",
  alternates: { canonical: "https://acrorefrigeration.com.au/contact" },
  openGraph: { url: "https://acrorefrigeration.com.au/contact" },
};

export default function ContactPage() {
  return <Contact />;
}
