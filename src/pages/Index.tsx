import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import aboutImage from "@/assets/about-image.jpg";
import impactEnergy from "@/assets/impact-energy.jpg";
import impactTrade from "@/assets/impact-trade.jpg";
import { Handshake, TrendingUp, Shield, Globe } from "lucide-react";

const servicePreview = [
  { icon: Handshake, title: "Intermediary Services", description: "Connecting international organisations with regional partners." },
  { icon: TrendingUp, title: "Strategic Advisory", description: "Market intelligence and feasibility assessments." },
  { icon: Shield, title: "Risk & Compliance", description: "Navigating regulatory frameworks across jurisdictions." },
  { icon: Globe, title: "Market Entry", description: "Establishing operations in Central and Eastern Africa." },
];

const AboutPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <img src={aboutImage} alt="Infrastructure development in Africa" className="w-full h-[500px] object-cover" loading="lazy" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="accent-line mb-8" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground uppercase tracking-tight mb-8">
            About Singler Partners
          </h2>
          <p className="text-body font-body text-base leading-relaxed mb-6">
            Singler Partners is a regional intermediary, consultancy, and brokerage firm dedicated to facilitating transformative projects across Central and Eastern Africa.
          </p>
          <p className="text-body font-body text-base leading-relaxed mb-10">
            With deep regional expertise and an extensive network, we serve as the trusted bridge between international stakeholders and local opportunities.
          </p>
          <Link
            to="/about"
            className="inline-block border border-primary px-8 py-3 text-sm font-display font-semibold uppercase tracking-widest text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const ServicesPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="accent-line mx-auto mb-8" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground uppercase tracking-tight">Our Services</h2>
          <p className="text-body font-body mt-6 max-w-xl mx-auto">
            Comprehensive advisory and intermediary solutions tailored to the region.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {servicePreview.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="hairline-border p-10 group hover:bg-secondary/50 transition-all duration-500 -mt-[1px] -ml-[1px]"
            >
              <service.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
              <h3 className="font-display font-bold text-lg text-foreground uppercase tracking-tight mb-4">{service.title}</h3>
              <p className="text-body font-body text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-block border border-primary px-8 py-3 text-sm font-display font-semibold uppercase tracking-widest text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const ImpactPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="mb-20">
          <div className="accent-line mb-8" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground uppercase tracking-tight">Sectors & Impact</h2>
          <p className="text-body font-body mt-6 max-w-xl">Driving measurable outcomes across key sectors shaping the future of Central and Eastern Africa.</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-border">
          {[
            { image: impactEnergy, title: "Energy & Power", stats: "12 Projects", description: "Facilitating renewable energy projects that drive sustainable development." },
            { image: impactTrade, title: "Trade & Logistics", stats: "8 Markets", description: "Enabling cross-border trade infrastructure and logistics solutions." },
          ].map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group overflow-hidden bg-background"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-colors duration-500" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <span className="text-primary text-xs font-display uppercase tracking-widest">{project.stats}</span>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground uppercase mt-2">{project.title}</h3>
                <p className="text-body font-body text-sm mt-3 max-w-md leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-block border border-primary px-8 py-3 text-sm font-display font-semibold uppercase tracking-widest text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

const CTAHome = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center">
        <div className="accent-line mx-auto mb-8" />
        <h2 className="font-display font-extrabold text-3xl md:text-5xl text-foreground uppercase tracking-tight leading-tight">Let's Build the Future Together</h2>
        <p className="text-body font-body mt-6 text-lg max-w-xl mx-auto leading-relaxed">
          Whether you're exploring new markets or seeking a trusted regional partner, we're ready to help you navigate the path forward.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="inline-block border border-primary bg-primary px-10 py-4 text-sm font-display font-semibold uppercase tracking-widest text-primary-foreground hover:bg-transparent hover:text-primary transition-all duration-500">
            Get in Touch
          </Link>
          <Link to="/services" className="inline-block border border-border px-10 py-4 text-sm font-display font-semibold uppercase tracking-widest text-foreground hover:border-primary hover:text-primary transition-all duration-500">
            Explore Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <ImpactPreview />
      <CTAHome />
    </Layout>
  );
};

export default Index;
