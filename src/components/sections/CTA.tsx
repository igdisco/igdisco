export default function CTA() {
    return (
        <section id="cta" className="relative py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent -z-10" />
            <div className="container text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl mx-auto">
                    Ready to Transform Your Workflow?
                </h2>
                <p className="text-xl md:text-2xl text-secondary mb-10 max-w-2xl mx-auto">
                    Join hundreds of companies that trust us with their DevOps needs.
                </p>
                <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-10 py-5 rounded-xl bg-primary text-white font-bold text-xl hover:bg-primary/90 transition-all shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1"
                >
                    Get Started Today
                </a>
            </div>
        </section>
    );
}
