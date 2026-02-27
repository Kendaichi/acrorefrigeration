export interface ServiceFaq {
  q: string;
  a: string;
}

export const servicesData: Record<string, { title: string; description: string; faqs: ServiceFaq[] }> = {
  "emergency-refrigeration-repairs": {
    title: "24/7 Emergency Refrigeration Repairs",
    description:
      "When your refrigeration breaks down at 2am, every minute counts. Our emergency team is on call 24/7 with an average 2-hour response time across South-East Queensland.",
    faqs: [
      { q: "How quickly can you get to me?", a: "Our average response time is 2 hours across South-East Queensland, including Brisbane, Gold Coast and Sunshine Coast." },
      { q: "Do you charge extra for after-hours call-outs?", a: "We have transparent after-hours rates with no hidden fees. You'll know the cost before we start work." },
      { q: "What brands do you repair?", a: "We service all major commercial refrigeration brands including Bitzer, Copeland, Danfoss, Daikin, Carrier and more." },
    ],
  },
  "commercial-refrigeration-maintenance": {
    title: "Preventative Maintenance Plans",
    description:
      "Scheduled maintenance that catches problems before they become costly breakdowns. Extend system life, cut energy costs and stay HACCP-compliant year-round.",
    faqs: [
      { q: "How often do you service?", a: "Most plans include quarterly visits, but we tailor frequency to your system age, usage and compliance needs." },
      { q: "Do maintenance plan members get priority for emergencies?", a: "Yes — maintenance plan members receive priority dispatch with guaranteed faster response times." },
      { q: "Will this actually save me money?", a: "On average, our clients see 60% fewer breakdowns and 30% lower energy costs within the first year." },
    ],
  },
  "cold-room-construction": {
    title: "Custom Cold Room Construction",
    description:
      "When you need new cold storage capacity, our in-house team designs, fabricates and installs custom HACCP-compliant cold rooms built to last.",
    faqs: [
      { q: "How long does a cold room build take?", a: "Most standard builds take 3-4 weeks from approval. Complex multi-zone facilities may take 6-8 weeks." },
      { q: "Do you handle council approvals?", a: "Yes — we manage all compliance documentation and can assist with council submissions." },
      { q: "Can you retrofit into an existing space?", a: "Absolutely. We specialise in retrofitting cold rooms into existing commercial kitchens and warehouses." },
    ],
  },
  "haccp-compliance-certification": {
    title: "Compliance & Certification Services",
    description:
      "Stay audit-ready year-round. We provide post-repair compliance checks, HACCP documentation, temperature logging and certification for food safety, pharmaceutical and council requirements.",
    faqs: [
      { q: "What does a compliance certificate include?", a: "Our compliance certificates document the work performed, refrigerant handled, post-repair temperature validation, and technician ARCtick licence number — everything an EHO needs." },
      { q: "Do you provide HACCP documentation?", a: "Yes. Every maintenance visit includes a service report suitable for inclusion in your HACCP records. We can also assist with setting up your HACCP temperature monitoring plan." },
      { q: "Can you help with TGA cold chain requirements?", a: "Yes — we are experienced with TGA cold chain guidelines for pharmaceutical cold rooms, including validation protocols and redundant monitoring requirements." },
    ],
  },
  "refrigeration-temperature-monitoring": {
    title: "Smart Temperature Monitoring Systems",
    description:
      "IoT-enabled temperature monitoring with real-time cloud dashboards, automated alerts and continuous HACCP logging. Know about problems before your stock is at risk.",
    faqs: [
      { q: "How quickly are alerts sent?", a: "Alerts are typically sent within 2–5 minutes of a temperature excursion being detected, depending on the sensor polling interval configured for your system." },
      { q: "Can I monitor multiple sites from one dashboard?", a: "Yes. Our platform supports unlimited sites and monitoring points from a single login — ideal for multi-store retailers and hospitality groups." },
      { q: "Does this replace manual temperature checks?", a: "For HACCP purposes, automated monitoring with timestamped logs is actually more defensible than manual checks. Most clients discontinue manual logging once monitoring is installed." },
    ],
  },
};
