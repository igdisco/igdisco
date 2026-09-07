import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import Services from "@/components/sections/Services";
import Capabilities from "@/components/sections/Capabilities";
import Features from "@/components/sections/Features";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      {/* Ambient Neon Lighting Backdrop */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="ambient-sphere-1 absolute -top-40 left-1/4 w-[650px] h-[650px] bg-[#0c51a3]/10 dark:bg-[#0c51a3]/20 rounded-full blur-[140px]" />
        <div className="ambient-sphere-2 absolute top-1/3 -right-32 w-[600px] h-[600px] bg-[#662D91]/10 dark:bg-[#662D91]/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 -left-40 w-[600px] h-[600px] bg-[#00b2ee]/12 dark:bg-[#00b2ee]/15 rounded-full blur-[160px]" />
        <div className="absolute inset-0 grid-lines opacity-60 dark:opacity-20" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main id="main-content" className="flex-1 flex flex-col">
          <Hero />
          <TechStack />
          <Services />
          <Capabilities />
          <Features />
          <Process />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
