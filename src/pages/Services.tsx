import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Handshake, TrendingUp, Shield, Globe, Building2, FileText } from "lucide-react";

const services = [
  {
    icon: Handshake,
    title: "Intermediary Services",
    description: "Connecting international organisations with regional partners through compliant, transparent brokerage solutions.",
    details: [
      "Deal structuring and negotiation support",
      "Stakeholder identification and introductions",
      "Cross-border transaction facilitation",
      "Partnership development and management",
    ],
  },
  {
    icon: TrendingUp,
    title: "Strategic Advisory",
    description: "Providing market intelligence, feasibility assessments, and strategic counsel for complex regional engagements.",
    details: [
      "Market entry strategy development",
      "Competitive landscape analysis",
      "Investment feasibility studies",
      "Strategic planning and execution support",
    ],
  },
  {
    icon: Shield,
    title: "Risk & Compliance",
    description: "Navigating regulatory frameworks, due diligence processes, and compliance requirements across multiple jurisdictions.",
    details: [
      "Regulatory landscape mapping",
      "Due diligence and background checks",
      "Compliance framework development",
      "Risk assessment and mitigation strategies",
    ],
  },
  {
    icon: Globe,
    title: "Market Entry",
    description: "Guiding stakeholders through the intricacies of establishing operations in Central and Eastern African markets.",
    details: [
      "Market viability assessments",
      "Local entity establishment support",
      "Licensing and permits guidance",
      "Cultural and business practice advisory",
    ],
  },
  {
    icon: Building2,
    title: "Infrastructure Advisory",
    description: "Supporting large-scale infrastructure projects from inception through financing, procurement, and delivery.",
    details: [
      "Project scoping and feasibility",
      "Financing structure advisory",
      "Procurement process management",
      "Stakeholder coordination",
    ],
  },
  {
    icon: FileText,
    title: "Government Relations",
    description: "Facilitating productive dialogue between private sector entities and government institutions at all levels.",
    details: [
      "Policy landscape navigation",
      "Government stakeholder engagement",
      "Public-private partnership facilitation",
      "Institutional relationship management",
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
        subtitle="Comprehensive advisory and intermediary solutions tailored to the unique challenges of Central and Eastern Africa."
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
            Every engagement is unique. Let's discuss how we can support your specific objectives.
          </p>
          <Link to="/contact" className="inline-block border border-primary bg-primary px-10 py-4 text-sm font-display font-semibold uppercase tracking-widest text-primary-foreground hover:bg-transparent hover:text-primary transition-all duration-500">
            Start a Conversation
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
