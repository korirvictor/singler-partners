import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TransitionLink from "@/components/TransitionLink";

const regions = [
  {
    name: "Nairobi, Kenya",
    abbr: "NBO",
    description: "Our head office and primary operations hub, serving as the centre for intelligence coordination across East Africa.",
    highlights: ["Head Office", "Intelligence Hub", "Regional Coordination"],
  },
  {
    name: "Kampala, Uganda",
    abbr: "KLA",
    description: "A key operational base supporting cybersecurity and investigative operations across the Great Lakes region.",
    highlights: ["Cybersecurity", "Investigations", "Risk Advisory"],
  },
  {
    name: "Dar es Salaam, Tanzania",
    abbr: "DAR",
    description: "Strategic presence supporting brand protection and anti-counterfeiting operations in East Africa's largest market.",
    highlights: ["Brand Protection", "Anti-Counterfeiting", "Market Intelligence"],
  },
  {
    name: "Lagos, Nigeria",
    abbr: "LOS",
    description: "West Africa's commercial capital, enabling cross-regional intelligence and corporate investigation services.",
    highlights: ["Corporate Investigations", "Digital Protection", "West Africa Gateway"],
  },
  {
    name: "Accra, Ghana",
    abbr: "ACC",
    description: "Supporting clients with on-the-ground expertise across West Africa's growing markets.",
    highlights: ["Risk Advisory", "Intelligence Gathering", "Regional Support"],
  },
];

const Regions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Layout>
      <PageHero
        title="Our Presence"
        subtitle="Singler Partners operates across key African markets, supporting clients with on-the-ground expertise and regional intelligence."
      />

      <section className="section-padding" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {regions.map((region, index) => (
              <motion.div
                key={region.abbr}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="hairline-border p-10 md:p-12 group hover:bg-secondary/50 transition-all duration-500 -mt-[1px] -ml-[1px]"
              >
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-display font-extrabold text-3xl text-primary">{region.abbr}</span>
                  <span className="font-display font-semibold text-lg text-foreground uppercase tracking-tight">{region.name}</span>
                </div>
                <p className="text-body font-body text-sm leading-relaxed mb-6">{region.description}</p>
                <div className="flex flex-wrap gap-2">
                  {region.highlights.map((h) => (
                    <span key={h} className="text-xs font-display uppercase tracking-widest text-primary border border-primary/30 px-3 py-1">
                      {h}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <div className="accent-line mx-auto mb-8" />
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground uppercase tracking-tight mb-6">Expanding Reach</h2>
          <p className="text-body font-body text-lg leading-relaxed mb-10">
            Our regional footprint is growing. Let's explore how we can support your operations across Africa.
          </p>
          <TransitionLink to="/contact" className="inline-block border border-primary bg-primary px-10 py-4 text-sm font-display font-semibold uppercase tracking-widest text-primary-foreground hover:bg-transparent hover:text-primary transition-all duration-500">
            Contact Us
          </TransitionLink>
        </div>
      </section>
    </Layout>
  );
};

export default Regions;
