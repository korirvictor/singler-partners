import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const markets = [
  { name: "Democratic Republic of Congo", abbr: "DRC" },
  { name: "Rwanda", abbr: "RWA" },
  { name: "Burundi", abbr: "BDI" },
  { name: "Uganda", abbr: "UGA" },
  { name: "Kenya", abbr: "KEN" },
  { name: "Tanzania", abbr: "TZA" },
  { name: "Republic of Congo", abbr: "COG" },
  { name: "Central African Republic", abbr: "CAF" },
];

const MarketsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="markets" className="section-padding bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="accent-line mx-auto mb-8" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground uppercase tracking-tight">
            Our Markets
          </h2>
          <p className="text-body font-body mt-6 max-w-2xl mx-auto">
            Deep operational knowledge across Central and Eastern Africa's most strategic and dynamic economies.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4">
          {markets.map((market, index) => (
            <motion.div
              key={market.abbr}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="hairline-border p-8 text-center group hover:bg-secondary/50 transition-all duration-500 -mt-[1px] -ml-[1px]"
            >
              <div className="font-display font-extrabold text-2xl text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                {market.abbr}
              </div>
              <div className="text-body font-body text-sm">{market.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketsSection;
