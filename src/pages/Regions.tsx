import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const regions = [
  {
    name: "Democratic Republic of Congo",
    abbr: "DRC",
    description: "Our deepest market presence. We maintain strong relationships with government and private sector across mining, energy, and infrastructure.",
    highlights: ["Kinshasa Office", "Mining & Energy", "Infrastructure Development"],
  },
  {
    name: "Rwanda",
    abbr: "RWA",
    description: "A hub for innovation and governance excellence. Our Kigali base serves as headquarters for regional coordination.",
    highlights: ["Kigali HQ", "Technology & Finance", "East Africa Gateway"],
  },
  {
    name: "Uganda",
    abbr: "UGA",
    description: "A rapidly growing market with significant opportunities in energy, agriculture, and cross-border trade.",
    highlights: ["Energy Sector", "Agricultural Trade", "Oil & Gas"],
  },
  {
    name: "Kenya",
    abbr: "KEN",
    description: "East Africa's largest economy and financial centre, key to regional connectivity and investment flows.",
    highlights: ["Financial Hub", "Logistics", "Private Equity"],
  },
  {
    name: "Burundi",
    abbr: "BDI",
    description: "An emerging frontier market with growing opportunities in mining and agricultural development.",
    highlights: ["Mining", "Agriculture", "Development Finance"],
  },
  {
    name: "Tanzania",
    abbr: "TZA",
    description: "Rich natural resources and strategic Indian Ocean access make Tanzania a critical corridor market.",
    highlights: ["Natural Resources", "Port Infrastructure", "Tourism"],
  },
  {
    name: "Republic of Congo",
    abbr: "COG",
    description: "Oil-rich economy with diversification potential across forestry, agriculture, and infrastructure.",
    highlights: ["Oil & Gas", "Diversification", "Infrastructure"],
  },
  {
    name: "Central African Republic",
    abbr: "CAF",
    description: "A market requiring nuanced engagement, with opportunities in mining, agriculture, and post-conflict development.",
    highlights: ["Mining", "Development", "Humanitarian Sector"],
  },
];

const Regions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Layout>
      <PageHero
        title="Regions & Markets"
        subtitle="Deep operational knowledge across Central and Eastern Africa's most strategic and dynamic economies."
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
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground uppercase tracking-tight mb-6">Expanding Horizons</h2>
          <p className="text-body font-body text-lg leading-relaxed mb-10">
            Our regional footprint is growing. Let's explore opportunities together.
          </p>
          <Link to="/contact" className="inline-block border border-primary bg-primary px-10 py-4 text-sm font-display font-semibold uppercase tracking-widest text-primary-foreground hover:bg-transparent hover:text-primary transition-all duration-500">
            Contact Us
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Regions;
