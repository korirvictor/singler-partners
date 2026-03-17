const Footer = () => {
  return (
    <footer id="contact" className="px-6 md:px-12 lg:px-24 py-16 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <div className="font-display font-extrabold text-lg tracking-tight text-foreground mb-4">
              SINGLER <span className="text-primary">PARTNERS</span>
            </div>
            <p className="text-body font-body text-sm leading-relaxed max-w-xs">
              Regional intermediary, consultancy, and brokerage firm enabling projects across Central & Eastern Africa.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-foreground mb-4">Navigation</h4>
            <div className="flex flex-col gap-3">
              {["About", "Services", "Impact", "Markets", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-body font-body text-sm hover:text-primary transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-body font-body text-sm">
              <span>info@singlerpartners.com</span>
              <span>Kigali, Rwanda</span>
              <span>Kinshasa, DRC</span>
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
