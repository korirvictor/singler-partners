import { useLocation } from "react-router-dom";
import TransitionLink from "./TransitionLink";

const Footer = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-16 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <TransitionLink to="/" className="font-display font-extrabold text-lg tracking-tight text-foreground mb-4 block">
              SINGLER <span className="text-primary">PARTNERS</span>
            </TransitionLink>
            <p className="text-body font-body text-sm leading-relaxed max-w-xs">
              Strategic intelligence, cybersecurity, and risk advisory solutions across Africa.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-foreground mb-4">Navigation</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Experience", href: "/projects" },
                { label: "Regions", href: "/regions" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <TransitionLink
                  key={link.label}
                  to={link.href}
                  className="text-body font-body text-sm hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </TransitionLink>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-body font-body text-sm">
              <span>info@singlerpartners.com</span>
              <span>+254 722 388 151</span>
              <span>Applewood Towers, Nairobi, Kenya</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-body font-body text-xs">
            © {new Date().getFullYear()} Singler Partners. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-body text-xs hover:text-primary transition-colors duration-300 font-body">Privacy Policy</a>
            <a href="#" className="text-body text-xs hover:text-primary transition-colors duration-300 font-body">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
