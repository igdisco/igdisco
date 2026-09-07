<<<<<<< Updated upstream

import HeroSVG from "./HeroSVG";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-24 overflow-hidden">
            <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl -z-10" />

            <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="flex flex-col items-start z-10">
                    <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                        Accelerate Your Software Delivery
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary mb-10 max-w-lg leading-relaxed">
                        Streamline your development lifecycle with our cutting-edge DevOps
                        solutions. Automate, scale, and innovate faster than ever.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1"
                        >
                            Book a Demo
                        </a>
                        <a
                            href="#features"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-secondary/10 text-foreground font-bold text-lg backdrop-blur-sm hover:bg-secondary/20 transition-all border border-border/50"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
                <div className="relative z-10 w-full max-w-[600px] mx-auto">
                    <HeroSVG />
                </div>
            </div>
        </section>
    );
=======
import { ArrowDown, ArrowUpRight } from "lucide-react";
import HeroLogo from "./HeroLogo";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <div className={styles.eyebrow}><span /> PROFESSIONAL & MANAGED IT SERVICES</div>
          <h1 id="hero-heading">Enjoy the night.<br /><span className={styles.soft}>We’ve got</span> <span className={styles.accent}>IT.</span></h1>
          <p className={styles.description}>Big plans. Late nights. A life beyond your screen. We bring your IT together, so you can switch off with confidence.</p>
          <div className={styles.actions}>
            <a href="#contact" className={styles.cta}>Let’s talk IT <ArrowUpRight size={20} /></a>
            <a href="#services" className={styles.secondary}>Discover D.I.S.C.O. <ArrowDown size={16} /></a>
          </div>
          <div className={styles.people}>
            <span className={styles.avatars} aria-hidden="true">
              {["sovannareach.jpg", "sokuntheary.png", "hongsea.png", "phireak.png", "sreyteng.png", "nara.png"].map(src => <span key={src} style={{ backgroundImage: `url(/assets/images/${src})` }} />)}
            </span>
            <span>Real people. Behind the scenes.<br /><strong>Your peace of mind, front and center.</strong></span>
          </div>
        </div>
        <HeroLogo />
      </div>
    </section>
  );
>>>>>>> Stashed changes
}
