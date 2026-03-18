import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import TransitionLink from "./TransitionLink";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/projects" },
  { label: "Regions", href: "/regions" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-6 flex items-center justify-between bg-background/80 backdrop-blur-md border-b border-border/50">
      <TransitionLink to="/" className="font-display font-extrabold text-xl tracking-tight text-foreground">
        SINGLER <span className="text-primary">PARTNERS</span>
      </TransitionLink>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <TransitionLink
            key={link.label}
            to={link.href}
            className={`font-body text-sm tracking-wide uppercase transition-colors duration-300 ${
              location.pathname === link.href
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            {link.label}
          </TransitionLink>
        ))}
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-foreground"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-border px-6 py-8 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <TransitionLink
                key={link.label}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-body text-lg uppercase tracking-wide transition-colors ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </TransitionLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
