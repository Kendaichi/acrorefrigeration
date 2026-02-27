"use client";

import { ShieldCheck, Zap, Wifi, Bell, Wrench, Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const capabilities = [
  {
    icon: Clock,
    title: "24/7 Emergency Call-Outs",
    desc: "Round-the-clock availability for breakdowns — average 2-hour response across Brisbane, Gold Coast and SE Queensland.",
  },
  {
    icon: Wrench,
    title: "All Brands & Systems",
    desc: "We service and repair all major commercial refrigeration brands, compressors, and control systems.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Certification",
    desc: "Post-repair compliance checks and documentation for HACCP and food safety audits.",
  },
  {
    icon: Zap,
    title: "Energy Optimisation",
    desc: "Tune-ups and upgrades that reduce energy consumption by up to 30% on ageing systems.",
  },
  {
    icon: Wifi,
    title: "Smart Monitoring",
    desc: "Remote temperature and performance monitoring to catch issues before they cause downtime.",
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    desc: "SMS and email alerts when temperatures deviate — so you know before your stock is at risk.",
  },
];

const CapabilitiesGrid = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow">
      <ScrollReveal className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Why Businesses Trust Acro
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Reliable service, fast response, and proactive monitoring that keeps
          your cold chain running.
        </p>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((c, i) => (
          <ScrollReveal key={c.title} delay={i * 80}>
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover-lift h-full group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <c.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {c.desc}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default CapabilitiesGrid;
