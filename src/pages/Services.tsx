import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TransitionLink from "@/components/TransitionLink";
import { ShieldCheck, Search, BarChart3, Fingerprint, Eye } from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Cybersecurity & Digital Protection",
    description: "We design resilient cybersecurity frameworks to defend against evolving digital threats and protect critical systems.",
    details: [
      "Threat assessment and vulnerability analysis",
      "Security architecture design",
      "Incident response planning",
      "Digital infrastructure protection",
    ],
  },
  {
    icon: Search,
    title: "Corporate Investigations",
    description: "We conduct detailed investigations into fraud, misconduct, and operational risks—delivering clear, actionable findings.",
    details: [
      "Fraud detection and analysis",
      "Misconduct investigations",
      "Operational risk assessment",
      "Evidence gathering and reporting",
    ],
  },
  {
    icon: BarChart3,
    title: "Risk Advisory & Intelligence",
    description: "We provide predictive intelligence and strategic insights that enable organizations to anticipate and mitigate risks effectively.",
    details: [
      "Predictive threat intelligence",
      "Strategic risk assessment",
      "Market and political risk analysis",
      "Due diligence and background screening",
    ],
  },
  {
    icon: Fingerprint,
    title: "Brand Protection & Anti-Counterfeiting",
    description: "We help organizations detect, prevent, and respond to counterfeit threats, safeguarding brand integrity and intellectual property globally.",
    details: [
      "Counterfeit detection and monitoring",
      "Intellectual property protection",
      "Supply chain integrity assessment",
      "Enforcement support and coordination",
    ],
  },
  {
    icon: Eye,
    title: "Surveillance & Intelligence Gathering",
    description: "We deploy discreet surveillance strategies to uncover critical insights while maintaining operational confidentiality.",
    details: [
      "Covert surveillance operations",
      "Open-source intelligence (OSINT)",
      "Asset tracing and tracking",
      "Operational security management",
    ],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Layout>
      <PageHero
        title="Our Services"
        subtitle="Advanced intelligence, cybersecurity, and investigative solutions tailored to complex environments."
      />

      <section className="section-padding" ref={ref}>
        <div className="max-w-7xl mx-auto space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start hairline-border p-10 md:p-16 -mt-[1px]"
            >
              <div>
                <service.icon className="w-10 h-10 text-primary mb-6" strokeWidth={1.5} />
                <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground uppercase tracking-tight mb-6">
                  {service.title}
                </h2>
                <p className="text-body font-body text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div>
                <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-primary mb-6">What We Deliver</h4>
                <ul className="space-y-4">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                      <span className="text-body font-body text-sm leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <div className="accent-line mx-auto mb-8" />
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground uppercase tracking-tight mb-6">
            Need a Tailored Solution?
          </h2>
          <p className="text-body font-body text-lg leading-relaxed mb-10">
            Every engagement is unique. Let's discuss how we can support your specific security and intelligence objectives.
          </p>
          <TransitionLink to="/contact" className="inline-block border border-primary bg-primary px-10 py-4 text-sm font-display font-semibold uppercase tracking-widest text-primary-foreground hover:bg-transparent hover:text-primary transition-all duration-500">
            Start a Conversation
          </TransitionLink>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
