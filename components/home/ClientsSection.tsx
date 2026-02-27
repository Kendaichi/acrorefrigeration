"use client";

import ScrollReveal from "@/components/ScrollReveal";

import brisbanClub from "@/assets/clients/brisbane-club.png";
import marriott from "@/assets/clients/client-marriot.png";
import gambaro from "@/assets/clients/gambaro.png";
import geebungRsl from "@/assets/clients/geebungrsl-logo-3.png";
import kedron from "@/assets/clients/kedron.png";
import norths from "@/assets/clients/norths.png";
import orford from "@/assets/clients/orford.png";
import stamford from "@/assets/clients/stamford-1.png";

const clients = [
  { src: brisbanClub.src, alt: "Brisbane Club" },
  { src: marriott.src, alt: "Marriott" },
  { src: gambaro.src, alt: "Gambaro" },
  { src: geebungRsl.src, alt: "Geebung RSL" },
  { src: kedron.src, alt: "Kedron" },
  { src: norths.src, alt: "Norths" },
  { src: orford.src, alt: "Orford" },
  { src: stamford.src, alt: "Stamford" },
];

const ClientsSection = () => (
  <section className="bg-background py-12 sm:py-16 px-4 sm:px-6">
    <div className="container-narrow">
      <ScrollReveal className="text-center mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
          Trusted By
        </p>
        <h2 className="text-2xl md:text-3xl font-extrabold">
          Proudly Serving Queensland's Best
        </h2>
      </ScrollReveal>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 items-center">
        {clients.map((client, i) => (
          <ScrollReveal key={client.alt} delay={i * 80}>
            <div className="flex items-center justify-center p-4 rounded-xl bg-background border border-border h-24 hover-lift">
              <img
                src={client.src}
                alt={client.alt}
                className="max-h-14 max-w-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ClientsSection;
