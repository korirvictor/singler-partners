import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutImage from "@/assets/about-image.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="overflow-hidden">
            <img
              src={aboutImage}
              alt="Infrastructure development in Africa"
              className="w-full h-[500px] object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="accent-line mb-8" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground uppercase tracking-tight mb-8">
            About Singler Partners
          </h2>
          <div className="space-y-6 text-body font-body text-base leading-relaxed">
            <p>
              Singler Partners is a regional intermediary, consultancy, and brokerage firm dedicated to facilitating transformative projects across Central and Eastern Africa.
            </p>
            <p>
              With deep regional expertise and an extensive network of institutional relationships, we serve as the trusted bridge between international stakeholders and local opportunities—navigating complex regulatory landscapes with discretion and precision.
            </p>
            <p>
              Our approach is built on trust, strategic insight, and an unwavering commitment to delivering measurable outcomes for our clients and the communities we serve.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
            {[
              { number: "15+", label: "Years of Experience" },
              { number: "8", label: "Markets Served" },
              { number: "50+", label: "Projects Delivered" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-extrabold text-3xl text-primary">{stat.number}</div>
                <div className="text-body text-sm mt-1 font-body">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
