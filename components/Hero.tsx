import { ArrowDown, ArrowUpRight } from "lucide-react";
import DiscoBall from "./DiscoBall";
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
        <DiscoBall />
      </div>
    </section>
  );
}
