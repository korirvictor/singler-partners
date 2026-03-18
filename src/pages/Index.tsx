import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import aboutImage from "@/assets/about-image.jpg";
import impactEnergy from "@/assets/impact-energy.jpg";
import impactTrade from "@/assets/impact-trade.jpg";
import { ShieldCheck, Search, BarChart3, Fingerprint } from "lucide-react";

const servicePreview = [
  { icon: ShieldCheck, title: "Cybersecurity & Digital Protection", description: "Defending against evolving digital threats and protecting critical systems." },
  { icon: Search, title: "Corporate Investigations", description: "Detailed investigations into fraud, misconduct, and operational risks." },
  { icon: BarChart3, title: "Risk Advisory", description: "Predictive intelligence and strategic insights to anticipate and mitigate risks." },
  { icon: Fingerprint, title: "Brand Protection & Anti-Counterfeiting", description: "Detecting and preventing counterfeit threats to safeguard brand integrity." },
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
          <img src={aboutImage} alt="Intelligence and security operations in Africa" className="w-full h-[500px] object-cover" loading="lazy" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="accent-line mb-8" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground uppercase tracking-tight mb-8">
            Who We Are
          </h2>
          <p className="text-body font-body text-base leading-relaxed mb-6">
            Singler Partners is a trusted advisory firm specializing in intelligence, cybersecurity, and risk management solutions. We support organizations navigating high-risk and dynamic markets by providing actionable insights and strategic guidance.
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
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground uppercase tracking-tight">Our Expertise</h2>
          <p className="text-body font-body mt-6 max-w-2xl mx-auto">
            Our integrated approach combines advanced technology, investigative expertise, and regional knowledge to safeguard your operations, reputation, and assets.
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

const CTAHome = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center">
        <div className="accent-line mx-auto mb-8" />
        <h2 className="font-display font-extrabold text-3xl md:text-5xl text-foreground uppercase tracking-tight leading-tight">Secure Your Operations</h2>
        <p className="text-body font-body mt-6 text-lg max-w-xl mx-auto leading-relaxed">
          Secure your operations with intelligence-driven strategies and expert advisory.
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
      <CTAHome />
    </Layout>
  );
};

export default Index;
