import { createContext, useContext, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface TransitionContextType {
  navigateWithTransition: (to: string) => void;
}

const TransitionContext = createContext<TransitionContextType>({
  navigateWithTransition: () => {},
});

export const usePageTransition = () => useContext(TransitionContext);

const curtainVariants = {
  initial: {
    scaleY: 0,
  },
  enter: {
    scaleY: 1,
    transition: {
      duration: 0.4,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      duration: 0.4,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      delay: 0.1,
    },
  },
};

export const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateWithTransition = useCallback(
    (to: string) => {
      if (isTransitioning) return;
      setIsTransitioning(true);

      // After curtain covers screen, navigate
      setTimeout(() => {
        navigate(to);
        window.scrollTo({ top: 0, behavior: "instant" });

        // After a brief hold, reveal
        setTimeout(() => {
          setIsTransitioning(false);
        }, 100);
      }, 450);
    },
    [navigate, isTransitioning]
  );

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      {children}

      {/* Curtain overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            key="curtain"
            variants={curtainVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            style={{ transformOrigin: isTransitioning ? "top" : "bottom" }}
            className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-[1px] bg-primary" />
              <span className="font-display text-sm uppercase tracking-[0.3em] text-primary">
                Singler Partners
              </span>
              <div className="w-8 h-[1px] bg-primary" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
};
