import type { Metadata } from "next";
import Process from "@/components/pages/Process";

export const metadata: Metadata = {
  title: "Our Project Process",
  description:
    "From consultation to certification — see how Acro Refrigeration delivers your commercial cold room project on time, on spec and on budget. 6-step process.",
  alternates: { canonical: "https://acrorefrigeration.com.au/process" },
  openGraph: { url: "https://acrorefrigeration.com.au/process" },
};

export default function ProcessPage() {
  return <Process />;
}
