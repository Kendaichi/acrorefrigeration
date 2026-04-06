"use client";

import { useState, type FormEvent } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Loader2, CheckCircle2 } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { contactPage, contactDetails, serviceOptions } from "@/data/contact";
import type { SiteSettings } from "@/lib/supabase/content";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function formatPhone(raw: string) {
  return raw.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3");
}

const Contact = ({ settings }: { settings?: SiteSettings | null }) => {
  const phone        = settings?.phone         ?? contactDetails.phone;
  const phoneDisplay = formatPhone(phone);
  const email        = settings?.email         ?? contactDetails.email;
  const address      = settings?.address       ?? contactDetails.location;
  const hours        = settings?.business_hours ?? contactDetails.hours;
  const emergency    = settings?.emergency_text ?? contactDetails.emergency;

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: serviceOptions[0],
    details: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setFormState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: serviceOptions[0],
        details: "",
      });
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-narrow">
          {/* Emergency banner */}
          <motion.div
            className="gradient-cta rounded-xl p-6 md:p-8 mb-14 flex flex-col md:flex-row items-center justify-between gap-4"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-primary-foreground mb-1">
                {contactPage.emergencyBanner.heading}
              </h2>
              <p className="text-primary-foreground/80 text-sm">
                {contactPage.emergencyBanner.subheading}
              </p>
            </div>
            <Button asChild size="lg" variant="secondary" className="shrink-0 cursor-pointer">
              <a href={`tel:${phone}`}>
                <Phone className="w-4 h-4 mr-2" /> {phoneDisplay}
              </a>
            </Button>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left — contact info */}
            <motion.div variants={stagger} initial="hidden" animate="visible">
              <motion.span
                variants={fadeUp}
                className="inline-block text-xs font-bold uppercase tracking-widest text-primary border border-primary/35 bg-primary/5 px-3 py-1.5 rounded mb-4"
              >
                {contactPage.badge}
              </motion.span>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold mb-6">
                {contactPage.heading}
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-10">
                {contactPage.subheading}
              </motion.p>

              <motion.div variants={stagger} className="space-y-6">
                {[
                  { icon: Phone, label: "24/7 Emergency Line", value: phoneDisplay, href: `tel:${phone}` },
                  { icon: Mail, label: "Email", value: email, href: `mailto:${email}` },
                  { icon: MapPin, label: "Location", value: address, href: undefined },
                  { icon: Clock, label: "Business Hours", value: hours, sub: emergency, href: undefined },
                ].map(({ icon: Icon, label, value, href, sub }) => (
                  <motion.div key={label} variants={slideLeft} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">{label}</div>
                      {href ? (
                        <a href={href} className="text-muted-foreground hover:text-primary transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{value}</p>
                      )}
                      {sub && <p className="text-sm text-primary font-semibold mt-0.5">{sub}</p>}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              variants={slideRight}
              initial="hidden"
              animate="visible"
              className="bg-card rounded-xl p-8 border border-border shadow-sm"
            >
              <h2 className="text-xl font-bold mb-6">{contactPage.formHeading}</h2>

              {status === "success" ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Enquiry Submitted!</h3>
                  <p className="text-muted-foreground mb-6">
                    We&apos;ll get back to you within 2 business hours.
                  </p>
                  <Button variant="outline" onClick={() => setStatus("idle")} className="cursor-pointer">
                    Send Another Enquiry
                  </Button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">First Name *</label>
                      <Input
                        placeholder="John"
                        required
                        value={formState.firstName}
                        onChange={(e) => setFormState((s) => ({ ...s, firstName: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Last Name *</label>
                      <Input
                        placeholder="Smith"
                        required
                        value={formState.lastName}
                        onChange={(e) => setFormState((s) => ({ ...s, lastName: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Email *</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Phone</label>
                    <Input
                      type="tel"
                      placeholder="04XX XXX XXX"
                      value={formState.phone}
                      onChange={(e) => setFormState((s) => ({ ...s, phone: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Service Required *</label>
                    <select
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                      value={formState.service}
                      onChange={(e) => setFormState((s) => ({ ...s, service: e.target.value }))}
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Details</label>
                    <Textarea
                      placeholder="Describe your issue or requirements — equipment type, urgency, location, etc."
                      rows={4}
                      value={formState.details}
                      onChange={(e) => setFormState((s) => ({ ...s, details: e.target.value }))}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-destructive text-center">{errorMsg}</p>
                  )}

                  <Button
                    type="submit"
                    className="w-full cursor-pointer"
                    size="lg"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting…
                      </>
                    ) : (
                      "Submit Enquiry"
                    )}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    {contactPage.formFootnote}
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
