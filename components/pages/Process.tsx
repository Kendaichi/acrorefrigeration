"use client";

import Layout from "@/components/Layout";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MessageSquare,
  Search,
  PenTool,
  Hammer,
  HardHat,
  CheckCircle,
  Phone,
  Wrench,
  Monitor,
  FileText,
} from "lucide-react";
import CTABanner from "@/components/home/CTABanner";
import { motion, Variants } from "framer-motion";

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

const Process = () => (
  <Layout>
    
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
            Our Process
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            How We Deliver Your Project
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
            A transparent, structured process that keeps you informed at every
            stage.
          </motion.p>
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
                <p className="text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-secondary rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-extrabold mb-4">
            Need a New Cold Room?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            For new cold room builds, our process includes consultation, site
            inspection, engineering & design, fabrication, installation and
            HACCP certification — typically 4–8 weeks from approval to handover.
          </p>
          <Button asChild>
            <Link href="/contact">
              Request a Build Quote <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Button asChild size="lg" className="text-base px-8">
            <a href="tel:1300227600">
              <Phone className="w-4 h-4 mr-2" /> Call Now — 24/7{" "}
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
    <CTABanner />
  </Layout>
);

export default Process;
