import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Terms of Service | IGDisco",
    description: "Terms of Service for IGDisco DevOps Solutions. Please read these terms carefully before using our services.",
};

export default function TermsOfService() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-bg-color pt-32 pb-20">
                <div className="container max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                        Terms of Service
                    </h1>
                    <p className="text-secondary text-lg mb-12">
                        Last updated: December 31, 2025
                    </p>

                    <div className="prose prose-lg max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                                1. Introduction
                            </h2>
                            <p className="text-secondary leading-relaxed mb-4">
                                Welcome to IGDisco (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;). These Terms of Service
                                (&quot;Terms&quot;, &quot;Terms of Service&quot;) govern your use of our website and services
                                (collectively, the &quot;Service&quot;) operated by IGDisco.
                            </p>
                            <p className="text-secondary leading-relaxed">
                                Your access to and use of the Service is conditioned on your acceptance of and
                                compliance with these Terms. These Terms apply to all visitors, users, and others who
                                access or use the Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                                2. Account Terms
                            </h2>
                            <ul className="list-disc pl-6 space-y-3 text-secondary">
                                <li>You must be 18 years or older to use this Service.</li>
                                <li>
                                    You must provide accurate and complete information when creating an account.
                                </li>
                                <li>
                                    You are responsible for maintaining the security of your account and password.
                                </li>
                                <li>
                                    You are responsible for all activities that occur under your account.
                                </li>
                                <li>
                                    You must immediately notify us of any unauthorized uses of your account.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                                3. Acceptable Use
                            </h2>
                            <p className="text-secondary leading-relaxed mb-4">
                                You agree not to use the Service:
                            </p>
                            <ul className="list-disc pl-6 space-y-3 text-secondary">
                                <li>In any way that violates any applicable law or regulation.</li>
                                <li>
                                    To transmit any harmful code, viruses, or malicious software.
                                </li>
                                <li>To interfere with or disrupt the Service or servers.</li>
                                <li>To impersonate or attempt to impersonate the Company or another user.</li>
                                <li>
                                    To engage in any conduct that restricts or inhibits anyone&apos;s use of the Service.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                                4. Intellectual Property
                            </h2>
                            <p className="text-secondary leading-relaxed mb-4">
                                The Service and its original content, features, and functionality are and will remain
                                the exclusive property of IGDisco and its licensors. The Service is protected by
                                copyright, trademark, and other laws.
                            </p>
                            <p className="text-secondary leading-relaxed">
                                Our trademarks and trade dress may not be used in connection with any product or
                                service without our prior written consent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                                5. Service Availability
                            </h2>
                            <p className="text-secondary leading-relaxed">
                                We reserve the right to withdraw or amend our Service, and any service or material we
                                provide, in our sole discretion without notice. We will not be liable if for any
                                reason all or any part of the Service is unavailable at any time or for any period.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                                6. Links to Other Websites
                            </h2>
                            <p className="text-secondary leading-relaxed">
                                Our Service may contain links to third-party websites or services that are not owned
                                or controlled by IGDisco. We have no control over, and assume no responsibility for,
                                the content, privacy policies, or practices of any third-party websites or services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                                7. Termination
                            </h2>
                            <p className="text-secondary leading-relaxed">
                                We may terminate or suspend your account immediately, without prior notice or
                                liability, for any reason whatsoever, including without limitation if you breach the
                                Terms. Upon termination, your right to use the Service will immediately cease.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                                8. Limitation of Liability
                            </h2>
                            <p className="text-secondary leading-relaxed">
                                In no event shall IGDisco, nor its directors, employees, partners, agents, suppliers,
                                or affiliates, be liable for any indirect, incidental, special, consequential, or
                                punitive damages, including without limitation, loss of profits, data, use, goodwill,
                                or other intangible losses, resulting from your access to or use of or inability to
                                access or use the Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                                9. Disclaimer
                            </h2>
                            <p className="text-secondary leading-relaxed">
                                Your use of the Service is at your sole risk. The Service is provided on an &quot;AS IS&quot;
                                and &quot;AS AVAILABLE&quot; basis. The Service is provided without warranties of any kind,
                                whether express or implied, including, but not limited to, implied warranties of
                                merchantability, fitness for a particular purpose, non-infringement, or course of
                                performance.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                                10. Governing Law
                            </h2>
                            <p className="text-secondary leading-relaxed">
                                These Terms shall be governed and construed in accordance with the laws of your
                                jurisdiction, without regard to its conflict of law provisions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                                11. Changes to Terms
                            </h2>
                            <p className="text-secondary leading-relaxed">
                                We reserve the right, at our sole discretion, to modify or replace these Terms at any
                                time. If a revision is material, we will try to provide at least 30 days&apos; notice
                                prior to any new terms taking effect. What constitutes a material change will be
                                determined at our sole discretion.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                                12. Contact Us
                            </h2>
                            <p className="text-secondary leading-relaxed">
                                If you have any questions about these Terms, please contact us at:
                            </p>
                            <p className="text-primary font-semibold mt-4">
                                Email: legal@igdisco.com
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
