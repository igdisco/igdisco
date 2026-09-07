"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "Which cloud platforms do you work with?",
    answer:
      "We are a cloud service partner across AWS, Microsoft Azure, and Huawei Cloud, including hybrid and multi-cloud environments. That covers compute, storage, and security on each, plus high availability, auto-scaling, and cost optimization. We help you choose an approach that fits your existing systems and business needs.",
  },
  {
    question: "Do you manage Kubernetes clusters?",
    answer:
      "Yes. We provide complete setup, autoscaling, ingress management, security updates, and active troubleshooting for AWS EKS, Google Cloud GKE, Azure AKS, and self-hosted on-prem clusters.",
  },
  {
    question: "Can you work with our existing engineering team?",
    answer:
      "Absolutely. We integrate smoothly with your dev cycles, Git repositories, and Slack/Teams channels. We augment your team so they can focus on shipping features without managing midnight outages.",
  },
  {
    question: "How long does a migration project take?",
    answer:
      "Migration timelines vary by workload complexity, but typical foundational migrations take between 3 to 8 weeks with phased canary cutovers to ensure zero business downtime.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, our core offering includes 24/7/365 active monitoring, incident response SLAs under 15 minutes, automated health checks, and continuous FinOps cost optimization.",
  },
  {
    question: "Can you train our team on DevOps practices?",
    answer:
      "We conduct customized workshops on IaC (Terraform), CI/CD pipelines, container security, and modern GitOps workflows so your engineers level up seamlessly.",
  },
  {
    question: "Can you help with security requirements?",
    answer:
      "We support SOC2 Type II, ISO 27001, HIPAA, and GDPR compliance pipelines, integrating automated SAST/DAST container scans and strict secrets management into every build.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-24 px-6 lg:px-16 max-w-7xl mx-auto w-full border-t border-slate-200 dark:border-slate-800" id="faqs">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Header */}
        <div className="lg:col-span-5 space-y-4">
          <p className="text-xs font-mono font-bold tracking-widest text-[#008cb8] uppercase">
            06 / A LITTLE MORE CLARITY
          </p>
          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Good questions.<br />
            <span className="text-slate-400 dark:text-slate-500">Straight answers.</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Have something else on your mind? We&apos;re always up for a conversation.
          </p>
          <div className="pt-2">
            <Link
              className="inline-flex items-center gap-1.5 text-sm font-headline font-bold text-brand-blue hover:underline"
              href="/#consultation"
            >
              <span>Ask us anything</span>
              <span className="material-symbols-outlined text-base">north_east</span>
            </Link>
          </div>
        </div>

        {/* Right Accordion List */}
        <div className="lg:col-span-7 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl bg-white dark:bg-slate-900 border transition-colors shadow-xs p-5 ${
                  isOpen
                    ? "border-blue-300 dark:border-blue-700"
                    : "border-slate-200 dark:border-slate-800"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left font-headline font-semibold text-slate-900 dark:text-white text-sm sm:text-base gap-4"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`material-symbols-outlined text-lg transition-transform ${
                      isOpen ? "text-brand-blue" : "text-slate-400"
                    }`}
                  >
                    {isOpen ? "close" : "add"}
                  </span>
                </button>
                {isOpen && (
                  <div className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

