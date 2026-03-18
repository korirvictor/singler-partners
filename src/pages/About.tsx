import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutImage from "@/assets/about-image.jpg";
import TransitionLink from "@/components/TransitionLink";

const values = [
  { title: "Discretion", description: "We handle sensitive information with strict confidentiality and professionalism." },
  { title: "Integrity", description: "We uphold the highest ethical and legal standards in all operations." },
  { title: "Expertise", description: "We combine technical knowledge with regional insight to deliver reliable intelligence." },
];

const About = () => {
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  return (
    <Layout>
      <PageHero
        title="About Singler Partners"
        subtitle="Specialized advisory services focused on intelligence, cybersecurity, and risk mitigation."
        backgroundImage={aboutImage}
      />

      {/* Story Section */}
      <section className="section-padding" ref={storyRef}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="accent-line mb-8" />
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground uppercase tracking-tight mb-8">Who We Are</h2>
            <div className="space-y-6 text-body font-body text-base leading-relaxed">
              <p>
                Singler Partners provides specialized advisory services focused on intelligence, cybersecurity, and risk mitigation.
              </p>
              <p>
                Our work is rooted in deep regional expertise and supported by advanced tools, enabling us to deliver precise, actionable insights. From protecting digital infrastructure to conducting sensitive investigations, we help organizations make informed and secure decisions.
              </p>
              <p>
                We operate with discretion, professionalism, and a commitment to safeguarding our clients' interests in every engagement.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={aboutImage} alt="Singler Partners team" className="w-full h-[500px] object-cover" loading="lazy" />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card" ref={valuesRef}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="accent-line mx-auto mb-8" />
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground uppercase tracking-tight">Core Values</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="hairline-border p-10 group hover:bg-secondary/50 transition-all duration-500 -mt-[1px] -ml-[1px]"
              >
                <h3 className="font-display font-bold text-xl text-primary uppercase tracking-tight mb-4">{value.title}</h3>
                <p className="text-body font-body text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <div className="accent-line mx-auto mb-8" />
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground uppercase tracking-tight mb-6">Work With Us</h2>
          <p className="text-body font-body text-lg leading-relaxed mb-10">
            Discover how Singler Partners can support your organization with intelligence-driven solutions.
          </p>
          <Link to="/contact" className="inline-block border border-primary bg-primary px-10 py-4 text-sm font-display font-semibold uppercase tracking-widest text-primary-foreground hover:bg-transparent hover:text-primary transition-all duration-500">
            Get in Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
