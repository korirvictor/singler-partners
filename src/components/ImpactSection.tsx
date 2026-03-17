import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import impactEnergy from "@/assets/impact-energy.jpg";
import impactTrade from "@/assets/impact-trade.jpg";

const projects = [
  {
    image: impactEnergy,
    title: "Energy & Power",
    description: "Facilitating renewable energy projects that drive sustainable development across the region.",
    stats: "12 Projects",
  },
  {
    image: impactTrade,
    title: "Trade & Logistics",
    description: "Enabling cross-border trade infrastructure and logistics solutions for growing economies.",
    stats: "8 Markets",
  },
];

const ImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="accent-line mb-8" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground uppercase tracking-tight">
            Sectors & Impact
          </h2>
          <p className="text-body font-body mt-6 max-w-xl">
            Driving measurable outcomes across key sectors shaping the future of Central and Eastern Africa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-border">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group overflow-hidden bg-background"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-colors duration-500" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <span className="text-primary text-xs font-display uppercase tracking-widest">{project.stats}</span>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground uppercase mt-2">
                  {project.title}
                </h3>
                <p className="text-body font-body text-sm mt-3 max-w-md leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
