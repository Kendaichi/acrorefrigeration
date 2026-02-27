"use client";

import Layout from "@/components/Layout";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Snowflake,
  Wrench,
  ShieldCheck,
  Thermometer,
  Clock,
  BarChart3,
  Phone,
  Search,
  Monitor,
  FileText,
  CheckCircle,
} from "lucide-react";
import CTABanner from "@/components/home/CTABanner";
import FAQSection from "@/components/home/FAQSection";
import equipmentImg from "@/assets/equipment.jpg";
import { motion, Variants } from "framer-motion";

const services = [
  {
    icon: Clock,
    title: "24/7 Emergency Repairs",
    desc: "Round-the-clock emergency breakdown service with rapid response times across Brisbane, Gold Coast and SE Queensland.",
  },
  {
    icon: Wrench,
    title: "Preventative Maintenance",
    desc: "Scheduled maintenance plans that catch issues before they become costly breakdowns. Extend system life, cut energy costs and stay compliant.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Certification",
    desc: "Post-repair compliance checks, HACCP documentation and temperature logging for food safety and pharmaceutical audits.",
  },
  {
    icon: Thermometer,
    title: "Smart Monitoring",
    desc: "IoT-enabled temperature monitoring with cloud dashboards, automated alerts and compliance logging.",
  },
  {
    icon: BarChart3,
    title: "Energy Audits & Upgrades",
    desc: "Comprehensive energy efficiency assessments and system upgrades that reduce running costs by up to 30% on ageing systems.",
  },
  {
    icon: Snowflake,
    title: "Cold Room Construction",
    desc: "When you need new capacity, our in-house team designs, fabricates and installs custom HACCP-compliant cold rooms built to last.",
  },
];

const steps = [
  {
    icon: Phone,
    num: "01",
    title: "You Call — 24/7",
    desc: "Speak to a real technician on our 24/7 emergency hotline. No call centres, no waiting. We triage your issue immediately.",
  },
  {
    icon: Search,
    num: "02",
    title: "We Dispatch & Diagnose",
    desc: "The nearest qualified technician is dispatched within minutes. On-site fault diagnosis with full cost transparency before any work begins.",
  },
  {
    icon: Wrench,
    num: "03",
    title: "Repair on First Visit",
    desc: "We carry common parts and refrigerants on every truck. 98% of repairs are completed on the first visit — minimising your downtime.",
  },
  {
    icon: CheckCircle,
    num: "04",
    title: "Test & Certify",
    desc: "System tested to manufacturer specifications. Compliance documentation provided for HACCP and food safety audits.",
  },
  {
    icon: Monitor,
    num: "05",
    title: "Monitor & Prevent",
    desc: "Optional smart monitoring installed to track temperatures and system health — catching issues before they become breakdowns.",
  },
  {
    icon: FileText,
    num: "06",
    title: "Ongoing Maintenance",
    desc: "Move from reactive to proactive with a scheduled maintenance plan. Extend system life, cut energy costs and stay compliant year-round.",
  },
];

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

const Services = () => (
  <Layout>
    

    {/* Hero & service cards */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          className="max-w-3xl mb-16"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4"
          >
            Our Services
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Repairs, Maintenance & Cold Room Solutions
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
            From 2am breakdowns to scheduled servicing and new cold room builds
            — one expert team for every commercial refrigeration need.
          </motion.p>
        </motion.div>

        {/* Emergency callout banner */}
        <motion.div
          className="gradient-cta rounded-2xl p-6 md:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-4"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-primary-foreground mb-1">
              Refrigeration Emergency?
            </h2>
            <p className="text-primary-foreground/80 text-sm">
              Call now for priority dispatch — average 2-hour response, 24/7.
            </p>
          </div>
          <Button asChild size="lg" variant="secondary" className="shrink-0">
            <a href="tel:1300227600">
              <Phone className="w-4 h-4 mr-2" /> 1300 227 600
            </a>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {s.desc}
              </p>
              <Button
                asChild
                variant="ghost"
                className="px-0 text-primary hover:text-primary"
              >
                <Link href="/contact">
                  Get in Touch <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-extrabold mb-4">
              All Brands. All Systems. One Team.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We service and repair all major commercial refrigeration brands —
              Bitzer, Copeland, Danfoss, Daikin and more. Whether it's a
              compressor failure, refrigerant leak or control system fault,
              we've seen it and fixed it.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When you need new cold storage capacity, we also design, fabricate
              and install custom cold rooms with high-density polyurethane
              insulation and food-grade stainless steel finishes.
            </p>
          </motion.div>
          <motion.div
            className="rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={equipmentImg.src}
              alt="Commercial refrigeration equipment"
              className="w-full h-[350px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <motion.div
          className="max-w-2xl mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            Our Process
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            How We Deliver Your Project
          </h2>
          <p className="text-lg text-muted-foreground">
            A transparent, structured process that keeps you informed at every stage.
          </p>
        </motion.div>

        <div className="space-y-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              className="grid md:grid-cols-[80px_1fr] gap-6 items-start"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.05 }}
            >
              <motion.div
                className="w-16 h-16 rounded-2xl gradient-cta flex items-center justify-center text-primary-foreground font-extrabold text-lg shadow-lg shadow-primary/20"
                whileHover={{ scale: 1.08, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {s.num}
              </motion.div>
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <s.icon className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold">{s.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 bg-card rounded-2xl p-8 md:p-12 border border-border"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-extrabold mb-4">Need a New Cold Room?</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            For new cold room builds, our process includes consultation, site inspection,
            engineering & design, fabrication, installation and HACCP certification —
            typically 4–8 weeks from approval to handover.
          </p>
          <Button asChild>
            <Link href="/contact">
              Request a Build Quote <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>

    <CTABanner />
    <FAQSection />
  </Layout>
);

export default Services;
