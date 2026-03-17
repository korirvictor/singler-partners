import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="hero-overlay absolute inset-0" />
        </>
      )}
      {!backgroundImage && <div className="absolute inset-0 bg-card" />}

      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <div className="accent-line mx-auto mb-8" />
          <h1 className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight tracking-tight uppercase">
            {title}
          </h1>
          {subtitle && (
            <p className="text-body mt-6 text-lg md:text-xl font-body max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
