import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <div className="accent-line mx-auto mb-8" />
          <h1 className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight tracking-tight uppercase">
            Strategic Advisory for Central & Eastern Africa
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="text-body mt-6 text-lg md:text-xl font-body max-w-2xl mx-auto leading-relaxed"
        >
          Enabling high-impact projects through intermediary solutions, consultancy, and brokerage across the region's most dynamic markets.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="mt-10"
        >
          <Link
            to="/services"
            className="inline-block border border-primary px-10 py-4 text-sm font-display font-semibold uppercase tracking-widest text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            Our Services
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-12 bg-primary/50 animate-pulse" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
