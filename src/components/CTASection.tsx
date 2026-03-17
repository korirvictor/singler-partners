import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="accent-line mx-auto mb-8" />
        <h2 className="font-display font-extrabold text-3xl md:text-5xl text-foreground uppercase tracking-tight leading-tight">
          Let's Build the Future Together
        </h2>
        <p className="text-body font-body mt-6 text-lg max-w-xl mx-auto leading-relaxed">
          Whether you're exploring new markets or seeking a trusted regional partner, we're ready to help you navigate the path forward.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-block border border-primary bg-primary px-10 py-4 text-sm font-display font-semibold uppercase tracking-widest text-primary-foreground hover:bg-transparent hover:text-primary transition-all duration-500"
          >
            Get in Touch
          </a>
          <a
            href="#services"
            className="inline-block border border-border px-10 py-4 text-sm font-display font-semibold uppercase tracking-widest text-foreground hover:border-primary hover:text-primary transition-all duration-500"
          >
            Explore Services
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
