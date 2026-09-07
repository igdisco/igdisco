import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import Capabilities from "@/components/Capabilities";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <TechStack />
        <Services />
        <Capabilities />
        <Features />
        <Process />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
