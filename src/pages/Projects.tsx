import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TransitionLink from "@/components/TransitionLink";
import impactEnergy from "@/assets/impact-energy.jpg";
import impactTrade from "@/assets/impact-trade.jpg";
import aboutImage from "@/assets/about-image.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const sectors = [
  {
    image: impactEnergy,
    title: "Cybersecurity Operations",
    stats: "Multiple Engagements",
    description: "Designing and implementing resilient cybersecurity frameworks for organizations across Africa, protecting critical digital infrastructure.",
  },
  {
    image: impactTrade,
    title: "Corporate Investigations",
    stats: "Cross-Industry",
    description: "Conducting detailed investigations into fraud, misconduct, and operational risks—delivering clear findings that drive decisive action.",
  },
  {
    image: aboutImage,
    title: "Brand Protection",
    stats: "Global Reach",
    description: "Helping organizations detect, prevent, and respond to counterfeit threats, safeguarding brand integrity and intellectual property.",
  },
  {
    image: heroBg,
    title: "Risk Intelligence",
    stats: "Multi-Market",
    description: "Providing predictive intelligence and strategic insights that enable organizations to anticipate and mitigate risks across African markets.",
  },
];

const capabilities = [
  "Threat Assessment & Analysis",
  "Digital Forensics",
  "Surveillance Operations",
  "Due Diligence & Screening",
  "Incident Response",
  "Strategic Advisory",
];

const Projects = () => {
  const sectorsRef = useRef(null);
  const sectorsInView = useInView(sectorsRef, { once: true, margin: "-100px" });
  const capRef = useRef(null);
  const capInView = useInView(capRef, { once: true, margin: "-100px" });

  return (
    <Layout>
      <PageHero
        title="Experience & Impact"
        subtitle="We partner with organizations across industries to deliver intelligence-led solutions that enhance security, reduce risk, and support strategic growth."
        backgroundImage={impactEnergy}
      />

      <section className="section-padding" ref={sectorsRef}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={sectorsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="mb-20">
            <div className="accent-line mb-8" />
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground uppercase tracking-tight">Areas of Impact</h2>
            <p className="text-body font-body mt-6 max-w-xl">Our experience spans multiple African markets, enabling us to provide localized insights with global relevance.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-border">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 30 }}
                animate={sectorsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="relative group overflow-hidden bg-background"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={sector.image} alt={sector.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-colors duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <span className="text-primary text-xs font-display uppercase tracking-widest">{sector.stats}</span>
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground uppercase mt-2">{sector.title}</h3>
                  <p className="text-body font-body text-sm mt-3 max-w-md leading-relaxed">{sector.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-card" ref={capRef}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={capInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
            <div className="accent-line mb-8" />
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground uppercase tracking-tight mb-6">Our Capabilities</h2>
            <p className="text-body font-body text-base leading-relaxed">
              Across every engagement, we bring a disciplined approach—ensuring rigorous analysis, operational precision, and measurable impact.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={capInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((cap) => (
                <div key={cap} className="hairline-border p-6 hover:bg-secondary/50 transition-all duration-500">
                  <span className="text-foreground font-display text-sm uppercase tracking-wide">{cap}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <div className="accent-line mx-auto mb-8" />
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground uppercase tracking-tight mb-6">Discuss Your Needs</h2>
          <p className="text-body font-body text-lg leading-relaxed mb-10">We welcome the opportunity to explore how our expertise can support your security and intelligence objectives.</p>
          <Link to="/contact" className="inline-block border border-primary bg-primary px-10 py-4 text-sm font-display font-semibold uppercase tracking-widest text-primary-foreground hover:bg-transparent hover:text-primary transition-all duration-500">
            Get in Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
