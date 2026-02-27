"use client";

import Layout from "@/components/Layout";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle, Wrench } from "lucide-react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import CTABanner from "@/components/home/CTABanner";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.08 },
  }),
};

const servicesData: Record<string, {
  title: string;
  subtitle: string;
  heroDesc: string;
  stats: { value: string; label: string }[];
  overview: string;
  benefits: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  relatedServices: { slug: string; title: string; desc: string }[];
}> = {
  "emergency-refrigeration-repairs": {
    title: "24/7 Emergency Refrigeration Repairs",
    subtitle: "Emergency Repairs",
    heroDesc: "When your refrigeration breaks down at 2am, every minute counts. Our emergency team is on call 24/7 with an average 2-hour response time across South-East Queensland.",
    stats: [
      { value: "2hr", label: "Avg Response" },
      { value: "98%", label: "First-Visit Fix" },
      { value: "24/7", label: "Always On Call" },
      { value: "500+", label: "Emergencies/Year" },
    ],
    overview: "A refrigeration breakdown doesn't wait for business hours — and neither do we. Our emergency repair team carries the most common parts on every van, so we diagnose and fix on the first visit 98% of the time. From compressor failures and refrigerant leaks to electrical faults and defrost issues, we've seen it all and fixed it fast.",
    benefits: [
      "Average 2-hour response time across SEQ",
      "98% first-visit fix rate — no repeat call-outs",
      "Fully stocked vans with common parts",
      "All major brands serviced — Bitzer, Copeland, Danfoss",
      "Post-repair compliance documentation included",
      "Transparent pricing — no hidden call-out fees",
    ],
    process: [
      { step: "1", title: "Call Us", desc: "Call our 24/7 emergency line. A qualified technician answers — not a call centre." },
      { step: "2", title: "Priority Dispatch", desc: "We dispatch the nearest available technician with the right parts for your system." },
      { step: "3", title: "Diagnose & Fix", desc: "On-site diagnosis and repair, typically within a single visit." },
      { step: "4", title: "Certify & Document", desc: "Post-repair testing, compliance checks and digital documentation." },
    ],
    faqs: [
      { q: "How quickly can you get to me?", a: "Our average response time is 2 hours across South-East Queensland, including Brisbane, Gold Coast and Sunshine Coast." },
      { q: "Do you charge extra for after-hours call-outs?", a: "We have transparent after-hours rates with no hidden fees. You'll know the cost before we start work." },
      { q: "What brands do you repair?", a: "We service all major commercial refrigeration brands including Bitzer, Copeland, Danfoss, Daikin, Carrier and more." },
    ],
    relatedServices: [
      { slug: "commercial-refrigeration-maintenance", title: "Preventative Maintenance", desc: "Scheduled servicing that prevents emergencies before they happen." },
      { slug: "cold-room-construction", title: "Cold Room Construction", desc: "Custom cold rooms designed, fabricated and installed to spec." },
    ],
  },
  "commercial-refrigeration-maintenance": {
    title: "Preventative Maintenance Plans",
    subtitle: "Preventative Maintenance",
    heroDesc: "Scheduled maintenance that catches problems before they become costly breakdowns. Extend system life, cut energy costs and stay HACCP-compliant year-round.",
    stats: [
      { value: "60%", label: "Fewer Breakdowns" },
      { value: "30%", label: "Energy Savings" },
      { value: "2x", label: "System Lifespan" },
      { value: "100%", label: "HACCP Compliant" },
    ],
    overview: "Reactive repairs cost 3x more than prevention. Our maintenance plans include quarterly inspections, refrigerant checks, condenser cleaning, electrical testing and compliance documentation — everything you need to keep systems running efficiently and avoid surprise breakdowns.",
    benefits: [
      "Quarterly scheduled inspections by qualified technicians",
      "Refrigerant pressure and leak testing",
      "Condenser and evaporator cleaning",
      "Electrical connection and safety testing",
      "HACCP compliance documentation and temperature logs",
      "Priority emergency response for plan members",
    ],
    process: [
      { step: "1", title: "System Audit", desc: "We assess your current systems, age, condition and compliance status." },
      { step: "2", title: "Custom Plan", desc: "A maintenance schedule tailored to your equipment and industry requirements." },
      { step: "3", title: "Scheduled Visits", desc: "Regular inspections with full reporting and compliance documentation." },
      { step: "4", title: "Ongoing Monitoring", desc: "Track system health over time with trend reporting and proactive alerts." },
    ],
    faqs: [
      { q: "How often do you service?", a: "Most plans include quarterly visits, but we tailor frequency to your system age, usage and compliance needs." },
      { q: "Do maintenance plan members get priority for emergencies?", a: "Yes — maintenance plan members receive priority dispatch with guaranteed faster response times." },
      { q: "Will this actually save me money?", a: "On average, our clients see 60% fewer breakdowns and 30% lower energy costs within the first year." },
    ],
    relatedServices: [
      { slug: "emergency-refrigeration-repairs", title: "24/7 Emergency Repairs", desc: "Round-the-clock breakdown service when you need it most." },
      { slug: "cold-room-construction", title: "Cold Room Construction", desc: "Custom cold rooms designed, fabricated and installed to spec." },
    ],
  },
  "cold-room-construction": {
    title: "Custom Cold Room Construction",
    subtitle: "Cold Room Construction",
    heroDesc: "When you need new cold storage capacity, our in-house team designs, fabricates and installs custom HACCP-compliant cold rooms built to last.",
    stats: [
      { value: "200+", label: "Cold Rooms Built" },
      { value: "15yr", label: "Avg Panel Life" },
      { value: "100%", label: "HACCP Compliant" },
      { value: "4wk", label: "Avg Build Time" },
    ],
    overview: "From single-door coolrooms to multi-zone freezer facilities, we handle every stage — site survey, engineering design, panel fabrication, refrigeration fit-out and commissioning. All builds use high-density polyurethane insulation and food-grade stainless steel finishes.",
    benefits: [
      "Full design-to-commissioning service",
      "High-density polyurethane insulated panels",
      "Food-grade stainless steel finishes",
      "Energy-efficient refrigeration systems",
      "HACCP and council compliance included",
      "Ongoing maintenance packages available",
    ],
    process: [
      { step: "1", title: "Site Survey", desc: "On-site assessment of space, access, power and compliance requirements." },
      { step: "2", title: "Design & Quote", desc: "Engineered drawings, equipment specification and detailed fixed-price quote." },
      { step: "3", title: "Build & Install", desc: "Panel fabrication, refrigeration fit-out and electrical connection." },
      { step: "4", title: "Commission & Certify", desc: "System testing, temperature validation and compliance certification." },
    ],
    faqs: [
      { q: "How long does a cold room build take?", a: "Most standard builds take 3-4 weeks from approval. Complex multi-zone facilities may take 6-8 weeks." },
      { q: "Do you handle council approvals?", a: "Yes — we manage all compliance documentation and can assist with council submissions." },
      { q: "Can you retrofit into an existing space?", a: "Absolutely. We specialise in retrofitting cold rooms into existing commercial kitchens and warehouses." },
    ],
    relatedServices: [
      { slug: "emergency-refrigeration-repairs", title: "24/7 Emergency Repairs", desc: "Round-the-clock breakdown service when you need it most." },
      { slug: "commercial-refrigeration-maintenance", title: "Preventative Maintenance", desc: "Scheduled servicing that prevents emergencies before they happen." },
    ],
  },
  "haccp-compliance-certification": {
    title: "Compliance & Certification Services",
    subtitle: "Compliance & Certification",
    heroDesc: "Stay audit-ready year-round. We provide post-repair compliance checks, HACCP documentation, temperature logging and certification for food safety, pharmaceutical and council requirements.",
    stats: [
      { value: "100%", label: "Audit Pass Rate" },
      { value: "2yr", label: "Records Retained" },
      { value: "24/7", label: "Monitoring Available" },
      { value: "15yr", label: "Compliance Experience" },
    ],
    overview: "A failed food safety audit can cost your business thousands in fines, forced closures and reputational damage. Our compliance service ensures every repair, maintenance visit and system modification is fully documented to the standard required by EHOs, TGA auditors and HACCP inspectors. We provide digital documentation for every job, retained and accessible on demand.",
    benefits: [
      "Post-repair compliance certificates for every job",
      "HACCP-ready temperature logs and maintenance records",
      "TGA cold chain documentation for pharmaceutical storage",
      "Council compliance assistance for new cold room builds",
      "Digital records retained for 2+ years",
      "On-demand report export for audits and inspections",
    ],
    process: [
      { step: "1", title: "System Assessment", desc: "We review your current documentation, equipment and compliance gaps." },
      { step: "2", title: "Repair & Certify", desc: "All work is performed by ARCtick-licensed technicians and documented to compliance standard." },
      { step: "3", title: "Documentation", desc: "Digital compliance report issued — temperature validation, parts replaced, technician sign-off." },
      { step: "4", title: "Ongoing Records", desc: "All records stored in your compliance portal, accessible anytime for audits." },
    ],
    faqs: [
      { q: "What does a compliance certificate include?", a: "Our compliance certificates document the work performed, refrigerant handled, post-repair temperature validation, and technician ARCtick licence number — everything an EHO needs." },
      { q: "Do you provide HACCP documentation?", a: "Yes. Every maintenance visit includes a service report suitable for inclusion in your HACCP records. We can also assist with setting up your HACCP temperature monitoring plan." },
      { q: "Can you help with TGA cold chain requirements?", a: "Yes — we are experienced with TGA cold chain guidelines for pharmaceutical cold rooms, including validation protocols and redundant monitoring requirements." },
    ],
    relatedServices: [
      { slug: "commercial-refrigeration-maintenance", title: "Preventative Maintenance", desc: "Scheduled servicing that keeps your compliance records current." },
      { slug: "refrigeration-temperature-monitoring", title: "Smart Monitoring", desc: "Automated temperature logging for continuous HACCP compliance." },
    ],
  },
  "refrigeration-temperature-monitoring": {
    title: "Smart Temperature Monitoring Systems",
    subtitle: "Smart Monitoring",
    heroDesc: "IoT-enabled temperature monitoring with real-time cloud dashboards, automated alerts and continuous HACCP logging. Know about problems before your stock is at risk.",
    stats: [
      { value: "24/7", label: "Continuous Monitoring" },
      { value: "<5min", label: "Alert Response Time" },
      { value: "2yr+", label: "Data Retention" },
      { value: "30%", label: "Fewer Emergencies" },
    ],
    overview: "Smart monitoring transforms refrigeration management from reactive to proactive. Wireless sensors inside every cold room and display case transmit temperature data to a cloud dashboard every few minutes. If temperature rises above your threshold, an SMS and email alert is sent immediately — giving you time to act before stock is lost or a HACCP excursion occurs.",
    benefits: [
      "Wireless sensors — no cabling, fast installation",
      "Real-time cloud dashboard accessible from any device",
      "Customisable SMS and email alerts by threshold",
      "Automated HACCP-ready temperature logs with timestamps",
      "Historical data and trend analysis",
      "Multi-site management from a single dashboard",
    ],
    process: [
      { step: "1", title: "Site Assessment", desc: "We identify monitoring points — cold rooms, display cases, freezers — and specify the right sensors." },
      { step: "2", title: "Installation", desc: "Wireless sensors installed and calibrated. Platform configured with your alert thresholds." },
      { step: "3", title: "Dashboard Setup", desc: "Your team is onboarded to the cloud platform with alert contacts configured." },
      { step: "4", title: "Ongoing Monitoring", desc: "Continuous data collection, alert management and periodic calibration checks." },
    ],
    faqs: [
      { q: "How quickly are alerts sent?", a: "Alerts are typically sent within 2–5 minutes of a temperature excursion being detected, depending on the sensor polling interval configured for your system." },
      { q: "Can I monitor multiple sites from one dashboard?", a: "Yes. Our platform supports unlimited sites and monitoring points from a single login — ideal for multi-store retailers and hospitality groups." },
      { q: "Does this replace manual temperature checks?", a: "For HACCP purposes, automated monitoring with timestamped logs is actually more defensible than manual checks. Most clients discontinue manual logging once monitoring is installed." },
    ],
    relatedServices: [
      { slug: "haccp-compliance-certification", title: "Compliance & Certification", desc: "Complete HACCP documentation and audit-ready records." },
      { slug: "commercial-refrigeration-maintenance", title: "Preventative Maintenance", desc: "Scheduled servicing paired with monitoring for maximum uptime." },
    ],
  },
  "refrigeration-energy-audits": {
    title: "Energy Audits & Efficiency Upgrades",
    subtitle: "Energy Audits & Upgrades",
    heroDesc: "Comprehensive refrigeration energy assessments that identify savings of 20–30% on typical commercial systems — with a clear upgrade roadmap and payback analysis.",
    stats: [
      { value: "30%", label: "Avg Energy Savings" },
      { value: "2yr", label: "Typical Payback" },
      { value: "500+", label: "Audits Completed" },
      { value: "15yr", label: "Energy Experience" },
    ],
    overview: "For most food businesses, refrigeration accounts for 30–60% of total electricity costs. Our energy audits systematically identify every source of inefficiency — from dirty condensers and worn door seals to oversized systems and poor defrost scheduling — and provide a prioritised action plan with projected savings and payback periods for every recommendation.",
    benefits: [
      "Full system audit with efficiency benchmarking",
      "Prioritised recommendations with savings estimates",
      "Payback analysis for each upgrade",
      "Condenser cleaning and tune-up included",
      "VSD compressor upgrade assessment",
      "Post-upgrade measurement and verification",
    ],
    process: [
      { step: "1", title: "Baseline Audit", desc: "We measure current energy consumption and identify all inefficiency sources across your refrigeration assets." },
      { step: "2", title: "Recommendations", desc: "Prioritised upgrade plan with projected savings, costs and payback periods for each measure." },
      { step: "3", title: "Implement Upgrades", desc: "Our team carries out approved upgrades — from quick wins like coil cleaning to compressor upgrades." },
      { step: "4", title: "Verify Savings", desc: "Post-upgrade monitoring confirms actual savings delivered against projections." },
    ],
    faqs: [
      { q: "How much can I realistically save?", a: "Most commercial refrigeration systems have 20–35% efficiency headroom. Our audits consistently find savings within this range, with many quick-win items paying back within 6–12 months." },
      { q: "Do I need to replace my whole system?", a: "Rarely. The majority of savings come from maintenance, settings optimisation and targeted component upgrades — not full system replacement." },
      { q: "How long does an audit take?", a: "A typical commercial site audit takes 2–4 hours on-site, with a written report and recommendations delivered within 5 business days." },
    ],
    relatedServices: [
      { slug: "commercial-refrigeration-maintenance", title: "Preventative Maintenance", desc: "Ongoing maintenance that keeps efficiency gains locked in." },
      { slug: "refrigeration-temperature-monitoring", title: "Smart Monitoring", desc: "Continuous monitoring to detect efficiency drift before it costs you." },
    ],
  },
};

const ServicePage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = servicesData[serviceSlug || ""];

  if (!service) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="text-4xl font-extrabold mb-4">Service Not Found</h1>
          <Button asChild><Link href="/services">View All Services</Link></Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      

      {/* Breadcrumb */}
      <section className="bg-secondary px-6 py-4">
        <div className="container-narrow">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/services">Services</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>{service.subtitle}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div className="max-w-3xl" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
              <Wrench className="w-3.5 h-3.5" /> {service.subtitle}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">{service.title}</h1>
            <p className="text-lg text-muted-foreground mb-8">{service.heroDesc}</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg"><Link href="/contact">Get a Quote <ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
              <Button asChild size="lg" variant="destructive" className="gradient-cta border-0">
                <a href="tel:1300227600"><Phone className="w-4 h-4 mr-2" /> 1300 227 600</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary py-8 px-6">
        <div className="container-narrow grid grid-cols-2 md:grid-cols-4 gap-6">
          {service.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-primary">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Overview & Benefits */}
      <section className="section-padding bg-background">
        <div className="container-narrow grid lg:grid-cols-2 gap-12 items-start">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-extrabold mb-4">What's Included</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{service.overview}</p>
            <Button asChild variant="outline"><Link href="/contact">Discuss Your Needs <ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} transition={{ delay: 0.1 }}>
            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="font-bold text-lg mb-5">Key Benefits</h3>
              <ul className="space-y-3">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <motion.div className="text-center mb-16" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">How It Works</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((p, i) => (
              <motion.div
                key={p.step}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-card rounded-2xl p-6 border border-border h-full"
              >
                <div className="w-10 h-10 rounded-full gradient-cta text-primary-foreground flex items-center justify-center font-extrabold text-sm mb-4">{p.step}</div>
                <h3 className="font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-narrow max-w-3xl">
          <motion.div className="mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-extrabold mb-4">Frequently Asked Questions</h2>
          </motion.div>
          <div className="space-y-6">
            {service.faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="bg-card rounded-2xl border border-border p-6"
              >
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <motion.div className="mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-extrabold mb-4">Related Services</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {service.relatedServices.map((rs, i) => (
              <motion.div
                key={rs.slug}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Link href={`/services/${rs.slug}`} className="block bg-card rounded-2xl p-8 border border-border shadow-sm group hover:border-primary/20 h-full">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{rs.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{rs.desc}</p>
                  <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default ServicePage;
