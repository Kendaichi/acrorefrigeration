"use client";

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => (
  <Layout>
    
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Emergency banner */}
        <motion.div
          className="gradient-cta rounded-2xl p-6 md:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-4"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-primary-foreground mb-1">
              Need Emergency Repair?
            </h2>
            <p className="text-primary-foreground/80 text-sm">
              Skip the form — call now for 24/7 priority dispatch.
            </p>
          </div>
          <Button asChild size="lg" variant="secondary" className="shrink-0">
            <a href="tel:1300000000">
              <Phone className="w-4 h-4 mr-2" /> 1300 227 600
            </a>
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4"
            >
              Contact Us
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-extrabold mb-6"
            >
              Get a Service or Build Quote
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground mb-10"
            >
              Whether you need emergency repairs, a maintenance plan, or a new
              cold room — we'll get back to you within 2 business hours.
            </motion.p>

            <motion.div variants={stagger} className="space-y-6">
              <motion.div
                variants={slideLeft}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">24/7 Emergency Line</div>
                  <a
                    href="tel:1300000000"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    1300 227 600
                  </a>
                </div>
              </motion.div>
              <motion.div
                variants={slideLeft}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <a
                    href="mailto:info@acrorefrigeration.com.au"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@acrorefrigeration.com.au
                  </a>
                </div>
              </motion.div>
              <motion.div
                variants={slideLeft}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Location</div>
                  <p className="text-muted-foreground">
                    Brisbane, SE Queensland
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={slideLeft}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Business Hours</div>
                  <p className="text-muted-foreground">
                    Mon–Fri: 7am – 5pm AEST
                  </p>
                  <p className="text-sm text-primary font-semibold">
                    24/7 Emergency Service Available
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            animate="visible"
            className="bg-card rounded-2xl p-8 border border-border shadow-sm"
          >
            <h2 className="text-xl font-bold mb-6">Request a Quote</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    First Name
                  </label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    Last Name
                  </label>
                  <Input placeholder="Smith" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">
                  Email
                </label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">
                  Phone
                </label>
                <Input type="tel" placeholder="04XX XXX XXX" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">
                  Service Required
                </label>
                <select className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm">
                  <option>Emergency Repair</option>
                  <option>Maintenance Plan</option>
                  <option>System Upgrade</option>
                  <option>New Cold Room Build</option>
                  <option>Smart Monitoring</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">
                  Details
                </label>
                <Textarea
                  placeholder="Describe your issue or requirements — equipment type, urgency, location, etc."
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Submit Enquiry
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                We'll respond within 2 business hours. No spam, ever.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
