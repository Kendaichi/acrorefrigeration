"use client";

import {
  AlertTriangle,
  ThermometerSnowflake,
  Ban,
  TrendingDown,
  Clock,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const problems = [
  {
    icon: AlertTriangle,
    title: "Unexpected Breakdowns",
    desc: "A failed compressor at 2am means thousands in spoiled stock by morning.",
  },
  {
    icon: ThermometerSnowflake,
    title: "Temperature Drift",
    desc: "Gradual temperature creep goes unnoticed until a health inspector flags it.",
  },
  {
    icon: Clock,
    title: "Slow Response Times",
    desc: "Most contractors take 24–48 hours. Your cold chain can't wait that long.",
  },
  {
    icon: TrendingDown,
    title: "Rising Energy Bills",
    desc: "Poorly maintained systems consume up to 40% more power than they should.",
  },
];

const ProblemSection = () => (
  <section className="dark-section section-padding">
    <div className="container-narrow">
      <ScrollReveal className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          What Happens When Your Refrigeration Fails?
        </h2>
        <p className="text-dark-foreground/60 text-lg max-w-2xl mx-auto">
          Every hour of downtime costs Australian businesses hundreds —
          sometimes thousands — in lost revenue and stock.
        </p>
      </ScrollReveal>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {problems.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 100}>
            <div className="bg-dark-foreground/5 rounded-2xl p-6 border border-dark-foreground/10 hover-lift h-full">
              <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-dark-foreground/60 leading-relaxed">
                {p.desc}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
