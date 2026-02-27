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

const brandsData: Record<string, {
  name: string;
  tagline: string;
  heroDesc: string;
  stats: { value: string; label: string }[];
  about: string;
  commonIssues: { title: string; desc: string }[];
  services: string[];
  productTypes: string[];
  relatedBrands: { slug: string; name: string; desc: string }[];
}> = {
  bitzer: {
    name: "Bitzer",
    tagline: "Authorised Bitzer Compressor Repairs & Servicing",
    heroDesc: "Specialist Bitzer compressor diagnostics, repairs and maintenance. Our technicians are trained on the full Bitzer range — from semi-hermetic reciprocating compressors to screw compressors and condensing units.",
    stats: [
      { value: "500+", label: "Bitzer Repairs" },
      { value: "98%", label: "First-Visit Fix" },
      { value: "24/7", label: "Emergency Service" },
      { value: "15yr", label: "Bitzer Experience" },
    ],
    about: "Bitzer is one of the world's leading manufacturers of refrigeration compressors, trusted across commercial and industrial applications. Their semi-hermetic and screw compressors are the backbone of cold rooms, supermarket systems and industrial facilities across Australia. When a Bitzer compressor fails, you need a technician who knows the product inside-out — not a generalist who's guessing.",
    commonIssues: [
      { title: "Compressor Burnout", desc: "Electrical or mechanical failure requiring expert diagnosis to identify root cause and prevent recurrence." },
      { title: "Oil Logging & Migration", desc: "Incorrect oil levels or migration causing reduced efficiency and potential compressor damage." },
      { title: "Valve Plate Failure", desc: "Worn or damaged valve plates reducing compression efficiency and increasing energy consumption." },
      { title: "Electrical Contactor Issues", desc: "Failed contactors and overloads causing intermittent starting or complete failure to start." },
      { title: "Refrigerant Leaks", desc: "Shaft seal or gasket leaks requiring specialist tools and certified refrigerant handling." },
      { title: "Capacity Control Faults", desc: "Unloader or capacity control issues causing systems to run inefficiently or short-cycle." },
    ],
    services: [
      "Emergency compressor repairs — 24/7",
      "Compressor overhauls and rebuilds",
      "Oil analysis and management",
      "Valve plate replacement",
      "Electrical diagnostics and contactor replacement",
      "Refrigerant leak detection and repair",
      "Capacity control servicing",
      "Preventative maintenance programs",
      "Genuine Bitzer parts supply",
      "System efficiency assessments",
    ],
    productTypes: [
      "Semi-Hermetic Reciprocating Compressors",
      "Screw Compressors",
      "Scroll Compressors",
      "Condensing Units",
      "Pressure Vessels",
      "Oil Separators",
    ],
    relatedBrands: [
      { slug: "copeland", name: "Copeland", desc: "Scroll and semi-hermetic compressor repairs and servicing." },
      { slug: "danfoss", name: "Danfoss", desc: "Controls, compressors and valve repairs across all product lines." },
      { slug: "daikin", name: "Daikin", desc: "Commercial refrigeration and air conditioning system servicing." },
    ],
  },
  copeland: {
    name: "Copeland",
    tagline: "Expert Copeland Compressor Repairs & Servicing",
    heroDesc: "Trusted Copeland scroll and semi-hermetic compressor servicing. We diagnose and repair the full Copeland range used in commercial refrigeration and air conditioning systems across SEQ.",
    stats: [
      { value: "400+", label: "Copeland Repairs" },
      { value: "98%", label: "First-Visit Fix" },
      { value: "24/7", label: "Emergency Service" },
      { value: "12yr", label: "Copeland Experience" },
    ],
    about: "Copeland (formerly Emerson Climate Technologies) manufactures some of the most widely used scroll and semi-hermetic compressors in the commercial refrigeration industry. Found in everything from supermarket display cases to cold rooms and food processing facilities, Copeland compressors are reliable — but when they fail, specialist knowledge is essential for fast, correct diagnosis.",
    commonIssues: [
      { title: "Scroll Compressor Failure", desc: "Internal scroll wear or seizure requiring replacement or rebuild." },
      { title: "Liquid Slugging", desc: "Liquid refrigerant entering the compressor causing mechanical damage." },
      { title: "High Discharge Temperature", desc: "Overheating due to low charge, dirty condensers or restricted airflow." },
      { title: "Start Component Failure", desc: "Failed start capacitors, relays or run capacitors preventing startup." },
      { title: "Oil Return Issues", desc: "Poor oil return causing lubrication failure and compressor wear." },
      { title: "Internal Relief Valve Trips", desc: "High compression ratios causing the internal relief to open repeatedly." },
    ],
    services: [
      "Emergency compressor diagnostics and repairs",
      "Scroll compressor replacement",
      "Electrical component testing and replacement",
      "Refrigerant charge correction",
      "Oil level and return system servicing",
      "Condenser cleaning and airflow optimisation",
      "System performance testing",
      "Preventative maintenance contracts",
      "Genuine Copeland parts supply",
      "Compressor upgrade recommendations",
    ],
    productTypes: [
      "Scroll Compressors",
      "Semi-Hermetic Compressors",
      "Digital Scroll Compressors",
      "Condensing Units",
      "Compressor Racks",
    ],
    relatedBrands: [
      { slug: "bitzer", name: "Bitzer", desc: "Semi-hermetic and screw compressor specialist repairs." },
      { slug: "danfoss", name: "Danfoss", desc: "Controls, compressors and valve repairs across all product lines." },
      { slug: "daikin", name: "Daikin", desc: "Commercial refrigeration and air conditioning system servicing." },
    ],
  },
  danfoss: {
    name: "Danfoss",
    tagline: "Danfoss Controls & Compressor Repairs",
    heroDesc: "Expert servicing of Danfoss controls, valves, compressors and drives. From expansion valve replacements to controller programming and compressor diagnostics.",
    stats: [
      { value: "300+", label: "Danfoss Jobs/Year" },
      { value: "98%", label: "First-Visit Fix" },
      { value: "24/7", label: "Emergency Service" },
      { value: "10yr", label: "Danfoss Experience" },
    ],
    about: "Danfoss is a global leader in refrigeration controls, valves and compressors. Their products — from electronic expansion valves and pressure controls to variable speed drives and controllers — are found in virtually every commercial refrigeration system. Faults in Danfoss controls can be complex to diagnose without specialist knowledge of their product ecosystem.",
    commonIssues: [
      { title: "Expansion Valve Failure", desc: "Electronic or thermostatic expansion valves failing to regulate correctly." },
      { title: "Controller Faults", desc: "ERC or AK controller errors requiring programming or hardware replacement." },
      { title: "Pressure Control Issues", desc: "High/low pressure switches and regulators failing or out of calibration." },
      { title: "VSD/Drive Faults", desc: "Variable speed drive errors causing compressor performance issues." },
      { title: "Solenoid Valve Failures", desc: "Stuck-open or stuck-closed solenoid valves disrupting system operation." },
      { title: "Sensor Faults", desc: "Temperature and pressure sensor failures causing incorrect system responses." },
    ],
    services: [
      "Expansion valve diagnostics and replacement",
      "Controller programming and commissioning",
      "Pressure control calibration and replacement",
      "VSD fault diagnosis and repair",
      "Solenoid valve testing and replacement",
      "Sensor replacement and calibration",
      "System optimisation and tuning",
      "Preventative maintenance",
      "Genuine Danfoss parts supply",
      "Control system upgrades",
    ],
    productTypes: [
      "Electronic Expansion Valves",
      "Thermostatic Expansion Valves",
      "Pressure Controls",
      "Electronic Controllers",
      "Variable Speed Drives",
      "Solenoid Valves",
      "Compressors",
    ],
    relatedBrands: [
      { slug: "bitzer", name: "Bitzer", desc: "Semi-hermetic and screw compressor specialist repairs." },
      { slug: "copeland", name: "Copeland", desc: "Scroll and semi-hermetic compressor repairs and servicing." },
      { slug: "daikin", name: "Daikin", desc: "Commercial refrigeration and air conditioning system servicing." },
    ],
  },
};

const BrandPage = () => {
  const { brandSlug } = useParams<{ brandSlug: string }>();
  const brand = brandsData[brandSlug || ""];

  if (!brand) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="text-4xl font-extrabold mb-4">Brand Not Found</h1>
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
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/brands">Brands</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>{brand.name}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div className="max-w-3xl" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
              {brand.name} Specialist
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">{brand.tagline}</h1>
            <p className="text-lg text-muted-foreground mb-8">{brand.heroDesc}</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg"><Link href="/contact">Book a {brand.name} Repair <ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
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
          {brand.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-primary">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="section-padding bg-background">
        <div className="container-narrow grid lg:grid-cols-2 gap-12 items-start">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-extrabold mb-4">Why Choose a {brand.name} Specialist?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{brand.about}</p>
            <Button asChild variant="outline"><Link href="/contact">Discuss Your {brand.name} System <ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} transition={{ delay: 0.1 }}>
            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="font-bold text-lg mb-5">{brand.name} Products We Service</h3>
              <ul className="space-y-3">
                {brand.productTypes.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <motion.div className="text-center mb-16" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Common {brand.name} Issues We Fix</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our technicians are trained to diagnose and resolve these common {brand.name} faults quickly and correctly.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brand.commonIssues.map((issue, i) => (
              <motion.div
                key={issue.title}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-card rounded-2xl p-6 border border-border h-full"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Wrench className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{issue.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{issue.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-narrow max-w-3xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-extrabold mb-8">Our {brand.name} Services</h2>
            <div className="bg-card rounded-2xl border border-border p-8">
              <ul className="space-y-3">
                {brand.services.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Brands */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <motion.div className="mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-extrabold">Other Brands We Service</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {brand.relatedBrands.map((rb, i) => (
              <motion.div
                key={rb.slug}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Link href={`/brands/${rb.slug}`} className="block bg-card rounded-2xl p-8 border border-border shadow-sm group hover:border-primary/20 h-full">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{rb.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{rb.desc}</p>
                  <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    View {rb.name} Services <ArrowRight className="w-4 h-4" />
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

export default BrandPage;
