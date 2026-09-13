import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Privacy Policy | IGDISCO",
    description: "Privacy Policy for IGDISCO DevOps Solutions. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
    return (
        <>
            <main className="min-h-screen bg-bg-color pt-32 pb-20">
                <div className="container max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                        Privacy Policy
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
                                IGDISCO Co., Ltd. (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;), is committed to protecting your privacy. This Privacy
                                Policy explains how we collect, use, disclose, and safeguard your information when you visit our
                                website at www.igdisco.com (the &quot;Website&quot;).
                            </p>
                            <p className="text-secondary leading-relaxed mb-4">
                                <strong>Scope of this Policy.</strong> This Privacy Policy applies only to your access to and use of the Website.
                                It does not apply to information we process when delivering professional or managed IT services
                                to our clients. Where we handle data in the course of an engagement &mdash; whether as a service
                                provider, processor, or otherwise &mdash; that handling is governed by the service agreement,
                                statement of work, or data processing terms agreed with the client concerned, and those terms
                                prevail over this Policy. This Policy also does not apply to third-party websites that we link to.
                            </p>
                            <p className="text-secondary leading-relaxed">
                                Please read this Privacy Policy carefully. If you do not agree with its terms, please do not access
                                the Website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                                2. Information We Collect
                            </h2>
                            <p className="text-secondary leading-relaxed mb-4">
                                We may collect information about you in a variety of ways. The information we may
                                collect includes:
                            </p>

                            <h3 className="text-xl font-bold mb-3 text-text-primary">
                                Information You Provide to Us
                            </h3>
                            <p className="text-secondary leading-relaxed mb-4">
                                Information you voluntarily submit when you contact us through the Website, including through
                                a contact or inquiry form, a request for a quotation or proposal, a subscription to our updates, or
                                a job application. This may include your name, business email address, telephone number,
                                company name, job title, the content of your message, and &mdash; where you apply for a role with us
                                &mdash; your curriculum vitae and the supporting information you choose to include in it.
                            </p>

                            <h3 className="text-xl font-bold mb-3 text-text-primary">
                                Derivative Data
                            </h3>
                            <p className="text-secondary leading-relaxed mb-4">
                                Information our servers and analytics tools automatically collect when you access the Website,
                                such as your IP address, browser type and version, operating system, device type, access times,
                                the pages you view, and the page you visited immediately before arriving at the Website. This
                                information is collected in aggregate and is not ordinarily used to identify you personally.
                            </p>

                            <h3 className="text-xl font-bold mb-3 text-text-primary">
                                Information We Do Not Collect
                            </h3>
                            <p className="text-secondary leading-relaxed">
                                We do not sell products or accept payment through the Website. We therefore do not collect
                                credit card numbers, bank details, or other payment information through the Website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                                3. Use of Your Information
                            </h2>
                            <p className="text-secondary leading-relaxed mb-4">
                                Having accurate information about you permits us to provide you with a smooth,
                                efficient, and customized experience. Specifically, we may use information collected
                                about you to:
                            </p>
                            <ul className="list-disc pl-6 space-y-3 text-secondary">
                                <li>Create and manage your account.</li>
                                <li>Process your transactions and send you related information.</li>
                                <li>Email you regarding your account or order.</li>
                                <li>Fulfill and manage purchases, orders, payments, and other transactions.</li>
                                <li>Generate a personal profile about you to make future visits more personalized.</li>
                                <li>Increase the efficiency and operation of the Service.</li>
                                <li>Monitor and analyze usage and trends to improve your experience.</li>
                                <li>Notify you of updates to the Service.</li>
                                <li>Offer new products, services, and/or recommendations to you.</li>
                                <li>Perform other business activities as needed.</li>
                                <li>Prevent fraudulent transactions and monitor against theft.</li>
                                <li>Request feedback and contact you about your use of the Service.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                                4. Disclosure of Your Information
                            </h2>
                            <p className="text-secondary leading-relaxed mb-4">
                                We may share information we have collected about you in certain situations. Your
                                information may be disclosed as follows:
                            </p>

                            <h3 className="text-xl font-bold mb-3 text-text-primary">
                                By Law or to Protect Rights
                            </h3>
                            <p className="text-secondary leading-relaxed mb-4">
                                If we believe the release of information about you is necessary to respond to legal
                                process, to investigate or remedy potential violations of our policies, or to protect
                                the rights, property, and safety of others.
                            </p>

                            <h3 className="text-xl font-bold mb-3 text-text-primary">
                                Business Transfers
                            </h3>
                            <p className="text-secondary leading-relaxed mb-4">
                                We may share or transfer your information in connection with, or during negotiations of,
                                any merger, sale of company assets, financing, or acquisition of all or a portion of our
                                business to another company.
                            </p>

                            <h3 className="text-xl font-bold mb-3 text-text-primary">
                                Third-Party Service Providers
                            </h3>
                            <p className="text-secondary leading-relaxed">
                                We may share your information with third parties that perform services for us or on our
                                behalf, including payment processing, data analysis, email delivery, hosting services,
                                customer service, and marketing assistance.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                                5. Tracking Technologies
                            </h2>
                            <p className="text-secondary leading-relaxed mb-4">
                                We may use cookies, web beacons, tracking pixels, and other tracking technologies on
                                the Service to help customize the Service and improve your experience.
                            </p>

                            <h3 className="text-xl font-bold mb-3 text-text-primary">
                                Cookies
                            </h3>
                            <p className="text-secondary leading-relaxed mb-4">
                                We may use cookies and similar tracking technologies to track activity on our Service
                                and store certain information. You can instruct your browser to refuse all cookies or
                                to indicate when a cookie is being sent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                                6. Security of Your Information
                            </h2>
                            <p className="text-secondary leading-relaxed">
                                We use administrative, technical, and physical security measures to help protect your
                                personal information. While we have taken reasonable steps to secure the personal
                                information you provide to us, please be aware that despite our efforts, no security
                                measures are perfect or impenetrable.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                                7. Policy for Children
                            </h2>
                            <p className="text-secondary leading-relaxed">
                                We do not knowingly solicit information from or market to children under the age of 18.
                                If we learn that we have collected personal information from a child under age 18
                                without verification of parental consent, we will delete that information as quickly as
                                possible.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                                8. Your Data Protection Rights
                            </h2>
                            <p className="text-secondary leading-relaxed mb-4">
                                Depending on your location, you may have the following rights regarding your personal
                                information:
                            </p>
                            <ul className="list-disc pl-6 space-y-3 text-secondary">
                                <li>
                                    <strong>The right to access</strong> – You have the right to request copies of your
                                    personal data.
                                </li>
                                <li>
                                    <strong>The right to rectification</strong> – You have the right to request that we
                                    correct any information you believe is inaccurate.
                                </li>
                                <li>
                                    <strong>The right to erasure</strong> – You have the right to request that we erase
                                    your personal data, under certain conditions.
                                </li>
                                <li>
                                    <strong>The right to restrict processing</strong> – You have the right to request
                                    that we restrict the processing of your personal data, under certain conditions.
                                </li>
                                <li>
                                    <strong>The right to object to processing</strong> – You have the right to object to
                                    our processing of your personal data, under certain conditions.
                                </li>
                                <li>
                                    <strong>The right to data portability</strong> – You have the right to request that
                                    we transfer the data that we have collected to another organization, or directly to
                                    you, under certain conditions.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                                9. Changes to This Privacy Policy
                            </h2>
                            <p className="text-secondary leading-relaxed">
                                We may update our Privacy Policy from time to time. We will notify you of any changes
                                by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
                                You are advised to review this Privacy Policy periodically for any changes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                                10. Contact Us
                            </h2>
                            <p className="text-secondary leading-relaxed">
                                If you have questions or comments about this Privacy Policy, please contact us at:
                            </p>
                            <p className="text-primary font-semibold mt-4">
                                Email: privacy@igdisco.com
                            </p>
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
}
