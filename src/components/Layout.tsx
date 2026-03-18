import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageTransition from "./PageTransition";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageTransition>
        {children}
      </PageTransition>
      <Footer />
    </main>
  );
};

export default Layout;
