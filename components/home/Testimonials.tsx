"use client";

import { Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "Mark Thompson",
    role: "Operations Manager, FreshMart",
    quote:
      "Acro delivered our 200sqm cold storage facility two weeks ahead of schedule. The smart monitoring system has already prevented two potential temperature events.",
  },
  {
    name: "Sarah Chen",
    role: "Head Chef, Harbour Kitchen",
    quote:
      "Finally a contractor who understands compliance. Our new walk-in coolroom passed HACCP inspection on the first visit. The team was professional from day one.",
  },
  {
    name: "David Russo",
    role: "Warehouse Director, PharmaLogix",
    quote:
      "We needed pharmaceutical-grade cold storage with zero tolerance for temperature deviation. Acro engineered a system that's been flawless for 18 months.",
  },
];

const Testimonials = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow">
      <ScrollReveal className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          See what our clients say about working with Acro Refrigeration.
        </p>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 120}>
            <div className="bg-card rounded-2xl p-5 md:p-8 border border-border shadow-sm hover-lift h-full">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-6 text-muted-foreground">
                "{t.quote}"
              </p>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
