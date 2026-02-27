"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Linkedin } from "lucide-react";
import acroLogo from "@/assets/acro-logo.png";

const Footer = () => (
  <footer className="bg-dark text-dark-foreground">
    <div className="container-narrow section-padding">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
        <div>
          <div className="flex items-center gap-2 font-extrabold text-xl mb-4">
            <img
              src={acroLogo.src}
              alt="Acro Refrigeration"
              className="h-10 w-10 object-contain"
            />
            Acro Refrigeration
          </div>
          <p className="text-dark-foreground/60 text-sm leading-relaxed mb-6">
            Australia's trusted commercial refrigeration contractor. 24/7
            emergency repairs, maintenance plans and cold room builds across
            SE Queensland.
          </p>
          <div className="flex flex-col gap-3 text-sm text-dark-foreground/60">
            <a
              href="tel:1300227600"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" /> 1300 227 600
            </a>
            <a
              href="mailto:info@acrorefrigeration.com.au"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" /> info@acrorefrigeration.com.au
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Brisbane, SE Queensland
            </span>
          </div>
          <div className="flex items-center gap-3 mt-6">
            <a
              href="https://www.facebook.com/acrorefrigeration/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-lg bg-dark-foreground/10 flex items-center justify-center text-dark-foreground/60 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/acro-refrigeration-qld/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-lg bg-dark-foreground/10 flex items-center justify-center text-dark-foreground/60 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-dark-foreground/40">
            Services
          </h4>
          <ul className="space-y-2.5 text-sm text-dark-foreground/60">
            <li>
              <Link href="/services" className="hover:text-primary transition-colors">
                24/7 Emergency Repairs
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary transition-colors">
                Preventative Maintenance
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary transition-colors">
                Compliance & Certification
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary transition-colors">
                Energy Audits
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary transition-colors">
                Cold Room Construction
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-dark-foreground/40">
            Industries
          </h4>
          <ul className="space-y-2.5 text-sm text-dark-foreground/60">
            <li>
              <Link href="/industries" className="hover:text-primary transition-colors">
                Restaurants & Hospitality
              </Link>
            </li>
            <li>
              <Link href="/industries" className="hover:text-primary transition-colors">
                Supermarkets
              </Link>
            </li>
            <li>
              <Link href="/industries" className="hover:text-primary transition-colors">
                Pharmaceuticals
              </Link>
            </li>
            <li>
              <Link href="/industries" className="hover:text-primary transition-colors">
                Warehousing
              </Link>
            </li>
            <li>
              <Link href="/industries" className="hover:text-primary transition-colors">
                Food Production
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-dark-foreground/40">
            Company
          </h4>
          <ul className="space-y-2.5 text-sm text-dark-foreground/60">
            <li>
              <Link href="/process" className="hover:text-primary transition-colors">
                Our Process
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-primary transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-primary transition-colors">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:text-primary transition-colors">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-dark-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-dark-foreground/40">
        <p>
          © {new Date().getFullYear()} Acro Refrigeration. All rights reserved.
          ABN 43 672 578 264
        </p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
