import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutImage from "@/assets/about-image.jpg";
import { Link } from "react-router-dom";

const values = [
  { title: "Trust", description: "We build enduring relationships rooted in transparency, integrity, and mutual respect." },
  { title: "Excellence", description: "We pursue the highest standards in every engagement, delivering outcomes that exceed expectations." },
  { title: "Discretion", description: "We operate with the utmost confidentiality, safeguarding our clients' interests at every stage." },
  { title: "Impact", description: "We measure success by the tangible, positive change our work creates for communities and economies." },
];

const About = () => {
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const missionRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });

  return (
    <Layout>
      <PageHero
        title="About Us"
        subtitle="A trusted partner enabling transformative projects across Central and Eastern Africa."
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
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground uppercase tracking-tight mb-8">Our Story</h2>
            <div className="space-y-6 text-body font-body text-base leading-relaxed">
              <p>
                Singler Partners was founded with a singular vision: to serve as the indispensable bridge between international ambition and African opportunity. With roots in Kigali and Kinshasa, we bring unmatched regional presence and institutional insight.
              </p>
              <p>
                Over more than fifteen years, we have cultivated relationships across government, private sector, and multilateral institutions—earning a reputation for discretion, reliability, and results.
              </p>
              <p>
                Today, we continue to expand our reach and deepen our expertise, guided by the conviction that Central and Eastern Africa's potential is limitless when paired with the right partnerships.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-8 mt-4">
              {[
                { number: "15+", label: "Years of Experience" },
                { number: "8", label: "Markets Served" },
                { number: "50+", label: "Projects Delivered" },
                { number: "100+", label: "Institutional Partners" },
              ].map((stat, i) => (
                <div key={stat.label} className="hairline-border p-8 text-center">
                  <div className="font-display font-extrabold text-4xl text-primary mb-2">{stat.number}</div>
                  <div className="text-body text-sm font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-card" ref={missionRef}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="accent-line mb-8" />
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground uppercase tracking-tight mb-6">Our Mission</h2>
            <p className="text-body font-body text-base leading-relaxed">
              To facilitate high-impact projects and partnerships that drive sustainable economic growth across Central and Eastern Africa, serving as the region's most trusted intermediary for international stakeholders.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="accent-line mb-8" />
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground uppercase tracking-tight mb-6">Our Vision</h2>
            <p className="text-body font-body text-base leading-relaxed">
              To be the foremost regional partner of choice for entities seeking to engage with Central and Eastern Africa—recognised for our integrity, strategic depth, and transformative impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" ref={valuesRef}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="accent-line mx-auto mb-8" />
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground uppercase tracking-tight">Our Values</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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
      <section className="section-padding bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <div className="accent-line mx-auto mb-8" />
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground uppercase tracking-tight mb-6">Work With Us</h2>
          <p className="text-body font-body text-lg leading-relaxed mb-10">
            Discover how Singler Partners can support your next strategic initiative in the region.
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
