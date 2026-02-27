"use client";

import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CTABanner from "@/components/home/CTABanner";
import heroImg from "@/assets/hero-coldroom.jpg";
import { motion, Variants } from "framer-motion";

const projects = [
  {
    title: "FreshMart National Fleet",
    type: "Maintenance Contract",
    size: "48 stores",
    desc: "Ongoing preventative maintenance across 48 supermarket locations. Reduced emergency call-outs by 60% in the first year through proactive servicing.",
  },
  {
    title: "Harbour Kitchen — Emergency",
    type: "Emergency Repair",
    size: "Compressor failure",
    desc: "2am compressor failure at a high-volume waterfront restaurant. Technician on-site within 90 minutes, system restored before morning prep.",
  },
  {
    title: "PharmaLogix Brisbane",
    type: "Maintenance & Monitoring",
    size: "120 sqm facility",
    desc: "TGA-compliant maintenance contract with 24/7 remote monitoring. Zero temperature excursions since program inception.",
  },
  {
    title: "Aussie Meats Processing",
    type: "Cold Room Build",
    size: "300 sqm blast freezer",
    desc: "High-capacity blast freezing facility with processing rooms designed for continuous 24/7 operation. Delivered on time and on budget.",
  },
  {
    title: "GreenGrocer Co-op",
    type: "System Upgrade",
    size: "80 sqm multi-temp",
    desc: "Ageing refrigeration system upgraded with energy-efficient compressors and smart monitoring. 28% reduction in energy costs.",
  },
  {
    title: "ColdChain Logistics",
    type: "Emergency + Maintenance",
    size: "500 sqm warehouse",
    desc: "Started with an emergency condenser repair, now a full preventative maintenance client with quarterly servicing across two facilities.",
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

const Projects = () => (
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
            Our Work
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Featured Projects
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
            A selection of commercial refrigeration projects delivered across
            Australia.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={heroImg.src}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {p.type}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {p.size}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Button asChild size="lg" className="text-base px-8">
            <Link href="/contact">
              Discuss Your Needs <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
    <CTABanner />
  </Layout>
);

export default Projects;
