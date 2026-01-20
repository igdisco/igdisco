"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Footer() {

    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const logoSrc = mounted
        ? (resolvedTheme === "dark" ? "/assets/images/logo-dark.png" : "/assets/images/logo-light.png")
        : "/assets/images/logo.png";

    return (
        <footer className="bg-secondary/5 pt-20 pb-10 border-t border-border">
            <div className="container">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1">
                        <Link href="/" className="flex items-center justify-center w-full mb-4">
                            <img src={logoSrc} alt="Logo" className="w-[60%] h-auto object-contain" />
                        </Link>
                        <p className="text-secondary leading-relaxed">
                            Empowering teams to build better software, faster.
                        </p>
                    </div>

                    <div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-bold text-lg mb-6">Company</h4>
                            <ul className="space-y-4">
                                {["About", "Careers", "Blog"].map(item => (
                                    <li key={item}>
                                        <a href="#" className="text-secondary hover:text-primary transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-6">Resources</h4>
                            <ul className="space-y-4">
                                {["Documentation", "Support", "Community"].map(item => (
                                    <li key={item}>
                                        <a href="#" className="text-secondary hover:text-primary transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-6">Legal</h4>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="/privacy-policy" className="text-secondary hover:text-primary transition-colors">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms-of-service" className="text-secondary hover:text-primary transition-colors">
                                        Terms of Service
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-border text-center text-secondary">
                    <p>&copy; 2025 IGDisco. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
