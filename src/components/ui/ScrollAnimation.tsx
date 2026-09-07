"use client";

import { useEffect } from "react";

export default function ScrollAnimation() {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const target = entry.target as HTMLElement;
                    target.style.opacity = "1";
                    target.style.transform = "translateY(0)";
                    target.classList.add("fade-in-up");
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const animateElements = document.querySelectorAll<HTMLElement>(
            ".hero-content, .feature-card, .service-card, .team-card, .section-title, .cta-container"
        );

        animateElements.forEach((el) => {
            el.style.opacity = "0";
            el.style.transform = "translateY(20px)";
            el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
            observer.observe(el);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return null;
}
