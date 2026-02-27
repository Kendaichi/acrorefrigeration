"use client";

import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Clock, Wrench, ShieldCheck, Thermometer, BarChart3, Snowflake } from "lucide-react";
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

const industriesData: Record<string, {
  title: string;
  subtitle: string;
  heroDesc: string;
  stats: { value: string; label: string }[];
  challenges: { title: string; desc: string }[];
  services: { icon: React.ElementType; title: string; desc: string }[];
  caseStudy: { company: string; challenge: string; solution: string; result: string };
  relatedIndustries: { slug: string; title: string; desc: string }[];
}> = {
  "restaurants-hospitality": {
    title: "Refrigeration Repairs for Restaurants & Hospitality",
    subtitle: "Restaurants & Hospitality",
    heroDesc: "Your kitchen can't afford downtime. We provide 24/7 emergency repairs, scheduled maintenance and compliance servicing for commercial kitchens, hotels and venues across South-East Queensland.",
    stats: [
      { value: "2hr", label: "Avg Response" },
      { value: "500+", label: "Kitchens Serviced" },
      { value: "98%", label: "First-Visit Fix" },
      { value: "24/7", label: "Emergency Service" },
    ],
    challenges: [
      { title: "Peak-Hour Breakdowns", desc: "A fridge failure during Friday dinner service means spoiled stock, lost revenue and unhappy customers." },
      { title: "HACCP Compliance", desc: "Health inspections require documented temperature logs and maintenance records — gaps mean fines." },
      { title: "Multiple Systems", desc: "Walk-ins, under-counter units, display cases and ice machines — all different brands, all needing service." },
    ],
    services: [
      { icon: Clock, title: "24/7 Emergency Repairs", desc: "Priority dispatch for kitchen breakdowns — average 2-hour response, day or night." },
      { icon: Wrench, title: "Preventative Maintenance", desc: "Quarterly servicing plans that keep systems running and HACCP documentation current." },
      { icon: ShieldCheck, title: "Compliance Servicing", desc: "Post-repair certification, temperature logging and audit-ready documentation." },
      { icon: Snowflake, title: "Cold Room Builds", desc: "Custom walk-in coolrooms and freezers designed for your kitchen layout and capacity." },
      { icon: Thermometer, title: "Smart Monitoring", desc: "IoT temperature sensors with alerts — know about problems before stock is at risk." },
      { icon: BarChart3, title: "Energy Audits", desc: "Reduce refrigeration running costs by up to 30% with targeted efficiency upgrades." },
    ],
    caseStudy: {
      company: "La Piazza Restaurant Group",
      challenge: "Frequent breakdowns across 4 venues, averaging 2 emergency call-outs per month with significant stock losses.",
      solution: "Implemented quarterly preventative maintenance across all venues with smart temperature monitoring.",
      result: "Zero unplanned breakdowns in 12 months. Annual refrigeration costs reduced by 40%.",
    },
    relatedIndustries: [
      { slug: "supermarkets-retail", title: "Supermarkets & Retail", desc: "Display cases, multi-temperature zones and energy optimisation." },
      { slug: "food-production", title: "Food Production", desc: "Processing rooms, blast freezers and production-line refrigeration." },
    ],
  },
  "supermarkets-retail": {
    title: "Refrigeration Repairs for Supermarkets & Retail",
    subtitle: "Supermarkets & Retail",
    heroDesc: "Protect your stock and your margins. Rapid-response breakdown service, scheduled maintenance and energy optimisation for display cases, cold rooms and multi-temperature systems.",
    stats: [
      { value: "2hr", label: "Avg Response" },
      { value: "30%", label: "Energy Savings" },
      { value: "200+", label: "Stores Serviced" },
      { value: "99.5%", label: "Uptime Target" },
    ],
    challenges: [
      { title: "Stock Loss Risk", desc: "A single display case failure can mean thousands in spoiled produce, dairy and meat." },
      { title: "Energy Costs", desc: "Refrigeration accounts for 60-70% of a supermarket's electricity bill — inefficiency is expensive." },
      { title: "Customer Experience", desc: "Warm display cases and frosted-over freezers drive customers to competitors." },
    ],
    services: [
      { icon: Clock, title: "Rapid Breakdown Response", desc: "Priority dispatch for display case, cold room and freezer failures." },
      { icon: Wrench, title: "Scheduled Maintenance", desc: "Regular servicing to prevent breakdowns and maintain food safety compliance." },
      { icon: BarChart3, title: "Energy Optimisation", desc: "Audits and upgrades that cut refrigeration energy costs by up to 30%." },
      { icon: Thermometer, title: "Temperature Monitoring", desc: "Cloud-connected sensors with automated alerts for every case and cold room." },
      { icon: Snowflake, title: "New Installations", desc: "Display cases, cold rooms and freezer systems for new stores or refits." },
      { icon: ShieldCheck, title: "Compliance & Reporting", desc: "Automated temperature logging and maintenance records for food safety audits." },
    ],
    caseStudy: {
      company: "FreshMart Supermarkets",
      challenge: "12 stores experiencing frequent display case breakdowns, high energy costs and compliance gaps.",
      solution: "Comprehensive maintenance contracts with energy audits and IoT monitoring across all sites.",
      result: "60% fewer breakdowns, 28% energy cost reduction, full compliance across all stores.",
    },
    relatedIndustries: [
      { slug: "restaurants-hospitality", title: "Restaurants & Hospitality", desc: "Walk-in coolrooms and commercial kitchen servicing." },
      { slug: "food-production", title: "Food Production", desc: "Processing rooms, blast freezers and production-line refrigeration." },
    ],
  },
  "food-production": {
    title: "Refrigeration for Food Production & Manufacturing",
    subtitle: "Food Production",
    heroDesc: "Keep your production line moving. Continuous-operation servicing for processing rooms, blast freezers and production-line refrigeration systems.",
    stats: [
      { value: "<4hr", label: "Response Time" },
      { value: "100+", label: "Factories Serviced" },
      { value: "24/7", label: "On Call" },
      { value: "15yr", label: "Industry Experience" },
    ],
    challenges: [
      { title: "Production Downtime", desc: "Every hour of refrigeration failure shuts down production lines and delays shipments." },
      { title: "Blast Freezer Reliability", desc: "Blast freezers run at extreme loads — they need specialist servicing to maintain performance." },
      { title: "Regulatory Compliance", desc: "Export-grade facilities require strict temperature documentation and audit trails." },
    ],
    services: [
      { icon: Clock, title: "Priority Emergency Service", desc: "Dedicated response teams for production-critical breakdowns." },
      { icon: Wrench, title: "Preventative Programs", desc: "Scheduled maintenance designed around your production cycles." },
      { icon: Snowflake, title: "Blast Freezer Servicing", desc: "Specialist maintenance for high-capacity blast freezing systems." },
      { icon: Thermometer, title: "Process Monitoring", desc: "Continuous temperature monitoring with automated compliance logging." },
      { icon: ShieldCheck, title: "Compliance Documentation", desc: "Full audit trails for food safety, export and regulatory requirements." },
      { icon: BarChart3, title: "Efficiency Upgrades", desc: "System upgrades that reduce energy costs while maintaining performance." },
    ],
    caseStudy: {
      company: "Pacific Seafood Processing",
      challenge: "Ageing blast freezers causing intermittent shutdowns, risking export compliance and delivery schedules.",
      solution: "Comprehensive overhaul of refrigeration systems with preventative maintenance and real-time monitoring.",
      result: "Zero unplanned shutdowns in 18 months. Export compliance maintained with automated documentation.",
    },
    relatedIndustries: [
      { slug: "supermarkets-retail", title: "Supermarkets & Retail", desc: "Display cases, multi-temperature zones and energy optimisation." },
      { slug: "restaurants-hospitality", title: "Restaurants & Hospitality", desc: "Commercial kitchen and venue refrigeration." },
    ],
  },
  "pharmaceuticals-healthcare": {
    title: "Refrigeration for Pharmaceuticals & Healthcare",
    subtitle: "Pharmaceuticals & Healthcare",
    heroDesc: "Precision temperature-controlled storage for vaccines, medicines and biological materials. TGA-compliant cold chain systems with redundant monitoring and full audit trails.",
    stats: [
      { value: "±0.5°C", label: "Temperature Accuracy" },
      { value: "100%", label: "TGA Compliant" },
      { value: "24/7", label: "Monitoring & Alerts" },
      { value: "2hr", label: "Emergency Response" },
    ],
    challenges: [
      { title: "Strict Temperature Tolerances", desc: "Vaccines and biological materials require tight temperature bands — a single excursion can render an entire stock holding non-compliant." },
      { title: "TGA & Cold Chain Requirements", desc: "The TGA cold chain guidelines require validated storage systems, continuous logging and documented corrective action procedures." },
      { title: "Redundancy Requirements", desc: "Pharmaceutical cold storage should include backup power, redundant monitoring and emergency response protocols to protect high-value stock." },
    ],
    services: [
      { icon: Clock, title: "Priority Emergency Response", desc: "Pharmaceutical cold room failures trigger immediate priority dispatch — protecting your stock and compliance status." },
      { icon: Wrench, title: "Validation & Commissioning", desc: "Temperature mapping studies and qualification protocols (IQ/OQ/PQ) for new and modified pharmaceutical cold rooms." },
      { icon: ShieldCheck, title: "TGA Compliance Documentation", desc: "Maintenance records, temperature excursion reports and corrective action documentation for TGA audits." },
      { icon: Thermometer, title: "Redundant Monitoring", desc: "Dual-probe monitoring systems with UPS-backed alerts and cloud logging for continuous cold chain integrity." },
      { icon: BarChart3, title: "Preventative Maintenance", desc: "Scheduled servicing designed around your compliance calendar, with documentation included as standard." },
      { icon: Snowflake, title: "Cold Room Builds", desc: "New pharmaceutical cold rooms designed to TGA specifications with validation protocols from day one." },
    ],
    caseStudy: {
      company: "MedStore Pharmacy Group",
      challenge: "Expanding vaccine storage across 6 locations, each requiring TGA-compliant cold rooms with validated monitoring and audit-ready documentation.",
      solution: "Installed standardised 2–8°C pharmaceutical cold rooms with dual-probe monitoring, UPS backup and cloud-connected logging across all sites.",
      result: "All 6 sites passed TGA cold chain audit on first inspection. Zero vaccine excursions in 18 months of operation.",
    },
    relatedIndustries: [
      { slug: "warehousing-logistics", title: "Warehousing & Logistics", desc: "Large-scale cold storage for pharmaceutical distribution." },
      { slug: "food-production", title: "Food Production", desc: "Compliance-focused refrigeration for regulated manufacturing." },
    ],
  },
  "warehousing-logistics": {
    title: "Refrigeration for Warehousing & Logistics",
    subtitle: "Warehousing & Logistics",
    heroDesc: "Large-scale cold storage solutions for distribution centres and logistics hubs. High-throughput systems engineered for continuous operation, dock integration and scale flexibility.",
    stats: [
      { value: "<4hr", label: "Emergency Response" },
      { value: "50+", label: "DCs Serviced" },
      { value: "24/7", label: "On Call" },
      { value: "15yr", label: "Industry Experience" },
    ],
    challenges: [
      { title: "Continuous Operation Requirements", desc: "Distribution centres operate 24/7 — any refrigeration downtime directly impacts order fulfilment and customer contracts." },
      { title: "High-Throughput Door Cycling", desc: "Constant forklift and dock activity creates extreme door cycling loads that standard cold rooms are not designed to handle." },
      { title: "Multi-Temperature Zones", desc: "Modern DCs require ambient, chilled and frozen zones in the same facility — each with different system requirements and compliance obligations." },
    ],
    services: [
      { icon: Clock, title: "Priority Emergency Response", desc: "Dedicated response teams for distribution centre breakdowns — minimising downtime and protecting your cold chain." },
      { icon: Wrench, title: "Planned Maintenance Programs", desc: "Maintenance schedules designed around your operational windows — nights, weekends or planned shutdowns." },
      { icon: Snowflake, title: "Large-Scale Cold Room Builds", desc: "Multi-zone cold storage facilities designed for pallet racking, dock integration and high door-cycling frequency." },
      { icon: Thermometer, title: "Multi-Zone Monitoring", desc: "Centralised monitoring across all temperature zones with automated compliance logging and alert escalation." },
      { icon: BarChart3, title: "Energy Management", desc: "Energy audits and VSD upgrades that reduce refrigeration costs significantly for large facilities." },
      { icon: ShieldCheck, title: "Compliance & Documentation", desc: "Cold chain documentation, maintenance records and corrective action logs for food safety and regulatory requirements." },
    ],
    caseStudy: {
      company: "ColdChain Logistics QLD",
      challenge: "Ageing refrigeration systems across a 4,000sqm distribution centre causing frequent breakdowns and threatening cold chain compliance for major retail clients.",
      solution: "Complete refrigeration plant overhaul with new VSD compressors, multi-zone monitoring and a quarterly maintenance contract.",
      result: "Zero unplanned breakdowns in 24 months. Energy costs reduced by 32%. Cold chain compliance maintained for all client audits.",
    },
    relatedIndustries: [
      { slug: "food-production", title: "Food Production", desc: "Processing rooms, blast freezers and production-line refrigeration." },
      { slug: "supermarkets-retail", title: "Supermarkets & Retail", desc: "Display cases, multi-temperature zones and energy optimisation." },
    ],
  },
};

const IndustryPage = () => {
  const { industrySlug } = useParams<{ industrySlug: string }>();
  const industry = industriesData[industrySlug || ""];

  if (!industry) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="text-4xl font-extrabold mb-4">Industry Not Found</h1>
          <Button asChild><Link href="/industries">View All Industries</Link></Button>
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
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/industries">Industries</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>{industry.subtitle}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div className="max-w-3xl" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
              {industry.subtitle}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">{industry.title}</h1>
            <p className="text-lg text-muted-foreground mb-8">{industry.heroDesc}</p>
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
          {industry.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-primary">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div className="mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-extrabold mb-4">Your Challenges</h2>
            <p className="text-muted-foreground">We understand the unique pressures facing {industry.subtitle.toLowerCase()} businesses.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {industry.challenges.map((c, i) => (
              <motion.div
                key={c.title}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-card rounded-2xl p-6 border border-border h-full"
              >
                <h3 className="font-bold mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <motion.div className="text-center mb-16" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">How We Help</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.services.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-card rounded-2xl p-6 border border-border h-full"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section-padding bg-background">
        <div className="container-narrow max-w-4xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
                Case Study
              </div>
              <h3 className="text-2xl font-extrabold mb-6">{industry.caseStudy.company}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Challenge</h4>
                  <p className="text-sm leading-relaxed">{industry.caseStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Solution</h4>
                  <p className="text-sm leading-relaxed">{industry.caseStudy.solution}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Result</h4>
                  <p className="text-sm leading-relaxed font-medium">{industry.caseStudy.result}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Industries */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <motion.div className="mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-extrabold">Other Industries We Serve</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {industry.relatedIndustries.map((ri, i) => (
              <motion.div
                key={ri.slug}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Link href={`/industries/${ri.slug}`} className="block bg-card rounded-2xl p-8 border border-border shadow-sm group hover:border-primary/20 h-full">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{ri.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{ri.desc}</p>
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

export default IndustryPage;
