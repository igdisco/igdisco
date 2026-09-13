import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import Services from "@/components/sections/Services";
import Capabilities from "@/components/sections/Capabilities";
import Features from "@/components/sections/Features";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "IGDISCO",
  description: "Five disciplines. One team looking after the technical side.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <Services />
      <Capabilities />
      <Features />
      <Process />
      <FAQ />
      <Contact />
    </>
  );
}
