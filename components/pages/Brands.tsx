"use client";

import Layout from "@/components/Layout";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Phone } from "lucide-react";
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

const featuredBrands = [
  {
    slug: "bitzer",
    name: "Bitzer",
    desc: "Semi-hermetic reciprocating and screw compressor repairs, overhauls and preventative maintenance.",
    speciality: "Compressors",
    detail: "One of the world's leading compressor manufacturers — trusted in cold rooms, supermarkets and industrial facilities across Australia.",
  },
  {
    slug: "copeland",
    name: "Copeland",
    desc: "Scroll and semi-hermetic compressor diagnostics, replacement and efficiency optimisation.",
    speciality: "Compressors",
    detail: "Widely used scroll and semi-hermetic compressors found in everything from supermarket display cases to large cold rooms.",
  },
  {
    slug: "danfoss",
    name: "Danfoss",
    desc: "Expansion valves, electronic controllers, pressure controls and variable speed drive repairs.",
    speciality: "Controls & Valves",
    detail: "Global leader in refrigeration controls, valves and drives found in virtually every commercial refrigeration system.",
  },
];

const otherBrands = [
  { name: "Daikin", category: "Refrigeration & HVAC" },
  { name: "Carrier", category: "Refrigeration & HVAC" },
  { name: "Heatcraft", category: "Refrigeration" },
  { name: "Embraco", category: "Compressors" },
  { name: "Tecumseh", category: "Compressors" },
  { name: "Hussmann", category: "Display Cases" },
  { name: "Reflex", category: "Controls" },
  { name: "Kirloskar", category: "Compressors" },
  { name: "Panasonic", category: "Refrigeration & HVAC" },
  { name: "LG Commercial", category: "Refrigeration & HVAC" },
];

const Brands = () => (
  <Layout>
    

    {/* Hero */}
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
            <Wrench className="w-3.5 h-3.5" /> Brand Specialists
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            All Major Brands. One Expert Team.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
            We service and repair every major commercial refrigeration brand —
            from compressor overhauls to control system diagnostics. If it's
            refrigeration, we know it.
          </motion.p>
        </motion.div>

        {/* Emergency banner */}
        <motion.div
          className="gradient-cta rounded-2xl p-6 md:p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-4"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-primary-foreground mb-1">
              Brand Equipment Failure?
            </h2>
            <p className="text-primary-foreground/80 text-sm">
              Call now — average 2-hour response, 24/7 across Brisbane & SE Queensland.
            </p>
          </div>
          <Button asChild size="lg" variant="secondary" className="shrink-0">
            <a href="tel:1300227600">
              <Phone className="w-4 h-4 mr-2" /> 1300 227 600
            </a>
          </Button>
        </motion.div>

        {/* Featured brand cards */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-4"
        >
          <h2 className="text-2xl font-extrabold mb-2">Featured Brand Specialists</h2>
          <p className="text-muted-foreground mb-10">
            Deep expertise in these brands with dedicated service pages, parts supply and specialist technicians.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {featuredBrands.map((brand, i) => (
            <motion.div
              key={brand.slug}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <Link
                href={`/brands/${brand.slug}`}
                className="block bg-card rounded-2xl p-8 border border-border shadow-sm group hover:border-primary/20 h-full"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground bg-secondary px-2.5 py-1 rounded-full">
                    {brand.speciality}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold mb-2 group-hover:text-primary transition-colors">
                  {brand.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {brand.detail}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {brand.desc}
                </p>
                <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  View {brand.name} Services <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* All Other Brands */}
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Also Servicing These Brands
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our technicians are trained across the full range of commercial refrigeration
            equipment — whatever brand you run, we can help.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {otherBrands.map((brand, i) => (
            <motion.div
              key={brand.name}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-card rounded-2xl p-6 border border-border text-center shadow-sm hover:border-primary/20 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Wrench className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-sm mb-1">{brand.name}</h3>
              <p className="text-xs text-muted-foreground">{brand.category}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-card rounded-2xl p-8 md:p-12 border border-border text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-extrabold mb-3">Don't See Your Brand?</h3>
          <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto">
            We service and repair virtually all commercial refrigeration brands. If you don't
            see your equipment listed, get in touch — chances are we've worked on it before.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Enquire About Your Brand <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>

    <CTABanner />
  </Layout>
);

export default Brands;
