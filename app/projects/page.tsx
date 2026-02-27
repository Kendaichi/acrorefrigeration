import type { Metadata } from "next";
import Projects from "@/components/pages/Projects";

export const metadata: Metadata = {
  title: "Featured Projects",
  description:
    "Browse our portfolio of commercial cold room and refrigeration projects across Brisbane, SE Queensland and Australia — from restaurant coolrooms to large-scale pharmaceutical cold storage.",
  alternates: { canonical: "https://acrorefrigeration.com.au/projects" },
  openGraph: { url: "https://acrorefrigeration.com.au/projects" },
};

export default function ProjectsPage() {
  return <Projects />;
}
