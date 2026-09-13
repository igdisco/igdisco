import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Terms of Use | IGDISCO",
    description: "Terms of Use for IGDISCO DevOps Solutions. Please read these terms carefully before using our website.",
};

export default function TermsOfUse() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-bg-color pt-32 pb-20">
                <div className="container max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                        Terms of Use
                    </h1>
                    <p className="text-secondary text-lg mb-12">
                        Last updated: 09 September 2026
                    </p>

                    <div className="prose prose-lg max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                                1. Introduction
                            </h2>
                            <p className="text-secondary leading-relaxed mb-4">
                                Welcome to IGDISCO. These Terms of Use (&quot;Terms&quot;) govern your access to and use of the
                                website located at www.igdisco.com (the &quot;Website&quot;), operated by IGDISCO Co., Ltd.
                                (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;).
                            </p>
                            <p className="text-secondary leading-relaxed mb-4">
                                By accessing or using the Website, you agree to be bound by these Terms. If you do not agree
                                with any part of these Terms, please do not access or use the Website.
                            </p>
                            <p className="text-secondary leading-relaxed mb-4">
                                <strong>Scope of these Terms.</strong> These Terms govern your use of the Website only. They do not govern
                                the professional or managed IT services we provide to our clients. Those services are governed
                                exclusively by the master services agreement, service agreement, statement of work, purchase
                                order, or other engagement document signed between us and the client concerned. Where there is
                                any inconsistency between these Terms and an engagement document, the engagement document
                                prevails in respect of the services it covers. Nothing on the Website varies, supplements, or limits
                                the terms of any engagement document.
                            </p>
                            <p className="text-secondary leading-relaxed">
                                Our Privacy Policy, available at <a href="https://www.igdisco.com/privacy-policy" className="text-primary hover:underline">https://www.igdisco.com/privacy-policy</a>, explains how we
                                handle information collected through the Website and forms part of these Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                                2. Use of the Website
                            </h2>
                            <p className="text-secondary leading-relaxed mb-4">
                                The Website is provided for general information about our company and our services, and is
                                intended for a business audience.
                            </p>
                            <ul className="list-disc pl-6 space-y-3 text-secondary">
                                <li>The Website is intended for use by persons aged 18 years or older.</li>
                                <li>
                                    You may view, download, and print pages from the Website for your own internal
                                    business use or personal reference, provided you do not remove or alter any copyright,
                                    trademark, or other proprietary notices.
                                </li>
                                <li>
                                    You must provide accurate and complete information when submitting an inquiry,
                                    request, subscription, or job application through the Website.
                                </li>
                                <li>
                                    You are responsible for ensuring that your equipment, software, and internet connection
                                    are suitable for accessing the Website, and for the security of any device you use to
                                    access it.
                                </li>
                                <li>
                                    No account or registration is required to browse the Website. We do not currently offer
                                    account-based or subscription services through the Website.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                                3. Acceptable Use
                            </h2>
                            <p className="text-secondary leading-relaxed mb-4">
                                You agree not to use the Website:
                            </p>
                            <ul className="list-disc pl-6 space-y-3 text-secondary">
                                <li>In any way that violates any applicable law or regulation.</li>
                                <li>
                                    To transmit any harmful code, viruses, or malicious software.
                                </li>
                                <li>To interfere with or disrupt the Website or servers.</li>
                                <li>To impersonate or attempt to impersonate the Company or another user.</li>
                                <li>
                                    To engage in any conduct that restricts or inhibits anyone&apos;s use of the Website.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                                4. Intellectual Property
                            </h2>
                            <p className="text-secondary leading-relaxed mb-4">
                                The Website and its original content, features, and functionality are and will remain
                                the exclusive property of IGDISCO and its licensors. The Website is protected by
                                copyright, trademark, and other laws.
                            </p>
                            <p className="text-secondary leading-relaxed">
                                Our trademarks and trade dress may not be used in connection with any product or
                                service without our prior written consent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                                5. Website Availability
                            </h2>
                            <p className="text-secondary leading-relaxed">
                                We reserve the right to withdraw or amend our Website, and any service or material we
                                provide, in our sole discretion without notice. We will not be liable if for any
                                reason all or any part of the Website is unavailable at any time or for any period.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                                6. Links to Other Websites
                            </h2>
                            <p className="text-secondary leading-relaxed">
                                Our Website may contain links to third-party websites or services that are not owned
                                or controlled by IGDISCO. We have no control over, and assume no responsibility for,
                                the content, privacy policies, or practices of any third-party websites or services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                                7. Termination
                            </h2>
                            <p className="text-secondary leading-relaxed">
                                We may terminate or suspend your access immediately, without prior notice or
                                liability, for any reason whatsoever, including without limitation if you breach the
                                Terms. Upon termination, your right to use the Website will immediately cease.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                                8. Limitation of Liability
                            </h2>
                            <p className="text-secondary leading-relaxed">
                                In no event shall IGDISCO, nor its directors, employees, partners, agents, suppliers,
                                or affiliates, be liable for any indirect, incidental, special, consequential, or
                                punitive damages, including without limitation, loss of profits, data, use, goodwill,
                                or other intangible losses, resulting from your access to or use of or inability to
                                access or use the Website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                                9. Disclaimer
                            </h2>
                            <p className="text-secondary leading-relaxed">
                                Your use of the Website is at your sole risk. The Website is provided on an &quot;AS IS&quot;
                                and &quot;AS AVAILABLE&quot; basis. The Website is provided without warranties of any kind,
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
