import { BookOpen, FileText, Video, type LucideIcon } from "lucide-react";

export interface ResourceSection {
  heading: string;
  content: string[];
}

export interface Resource {
  slug: string;
  type: "Guide" | "Article" | "Case Study" | "Video";
  icon: LucideIcon;
  title: string;
  desc: string;
  metaDescription: string;
  date: string;
  readTime: string;
  sections: ResourceSection[];
  relatedSlugs: string[];
}

export const resources: Resource[] = [
  {
    slug: "haccp-compliant-cold-rooms",
    type: "Guide",
    icon: BookOpen,
    title: "The Complete Guide to HACCP-Compliant Cold Rooms",
    desc: "Everything you need to know about building a cold room that passes food safety inspections.",
    metaDescription: "A complete guide to building HACCP-compliant cold rooms. Covers temperature requirements, documentation, panel specifications, drainage and audit preparation for commercial food businesses.",
    date: "Feb 2026",
    readTime: "8 min read",
    sections: [
      {
        heading: "What Is HACCP and Why Does It Apply to Cold Rooms?",
        content: [
          "HACCP — Hazard Analysis and Critical Control Points — is the internationally recognised framework for managing food safety risks. In Australia, compliance with HACCP principles is required under the Food Standards Code for any business that handles, stores or processes food commercially.",
          "Your cold room is a Critical Control Point (CCP) in almost every food safety plan. If your refrigeration system fails to maintain safe temperatures, the entire cold chain is compromised. A non-compliant cold room can result in failed health inspections, product recalls, significant fines and reputational damage that takes years to recover from.",
          "Understanding exactly what HACCP compliance means for your cold room — from construction through to daily operation — is the first step to protecting your business.",
        ],
      },
      {
        heading: "Temperature Requirements by Food Category",
        content: [
          "Australian Standard 4674-2004 and the Food Standards Code set the baseline temperature requirements for commercial cold storage. As a rule, chilled food must be stored at or below 5°C, frozen food at or below -15°C, and cool rooms for some produce can operate between 8–12°C.",
          "However, specific industries have tighter requirements. Seafood should ideally be stored at 0–2°C. Ready-to-eat foods, cut fruits and dairy products all have specific guidance. Pharmaceutical cold rooms typically require 2–8°C with tight variation tolerances of ±0.5°C.",
          "Your cold room must not only reach these temperatures — it must maintain them consistently under load, accounting for door openings, stock rotation and ambient temperature changes during Queensland's summer months.",
        ],
      },
      {
        heading: "Construction Requirements for HACCP Compliance",
        content: [
          "A HACCP-compliant cold room starts with the right materials. Wall and ceiling panels should use high-density polyurethane (PU) foam insulation — minimum 100mm thick for coolrooms, 150mm for freezers — with food-grade stainless steel or powder-coated aluminium facings. All joins must be sealed and coved to prevent harbourage of bacteria.",
          "Flooring must be non-slip, impervious and coved at the junction with walls to a minimum height of 50mm. Drainage must be adequate to handle defrost water and cleaning without pooling. Door seals must be inspected regularly — a worn seal is one of the most common causes of temperature non-compliance.",
          "Lighting inside the cold room must be protected and shatter-resistant. All electrical penetrations must be properly sealed to prevent pest entry. These details are routinely checked during food safety audits.",
        ],
      },
      {
        heading: "Refrigeration System Specifications",
        content: [
          "The refrigeration system itself must be sized correctly for your cold room's volume, stock load and usage patterns. An undersized system will struggle to recover temperature after door openings and will run continuously, leading to premature failure. Oversized systems short-cycle, reducing efficiency and increasing wear.",
          "For HACCP compliance, you need a system capable of pulling down to target temperature within a defined timeframe and maintaining it continuously. Systems should include high-temperature alarms set at 2°C above the target, and ideally a low-temperature alarm for freezers. Alarms must be audible and, for critical applications, connected to a monitoring system that alerts staff remotely.",
          "Condensers must be positioned for adequate airflow and cleaned at least quarterly. Blocked condenser coils are the leading cause of high-temperature excursions during hot weather.",
        ],
      },
      {
        heading: "Documentation and Record-Keeping",
        content: [
          "HACCP compliance is not just about the physical cold room — it requires documented evidence. You must be able to demonstrate that temperatures are being monitored continuously, that corrective actions are taken when excursions occur, and that your refrigeration system is maintained to schedule.",
          "Temperature records should be logged at minimum every 4 hours, though automated IoT monitoring systems provide continuous records with timestamps that are far more defensible in an audit. Each corrective action — including repair receipts, technician reports and post-repair temperature validation — should be filed and retained for at least 2 years.",
          "Maintenance records must document every service visit, parts replaced, refrigerant handled and compliance checks performed. Acro Refrigeration provides digital compliance documentation for every repair and scheduled service visit.",
        ],
      },
      {
        heading: "Preparing for a Food Safety Audit",
        content: [
          "When an EHO (Environmental Health Officer) or third-party auditor visits, they will typically check that your cold room temperatures are within spec at the time of inspection, that your monitoring records are complete and accessible, that your cleaning schedule is documented and followed, and that your refrigeration equipment has been professionally serviced.",
          "The most common audit failures relate to incomplete temperature records, unsealed penetrations, worn door seals, and dirty condenser coils. Regular preventative maintenance — ideally on a quarterly schedule — addresses all of these systematically.",
          "If you are preparing for your first HACCP audit or have received a non-compliance notice, contact Acro Refrigeration. We can conduct a compliance assessment of your cold room and provide the documentation and rectification work needed to pass.",
        ],
      },
    ],
    relatedSlugs: ["cold-room-insulation-guide", "reduce-refrigeration-energy-costs", "cold-room-monthly-maintenance"],
  },
  {
    slug: "reduce-refrigeration-energy-costs",
    type: "Article",
    icon: FileText,
    title: "How to Reduce Commercial Refrigeration Energy Costs by 30%",
    desc: "Practical strategies for cutting energy consumption without compromising performance.",
    metaDescription: "Proven strategies to reduce commercial refrigeration energy costs by up to 30%. Covers condenser maintenance, door seals, night blinds, system upgrades and smart monitoring for Brisbane businesses.",
    date: "Jan 2026",
    readTime: "6 min read",
    sections: [
      {
        heading: "Why Refrigeration Is Your Biggest Energy Cost",
        content: [
          "For most commercial food businesses, refrigeration accounts for 30–60% of total electricity consumption. For supermarkets, that figure can reach 70%. With commercial electricity rates in Queensland now exceeding $0.30/kWh for many businesses, an ageing or poorly maintained refrigeration system is a significant and largely avoidable cost.",
          "The good news is that most commercial refrigeration systems have substantial efficiency headroom. Our energy audits consistently find savings of 25–35% are achievable without capital replacement — through a combination of maintenance, operational adjustments and low-cost upgrades.",
        ],
      },
      {
        heading: "1. Clean Condenser Coils Quarterly",
        content: [
          "A dirty condenser coil is the single biggest driver of inefficiency in commercial refrigeration. When dust, grease and debris accumulate on the condenser, the system has to work significantly harder to reject heat — increasing compressor run time and power consumption by 15–30%.",
          "In Queensland's climate, condenser coils in food service environments should be cleaned at minimum every quarter. Kitchen environments with heavy grease may need monthly cleaning. This is the highest-ROI maintenance task available and should be the first item on any energy reduction plan.",
        ],
      },
      {
        heading: "2. Inspect and Replace Door Seals",
        content: [
          "A worn or damaged door seal on a coolroom or display case allows warm, humid air to infiltrate continuously. The refrigeration system must work constantly to remove this heat load, consuming additional energy and causing excessive condensation and frost build-up.",
          "Walk-in coolroom door seals should be inspected monthly. A simple test: close the door on a piece of paper — if you can pull it out without resistance, the seal needs replacing. Display case door seals and night blinds should be checked every service. Seal replacement typically costs under $200 but can save thousands in annual energy costs.",
        ],
      },
      {
        heading: "3. Install Night Blinds on Display Cases",
        content: [
          "Open-front display cases in supermarkets and delis are a major source of energy loss — warm store air constantly falls into the case. Installing night blinds (roll-down covers used outside trading hours) reduces this infiltration by up to 40% and can cut display case energy consumption by 25–30% overnight.",
          "Many retailers are surprised to learn that display case energy consumption overnight — with lights off and no customers — can be nearly as high as during trading hours. Night blinds address this directly. Payback periods are typically 6–18 months.",
        ],
      },
      {
        heading: "4. Check Refrigerant Charge and System Settings",
        content: [
          "An incorrectly charged refrigeration system — either overcharged or undercharged — operates inefficiently. Low refrigerant charge causes the compressor to run longer to achieve the same cooling effect, while overcharging raises head pressure and increases power consumption.",
          "Expansion valve settings, cut-in and cut-out pressures, and defrost cycle timing all have a significant impact on energy consumption. These settings drift over time and should be reviewed and optimised during annual service. Incorrectly timed defrost cycles are a common source of wasted energy that is easily corrected.",
        ],
      },
      {
        heading: "5. Consider Variable Speed Drive Compressors",
        content: [
          "Traditional compressors operate at a fixed speed — either fully on or fully off. Variable Speed Drive (VSD) compressors modulate their speed to match the actual cooling demand, eliminating the energy spike on start-up and reducing average power consumption by 20–40% compared to fixed-speed equivalents.",
          "For businesses with significant refrigeration loads — supermarkets, food processors, large hospitality venues — upgrading to VSD compressors delivers substantial ongoing savings. Depending on your existing system age and condition, a full upgrade may have a payback period of 3–5 years, with significant energy savings throughout the system's remaining life.",
        ],
      },
      {
        heading: "6. Monitor Continuously with Smart Systems",
        content: [
          "You can't manage what you don't measure. IoT-enabled temperature monitoring systems provide continuous data on system performance, allowing you to identify efficiency problems before they become breakdowns — and before they waste energy for months undetected.",
          "Smart monitoring dashboards can show you when a condenser is starting to run hot, when a door is being left open, or when a system is short-cycling. Our clients who deploy monitoring consistently identify and address issues 3–4 times faster than those relying on manual checks — reducing both energy waste and emergency repair costs.",
        ],
      },
    ],
    relatedSlugs: ["smart-monitoring-roi", "haccp-compliant-cold-rooms", "cold-room-monthly-maintenance"],
  },
  {
    slug: "freshmart-cold-storage-case-study",
    type: "Case Study",
    icon: FileText,
    title: "FreshMart: 200sqm Multi-Temperature Cold Storage",
    desc: "How we delivered a complex multi-zone facility two weeks ahead of schedule.",
    metaDescription: "Case study: Acro Refrigeration designs and builds a 200sqm multi-temperature cold storage facility for FreshMart, delivered two weeks ahead of schedule with full HACCP certification.",
    date: "Dec 2025",
    readTime: "5 min read",
    sections: [
      {
        heading: "The Client",
        content: [
          "FreshMart is a Brisbane-based independent supermarket group operating four stores across the inner suburbs. Their Mount Gravatt flagship store was undergoing a major expansion — increasing floor area from 800sqm to 1,400sqm — and required a complete rebuild of their cold storage infrastructure to support the new layout and increased stock volumes.",
          "The project scope included a new coolroom for produce and dairy, a dedicated meat preparation room, a blast freezer for ice cream and frozen goods, and a separate pharmaceutical-grade storage unit for their expanding health and pharmacy section.",
        ],
      },
      {
        heading: "The Challenge",
        content: [
          "The project presented three primary challenges. First, the timeline was tight: FreshMart had contractual obligations to reopen the expanded store within 16 weeks of closing for the refurbishment. Any delay to the cold storage installation would push back the entire reopening.",
          "Second, the multi-temperature requirement — four distinct zones ranging from -25°C (blast freezer) to +8°C (pharmaceutical) — required careful thermal engineering to prevent cross-zone heat transfer and ensure each zone maintained its target temperature independently.",
          "Third, the pharmaceutical storage unit required compliance with TGA cold chain guidelines in addition to standard food safety requirements, meaning stricter tolerances, redundant monitoring and a detailed validation protocol before commissioning.",
        ],
      },
      {
        heading: "Our Approach",
        content: [
          "Acro Refrigeration's project team began with a detailed site survey and thermal modelling exercise, using the store's trading data to accurately size each refrigeration system for peak load conditions. This upfront engineering work is critical for multi-zone facilities — undersized systems in adjacent zones can cause thermal interference that is difficult and expensive to rectify after installation.",
          "We specified 150mm PU foam panels for the blast freezer and 100mm panels for the remaining zones, with all inter-zone walls designed to provide thermal breaks. The refrigeration plant was configured on a central rack system with zone-dedicated expansion valves and electronic controllers, allowing each zone to be managed independently.",
          "For the pharmaceutical unit, we installed a redundant monitoring system with dual temperature probes, UPS-backed alarms and cloud-connected logging that provides the continuous, timestamped records required for TGA compliance.",
        ],
      },
      {
        heading: "The Result",
        content: [
          "The installation was completed in 12 weeks — two weeks ahead of the contracted schedule — allowing FreshMart's fitout team additional time before the store opening. All four zones passed temperature validation and HACCP inspection on the first attempt.",
          "The pharmaceutical unit received TGA cold chain validation, enabling FreshMart to stock a broader range of temperature-sensitive health products than their previous store configuration allowed.",
          "Twelve months post-installation, all systems are operating at specification. FreshMart has since engaged Acro Refrigeration on a quarterly maintenance contract across all four stores, with smart monitoring installed at the flagship site.",
        ],
      },
      {
        heading: "Key Outcomes",
        content: [
          "Delivered 2 weeks ahead of schedule. Four independent temperature zones from -25°C to +8°C. Full HACCP certification on first inspection. TGA cold chain validation for pharmaceutical storage. Ongoing quarterly maintenance contract across 4 sites.",
        ],
      },
    ],
    relatedSlugs: ["haccp-compliant-cold-rooms", "cold-room-insulation-guide", "reduce-refrigeration-energy-costs"],
  },
  {
    slug: "cold-room-insulation-guide",
    type: "Guide",
    icon: BookOpen,
    title: "Choosing the Right Insulation for Your Cold Room",
    desc: "A comparison of panel types, R-values, and cost implications for commercial applications.",
    metaDescription: "How to choose the right insulation for a commercial cold room. Compares polyurethane, polystyrene and PIR panels, explains R-values and thickness requirements for different temperature zones.",
    date: "Nov 2025",
    readTime: "7 min read",
    sections: [
      {
        heading: "Why Insulation Choice Matters",
        content: [
          "The insulation in your cold room panels is the single most important factor in determining long-term running costs, HACCP compliance and system reliability. Poor insulation means your refrigeration system works harder, consumes more energy, and is more likely to fail to maintain temperature under load.",
          "Yet insulation is often the first place corners are cut in cold room construction. Thinner panels and lower-grade materials reduce upfront cost but significantly increase total cost of ownership over the typical 15–20 year life of a cold room.",
        ],
      },
      {
        heading: "The Three Main Panel Types",
        content: [
          "Polyurethane (PU) foam panels are the industry standard for commercial cold rooms in Australia. PU foam has a thermal conductivity of approximately 0.022 W/mK and provides excellent structural rigidity. It is resistant to moisture absorption and maintains its insulating properties over decades. PU panels are suitable for all temperature ranges from coolrooms to deep freeze applications.",
          "Expanded Polystyrene (EPS) panels are lower cost but significantly less effective as an insulator — with a thermal conductivity of approximately 0.038 W/mK, you need nearly double the thickness to achieve the same R-value as PU. EPS is also more susceptible to moisture absorption over time, which degrades its insulating performance. It is not recommended for freezer applications.",
          "Polyisocyanurate (PIR) panels offer slightly better thermal performance than standard PU and are preferred for deep freeze and pharmaceutical applications where maximum insulation in minimum thickness is required. PIR panels typically cost 15–20% more than PU but deliver the best long-term energy performance.",
        ],
      },
      {
        heading: "Understanding R-Values and Thickness Requirements",
        content: [
          "R-value measures thermal resistance — the higher the R-value, the better the insulation. Australian Standard 4674 provides guidance on minimum insulation requirements for cold rooms, but in Queensland's climate, exceeding the minimum is strongly recommended.",
          "For coolrooms operating at 0–5°C, a minimum of 100mm PU panels (R-value approximately 4.5) is standard. For freezers operating at -18°C to -25°C, 150mm PU panels (R-value approximately 6.8) are recommended. For blast freezers and pharmaceutical applications, 200mm PIR panels provide optimal performance.",
          "Floor insulation is often overlooked. For freezers, inadequate floor insulation leads to frost heave — where moisture in the substrate freezes and expands, cracking the floor slab. A minimum of 100mm insulated floor panels with a vapour barrier is essential for any freezer application.",
        ],
      },
      {
        heading: "Panel Facings and Food Safety",
        content: [
          "The outer facing of cold room panels must be smooth, impervious and easy to clean. Food-grade stainless steel (Grade 304) is the premium option — it is resistant to corrosion, impact and cleaning chemicals, and is required in meat preparation and processing environments.",
          "Powder-coated aluminium or galvanised steel facings are suitable for most coolroom and freezer applications at lower cost. Avoid panels with embossed or textured finishes on interior surfaces — they harbour bacteria and are difficult to clean effectively.",
          "All panel joins should be sealed with food-grade sealant and coved at floor junctions to a height of 50mm minimum. This is a HACCP requirement and is checked during food safety audits.",
        ],
      },
      {
        heading: "Cost vs. Lifetime Value",
        content: [
          "A 200sqm coolroom built with standard 100mm PU panels might cost $8,000–$12,000 less than the same room built with 150mm PIR panels. However, the thinner panel room will typically cost $3,000–$6,000 more per year to run in energy costs — meaning the 'cheaper' option pays back its saving within 2–4 years and then costs more every year thereafter.",
          "When commissioning a new cold room, always ask your builder to provide a lifecycle cost comparison across panel options. Acro Refrigeration provides this analysis as part of our standard quoting process — including projected energy costs, maintenance requirements and expected system life for each specification.",
        ],
      },
    ],
    relatedSlugs: ["haccp-compliant-cold-rooms", "freshmart-cold-storage-case-study", "reduce-refrigeration-energy-costs"],
  },
  {
    slug: "cold-room-monthly-maintenance",
    type: "Video",
    icon: Video,
    title: "Cold Room Maintenance: What to Check Monthly",
    desc: "A walkthrough of essential monthly maintenance tasks to prevent costly breakdowns.",
    metaDescription: "Monthly cold room maintenance checklist for commercial operators. Covers door seals, condenser coils, temperature logs, drainage, lighting and evaporator fans — with tips to prevent costly breakdowns.",
    date: "Oct 2025",
    readTime: "4 min read",
    sections: [
      {
        heading: "Why Monthly Checks Matter",
        content: [
          "Most commercial refrigeration breakdowns don't happen without warning. They develop gradually — a slightly worn door seal, a condenser that's slowly blocking up, a drain that's starting to back up. Monthly visual checks catch these issues at the $200 maintenance stage rather than the $2,000 emergency repair stage.",
          "The following checklist is designed for operational staff — no technical knowledge required. Anything that looks wrong should be flagged to your refrigeration technician at the next scheduled service, or immediately if it appears to be affecting performance.",
        ],
      },
      {
        heading: "1. Door Seals and Hinges",
        content: [
          "Check: Close the door and run your hand around the perimeter of the seal. You should not feel any cold air escaping. Visually inspect the seal for cracks, tears, compression set (where the seal has flattened and lost its spring), or sections pulling away from the door.",
          "Also check: Door hinges for stiffness or misalignment. A door that doesn't hang squarely will never seal properly regardless of seal condition. Check that self-closing mechanisms are working — doors left ajar are a common cause of temperature excursions.",
        ],
      },
      {
        heading: "2. Condenser Coil (External Unit)",
        content: [
          "Check: Look at the condenser coil (the finned coil on the external condensing unit) for visible dust, grease or debris build-up. In kitchen environments this can accumulate rapidly. A blocked condenser is the most common cause of high-temperature alarms in summer.",
          "You can clean light dust with a soft brush or low-pressure air. Heavy grease build-up requires a technician with appropriate cleaning chemicals — attempting to pressure-wash a condenser coil without training can damage the fins. If the coil looks significantly blocked, schedule a cleaning visit.",
        ],
      },
      {
        heading: "3. Evaporator Fans Inside the Room",
        content: [
          "Check: Stand inside the cold room with the door closed for a moment and listen. All evaporator fans should be running. Unusual noises — grinding, rattling, squealing — indicate bearing wear that will progress to failure. A fan that has stopped running entirely will cause uneven temperature distribution and frost build-up.",
          "Also check: Ice build-up on the evaporator coil beyond the normal frost between defrosts. Excessive ice build-up suggests a defrost cycle fault or a refrigerant issue — flag this for your technician.",
        ],
      },
      {
        heading: "4. Temperature Logs",
        content: [
          "Check: Review the last 30 days of temperature records. For manual log sheets, look for any recorded excursions above your target temperature. For automated monitoring systems, check the dashboard for any alarm events or periods where temperature drifted above set point.",
          "A single excursion is often a door left open or a temporary load issue. Repeated excursions at the same time of day suggest a systematic problem — potentially undersized capacity for peak load, a failing component or a settings issue that needs investigation.",
        ],
      },
      {
        heading: "5. Drainage",
        content: [
          "Check: The floor drain inside the cold room should be clear and free-flowing. Pour a small amount of water into it — it should drain immediately. A slow or blocked drain will lead to water pooling on the floor, ice formation and a slip hazard.",
          "Also check the condensate drain tray on the evaporator coil. This should be clean and draining freely. A blocked condensate drain will overflow and drip water onto stock — a common and easily prevented problem.",
        ],
      },
      {
        heading: "6. Lighting and Door Switches",
        content: [
          "Check: Cold room lighting should extinguish when the door is closed. A faulty door switch that leaves the light on permanently adds unnecessary heat load inside the room. LED cold room lighting fixtures use less energy and generate less heat than fluorescent alternatives — worth considering if you have older fixtures.",
          "Also check: That all light fittings are intact with no broken or cracked covers. Broken light fittings inside a food storage area are a food safety issue that must be rectified immediately.",
        ],
      },
    ],
    relatedSlugs: ["reduce-refrigeration-energy-costs", "haccp-compliant-cold-rooms", "smart-monitoring-roi"],
  },
  {
    slug: "smart-monitoring-roi",
    type: "Article",
    icon: FileText,
    title: "Smart Monitoring Systems: ROI for Commercial Refrigeration",
    desc: "How IoT monitoring pays for itself within the first year of operation.",
    metaDescription: "How IoT temperature monitoring pays for itself within 12 months for commercial refrigeration. Covers stock loss prevention, energy savings, HACCP compliance and emergency response improvements.",
    date: "Sep 2025",
    readTime: "6 min read",
    sections: [
      {
        heading: "The Case for Continuous Monitoring",
        content: [
          "Most commercial food businesses still monitor refrigeration temperatures manually — a staff member checks a thermometer once or twice a day and records the reading on a log sheet. This approach has three fundamental weaknesses: it only captures a snapshot in time, it relies on staff remembering to check, and it provides no early warning of developing problems.",
          "IoT-enabled temperature monitoring systems address all three. Wireless sensors inside each cold room or display case transmit temperature data to a cloud dashboard every few minutes. If temperature rises above a set threshold, an alert is sent immediately to management via SMS or email — before stock is at risk and before a HACCP excursion becomes a food safety incident.",
        ],
      },
      {
        heading: "Quantifying the ROI: Stock Loss Prevention",
        content: [
          "The most immediate financial benefit of smart monitoring is preventing stock loss. A single overnight temperature excursion in a seafood coolroom can result in $5,000–$20,000 in spoiled product, depending on stock levels. An alert sent at 11pm allows a staff member to transfer stock or call an emergency technician — rather than discovering the problem at 7am when the damage is done.",
          "Our clients report that monitoring systems pay for themselves within the first prevented stock loss event. For businesses with high-value stock — fresh seafood, premium meat, pharmaceutical products — the business case is straightforward: a $3,000–$5,000 monitoring installation is cheap insurance against losses that can run to multiples of that cost from a single incident.",
        ],
      },
      {
        heading: "Energy Efficiency Through Data",
        content: [
          "Beyond emergency alerts, continuous monitoring data reveals patterns that are invisible to manual checks. A system that runs continuously from 2am–6am every night is showing a symptom — perhaps a blocked condenser coil causing extended recovery times, or a door being left open by cleaning staff. A system with unusually high variance around its set point may have a failing expansion valve.",
          "Our clients who deploy monitoring consistently identify and rectify efficiency issues 3–4 months earlier than those relying on manual checks. At typical Queensland electricity rates, an efficiency improvement of even 10% on a $15,000/year refrigeration electricity bill saves $1,500 annually — every year.",
        ],
      },
      {
        heading: "HACCP Compliance Made Simple",
        content: [
          "For businesses subject to food safety audits, IoT monitoring transforms HACCP documentation from a burdensome manual process to an automatic, defensible record. Every temperature reading is timestamped and stored in the cloud — typically for 2+ years — and can be exported as a report for any time period on demand.",
          "During an EHO inspection, you can instantly produce a 90-day temperature record for every cold room and display case in your business. Corrective actions are automatically logged when alarms are acknowledged. This level of documentation would take hours to compile manually — with monitoring, it takes seconds.",
        ],
      },
      {
        heading: "What Does a Monitoring System Cost?",
        content: [
          "A basic monitoring system for a single cold room — one wireless temperature sensor, cloud connectivity and mobile alerts — typically costs $800–$1,500 installed. For a business with 5–10 monitoring points (multiple cold rooms, display cases and a freezer), expect $3,000–$6,000 for a professionally installed system with a quality cloud platform.",
          "Ongoing costs vary by platform — some charge a monthly SaaS fee of $50–$150/month for the cloud dashboard and alerting, while others have no ongoing fees after installation. Over a 5-year period, total cost of ownership typically ranges from $5,000–$15,000 for a medium-sized food business.",
          "When weighed against a single prevented stock loss event ($5,000–$20,000) and the ongoing benefits of energy savings and compliance automation, the ROI for most businesses is measured in months, not years. Ask Acro Refrigeration about our monitoring installation service and platform recommendations.",
        ],
      },
    ],
    relatedSlugs: ["reduce-refrigeration-energy-costs", "cold-room-monthly-maintenance", "haccp-compliant-cold-rooms"],
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}
