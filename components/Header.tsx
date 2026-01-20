"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const logoSrc = mounted
        ? (resolvedTheme === "dark" ? "/assets/images/logo-dark.png" : "/assets/images/logo-light.png")
        : "/assets/images/logo.png";

    return (
        <header className="fixed top-0 left-0 w-full h-20 bg-background/80 backdrop-blur-md z-50 border-b border-border">
            <div className="container h-full flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <img src={logoSrc} alt="Logo" className="w-[80px] h-[80px] object-cover" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex gap-8">
                        {["Features", "Services", "Team", "Contact"].map((item) => (
                            <li key={item}>
                                <a
                                    href={`/#${item.toLowerCase()}`}
                                    className="font-medium text-secondary hover:text-primary transition-colors"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Overlay */}
                <div
                    className={`fixed inset-0 bg-background/95 backdrop-blur-sm z-40 transition-transform duration-300 md:hidden flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <ul className="flex flex-col items-center gap-8 text-xl">
                        {["Features", "Services", "Team", "Contact"].map((item) => (
                            <li key={item}>
                                <a
                                    href={`/#${item.toLowerCase()}`}
                                    className="font-medium text-secondary hover:text-primary transition-colors"
                                    onClick={closeMobileMenu}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center gap-4 z-50">
                    <ThemeToggle />
                    <a href="/#contact" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5">
                        Get Started
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 z-50"
                        aria-label="Toggle menu"
                        onClick={toggleMobileMenu}
                    >
                        <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                        <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>
            </div>
        </header>
    );
}
