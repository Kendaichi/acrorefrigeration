"use client";

import { ClipboardList, Wrench, Settings } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Emergency Repairs",
    desc: "24/7 call-out service with an average 2-hour response time. We diagnose and fix on the first visit — 98% of the time.",
  },
  {
    icon: Wrench,
    step: "02",
    title: "Preventative Maintenance",
    desc: "Scheduled servicing plans that catch issues before they become costly breakdowns. Extend system life and cut energy costs.",
  },
  {
    icon: Settings,
    step: "03",
    title: "Cold Room Builds",
    desc: "When you need new capacity, our in-house team designs, fabricates and installs HACCP-compliant cold rooms built to last.",
  },
];

const SolutionSection = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow">
      <ScrollReveal className="text-center mb-10 md:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
          How We Work
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          One Team for Every Refrigeration Need
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          From 2am breakdowns to long-term maintenance plans — and new builds
          when you're ready to grow.
        </p>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-5 md:gap-8">
        {steps.map((s, i) => (
          <ScrollReveal key={s.step} delay={i * 150}>
            <div className="bg-card rounded-2xl p-5 md:p-8 border border-border shadow-sm hover-lift h-full group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl gradient-cta flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-4xl font-extrabold text-muted-foreground/20 group-hover:text-primary/20 transition-colors">
                  {s.step}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
