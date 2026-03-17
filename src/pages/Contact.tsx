import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", company: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your enquiry. We will be in touch shortly.");
    setFormData({ name: "", email: "", company: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <PageHero
        title="Contact"
        subtitle="We welcome the opportunity to discuss how Singler Partners can support your objectives."
      />

      <section className="section-padding" ref={formRef}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="accent-line mb-8" />
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground uppercase tracking-tight mb-8">Get in Touch</h2>
            <p className="text-body font-body text-base leading-relaxed mb-12">
              Whether you're exploring new markets, evaluating partnerships, or seeking strategic advisory for the region, our team is ready to assist.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-foreground mb-1">Email</h4>
                  <span className="text-body font-body text-sm">info@singlerpartners.com</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-foreground mb-1">Offices</h4>
                  <div className="text-body font-body text-sm space-y-1">
                    <p>Kigali, Rwanda (HQ)</p>
                    <p>Kinshasa, DRC</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-foreground mb-1">Phone</h4>
                  <span className="text-body font-body text-sm">+250 XXX XXX XXX</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-display text-xs uppercase tracking-widest text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-display text-xs uppercase tracking-widest text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-display text-xs uppercase tracking-widest text-foreground mb-2">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-transparent border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="block font-display text-xs uppercase tracking-widest text-foreground mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-transparent border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="Enquiry subject"
                  />
                </div>
              </div>
              <div>
                <label className="block font-display text-xs uppercase tracking-widest text-foreground mb-2">Message</label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                  placeholder="Tell us about your enquiry..."
                />
              </div>
              <button
                type="submit"
                className="w-full border border-primary bg-primary px-10 py-4 text-sm font-display font-semibold uppercase tracking-widest text-primary-foreground hover:bg-transparent hover:text-primary transition-all duration-500"
              >
                Send Enquiry
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
