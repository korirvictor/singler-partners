import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Handshake, TrendingUp, Shield, Globe, Building2, FileText } from "lucide-react";

const services = [
  {
    icon: Handshake,
    title: "Intermediary Services",
    description: "Connecting international organisations with regional partners through compliant, transparent brokerage solutions.",
  },
  {
    icon: TrendingUp,
    title: "Strategic Advisory",
    description: "Providing market intelligence, feasibility assessments, and strategic counsel for complex regional engagements.",
  },
  {
    icon: Shield,
    title: "Risk & Compliance",
    description: "Navigating regulatory frameworks, due diligence processes, and compliance requirements across multiple jurisdictions.",
  },
  {
    icon: Globe,
    title: "Market Entry",
    description: "Guiding stakeholders through the intricacies of establishing operations in Central and Eastern African markets.",
  },
  {
    icon: Building2,
    title: "Infrastructure Advisory",
    description: "Supporting large-scale infrastructure projects from inception through financing, procurement, and delivery.",
  },
  {
    icon: FileText,
    title: "Government Relations",
    description: "Facilitating productive dialogue between private sector entities and government institutions at all levels.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="accent-line mx-auto mb-8" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground uppercase tracking-tight">
            Our Services
          </h2>
          <p className="text-body font-body mt-6 max-w-xl mx-auto">
            Comprehensive advisory and intermediary solutions tailored to the unique challenges of the region.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="hairline-border p-10 group hover:bg-secondary/50 transition-all duration-500 -mt-[1px] -ml-[1px]"
            >
              <service.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
              <h3 className="font-display font-bold text-lg text-foreground uppercase tracking-tight mb-4">
                {service.title}
              </h3>
              <p className="text-body font-body text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
