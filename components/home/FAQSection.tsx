"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  {
    q: "How quickly can you respond to an emergency breakdown?",
    a: "We offer 24/7 emergency call-outs with an average response time of 2 hours across Brisbane, Gold Coast and SE Queensland. For critical systems, we prioritise same-hour dispatch.",
  },
  {
    q: "Do you service all refrigeration brands?",
    a: "Yes. Our technicians are trained and equipped to service, repair, and maintain all major commercial refrigeration brands including Bitzer, Copeland, Danfoss, Daikin, and more.",
  },
  {
    q: "What does a preventative maintenance plan include?",
    a: "Our plans include scheduled servicing visits, filter and component checks, refrigerant level monitoring, energy efficiency audits, 24/7 remote monitoring, and priority emergency response.",
  },
  {
    q: "Can you help us pass a HACCP or food safety audit?",
    a: "Yes. While most of our work is repairs and maintenance, we also design, fabricate, and install custom HACCP-compliant cold rooms. Contact us for a site inspection and quote.",
  },
  {
    q: "Do you also build new cold rooms?",
    a: "Yes. Our modular systems are designed for easy expansion. We can also retrofit existing cold rooms with upgraded insulation, compressors, and smart monitoring.",
  },
  {
    q: "What areas do you service?",
    a: "We service Brisbane, Gold Coast, Sunshine Coast and SE Queensland. For large-scale or national clients, we can mobilise teams across Australia.",
  },
];

const FAQSection = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow max-w-3xl">
      <ScrollReveal className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground text-lg">
          Common questions about our refrigeration services.
        </p>
      </ScrollReveal>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <ScrollReveal key={i} delay={i * 60}>
            <AccordionItem
              value={`faq-${i}`}
              className="bg-card rounded-xl border border-border px-4 sm:px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-sm py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          </ScrollReveal>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
