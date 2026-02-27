"use client";

import { Shield, Clock, Headphones, Wrench } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const badges = [
  { icon: Clock, label: "Since 1972", desc: "50+ years of expertise" },
  { icon: Shield, label: "HACCP Compliant", desc: "Certified systems" },
  { icon: Wrench, label: "98% First-Visit Fix", desc: "Get back online fast" },
  { icon: Headphones, label: "24/7 Support", desc: "Emergency response" },
];

const TrustBar = () => (
  <section className="bg-secondary py-8 px-6">
    <div className="container-narrow">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {badges.map((b, i) => (
          <ScrollReveal key={b.label} delay={i * 100}>
            <div className="flex items-center gap-3 hover-scale cursor-default">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <b.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-sm">{b.label}</div>
                <div className="text-xs text-muted-foreground">{b.desc}</div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
