"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Brand from "../ui/Brand";
import ThemeToggle from "../ui/ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);

  return (
    <header className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 px-6 lg:px-16 py-3.5 bg-white/85 dark:bg-slate-900/85 backdrop-blur-md sticky top-0 z-50 transition-all duration-300 shadow-xs">
      <div className="flex items-center gap-10">
        <Brand />
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300" aria-label="Main navigation">
          <Link className="hover:text-brand-blue transition-colors" href="/#catalog">
            Products
          </Link>
          <Link className="hover:text-brand-blue transition-colors" href="/#catalog">
            Services
          </Link>
          <div className="relative group py-2">
            <button
              className="flex items-center gap-1 hover:text-brand-blue transition-colors focus:outline-none"
              type="button"
            >
              <span>Use cases</span>
              <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:rotate-180 text-slate-400">
                expand_more
              </span>
            </button>
            <div className="absolute left-0 top-full hidden group-hover:block group-focus-within:block w-56 p-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-xl transition-all duration-200 z-50">
              <Link
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-slate-700 dark:text-slate-200 hover:text-brand-blue hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                href="/#disco-framework"
              >
                <span className="material-symbols-outlined text-brand-blue text-base">all_inclusive</span> DevOps
              </Link>
              <Link
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-slate-700 dark:text-slate-200 hover:text-brand-blue hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                href="/#disco-framework"
              >
                <span className="material-symbols-outlined text-[#008cb8] text-base">dns</span> Infrastructure
              </Link>
              <Link
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-slate-700 dark:text-slate-200 hover:text-brand-blue hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                href="/#disco-framework"
              >
                <span className="material-symbols-outlined text-[#662D91] text-base">shield</span> Security
              </Link>
              <Link
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-slate-700 dark:text-slate-200 hover:text-brand-blue hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                href="/#disco-framework"
              >
                <span className="material-symbols-outlined text-[#008cb8] text-base">cloud</span> Cloud
              </Link>
              <Link
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-slate-700 dark:text-slate-200 hover:text-brand-blue hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                href="/#disco-framework"
              >
                <span className="material-symbols-outlined text-brand-blue text-base">tune</span> Operations
              </Link>
            </div>
          </div>
          <Link className="hover:text-brand-blue transition-colors" href="/#consultation">
            Pricing
          </Link>
          <div className="relative group py-2">
            <button
              className="flex items-center gap-1 hover:text-brand-blue transition-colors focus:outline-none"
              type="button"
            >
              <span>Resources</span>
              <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:rotate-180 text-slate-400">
                expand_more
              </span>
            </button>
            <div className="absolute left-0 top-full hidden group-hover:block group-focus-within:block w-48 p-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-xl transition-all duration-200 z-50">
              <Link
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-slate-700 dark:text-slate-200 hover:text-brand-blue hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                href="/#why-igdisco"
              >
                <span className="material-symbols-outlined text-[#008cb8] text-base">info</span> About
              </Link>
              <Link
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-slate-700 dark:text-slate-200 hover:text-brand-blue hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                href="/#faqs"
              >
                <span className="material-symbols-outlined text-brand-blue text-base">article</span> Blog
              </Link>
              <Link
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-slate-700 dark:text-slate-200 hover:text-brand-blue hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                href="/#why-igdisco"
              >
                <span className="material-symbols-outlined text-[#662D91] text-base">group</span> Careers
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <ThemeToggle />
        <Link
          className="glow-btn inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#0c51a3] via-[#008cb8] to-[#662D91] px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-headline font-bold text-white shadow-md shadow-blue-900/15 transition-all hover:brightness-105 hover:shadow-lg"
          href="/#consultation"
        >
          <span className="material-symbols-outlined text-base sm:text-lg shrink-0">rocket_launch</span>
          <span className="flex flex-col text-left leading-tight">
            <span className="text-[9px] sm:text-[10px] font-normal tracking-wide text-white/90 uppercase">Free Assessment</span>
            <span className="text-[11px] sm:text-xs font-bold text-white whitespace-nowrap">Initiate a free Audit</span>
          </span>
        </Link>
        <button
          className="lg:hidden p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4 shadow-xl backdrop-blur-xl z-50">
          <Link href="/#catalog" onClick={() => setOpen(false)} className="text-sm font-medium text-slate-700 dark:text-slate-200 py-1">
            Products
          </Link>
          <Link href="/#catalog" onClick={() => setOpen(false)} className="text-sm font-medium text-slate-700 dark:text-slate-200 py-1">
            Services
          </Link>
          <Link href="/#disco-framework" onClick={() => setOpen(false)} className="text-sm font-medium text-slate-700 dark:text-slate-200 py-1">
            D.I.S.C.O. Framework
          </Link>
          <Link href="/#why-igdisco" onClick={() => setOpen(false)} className="text-sm font-medium text-slate-700 dark:text-slate-200 py-1">
            About & Careers
          </Link>
          <Link href="/#faqs" onClick={() => setOpen(false)} className="text-sm font-medium text-slate-700 dark:text-slate-200 py-1">
            FAQs
          </Link>
          <Link href="/#consultation" onClick={() => setOpen(false)} className="text-sm font-bold text-brand-blue py-1">
            Book Consultation →
          </Link>
        </div>
      )}
    </header>
  );
}

