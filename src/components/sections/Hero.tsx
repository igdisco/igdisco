// import { ArrowDown, ArrowUpRight } from "lucide-react";
import HeroLogo from "../graphics/HeroLogo";
import styles from "./Hero.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={`container ${styles.grid}`}>
        {/* Left Hero Copy */}
        <div className={`${styles.scene} space-y-7`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs text-xs font-mono font-semibold tracking-wide text-slate-700 dark:text-slate-300">
            <span className="w-2 h-2 rounded-full bg-[#00B3F0] animate-pulse"></span>
            <span>PROFESSIONAL & MANAGED IT SERVICES</span>
          </div>
          <div className="space-y-4">
            <h1 className="font-headline text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
              Enjoy the night.<br />
              We&apos;ve got{" "}
              <span className="disco-shimmer bg-gradient-to-r from-[#0C51A3] via-[#00B3F0] to-[#662D91] bg-clip-text text-transparent drop-shadow-xs">
                IT.
              </span>
            </h1>
            <p className="font-body text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              Big plans. Late nights. A life beyond your screen. We bring your IT together, so you can switch off with confidence.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-5 sm:gap-6 pt-2">
            <Link
              className="glow-btn px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0C51A3] to-[#008cb8] text-white font-headline font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 hover:brightness-105"
              href="/#consultation"
            >
              <span>Let&apos;s talk</span>
              <span className="material-symbols-outlined text-base">north_east</span>
            </Link>
            <Link
              className="text-sm font-headline font-semibold text-slate-700 dark:text-slate-300 hover:text-brand-blue transition-colors flex items-center gap-1.5"
              href="/#disco-framework"
            >
              <span>Discover D.I.S.C.O.</span>
              <span className="material-symbols-outlined text-base text-slate-400">arrow_downward</span>
            </Link>
          </div>

          {/* Team Avatars & Social Proof Tagline */}
          <div className={styles.people}>
            <div className="flex -space-x-2.5 overflow-hidden">
              {["sovannareach.jpg", "sokuntheary.png", "hongsea.png", "phireak.png", "sreyteng.png", "nara.png"].map((file, i) => (
                <div key={file} className="inline-block relative h-9 w-9 rounded-full ring-2 ring-white dark:ring-slate-900 overflow-hidden shadow-xs">
                  <Image
                    src={`/assets/images/${file}`}
                    alt="Engineer avatar"
                    fill
                    className="object-cover"
                    sizes="36px"
                  />
                </div>
              ))}
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 leading-tight">
              <span className="font-semibold text-slate-900 dark:text-slate-100 block">Real people. Behind the scenes.</span>
              <span>Your peace of mind. Front and center.</span>
            </div>
          </div>
        </div>

        {/* Right Hero Interactive Graphic (D.I.S.C.O. Effect) */}
        <HeroLogo />
      </div>
    </section >
  );
}
