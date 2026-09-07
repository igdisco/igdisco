"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import Brand from "./Brand";
import ThemeToggle from "./ThemeToggle";
const links = [
  ["Services", "services"],
  ["What we deliver", "capabilities"],
  ["Our approach", "process"],
  ["Our team", "team"],
  ["FAQs", "faq"],
];
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
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([name, id]) => (
            <Link key={id} href={`/#${id}`}>
              {name}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <Link className="button button-small header-cta" href="/#contact">
            Let’s talk <ArrowUpRight size={15} />
          </Link>
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            {links.map(([name, id]) => (
              <Link key={id} href={`/#${id}`} onClick={() => setOpen(false)}>
                {name}
                <ArrowUpRight size={16} />
              </Link>
            ))}
            <Link href="/#contact" onClick={() => setOpen(false)}>
              Book a consultation <ArrowUpRight size={16} />
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
