"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

export default function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!response.ok) throw new Error("Request could not be delivered");
      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  }

  return (
    <section className="py-20 sm:py-24 px-6 lg:px-16 max-w-7xl mx-auto w-full border-t border-slate-200 dark:border-slate-800" id="consultation">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Info & Value Props */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-3">
            <p className="text-xs font-mono font-bold tracking-widest text-[#008cb8] uppercase">
              07 / LET&apos;S BUILD WHAT&apos;S NEXT
            </p>
            <h2 className="font-headline text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Keep your business<br />
              in rhythm.<br />
              <span className="text-brand-blue">Let&apos;s talk IT.</span>
            </h2>
          </div>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
            Tell us where you are and where you want to go. We&apos;ll work out the next step together.
          </p>
          <div className="space-y-3.5 text-sm text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-brand-blue text-lg">check_circle</span>
              <span className="font-medium">A conversation with our engineers</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-brand-blue text-lg">check_circle</span>
              <span className="font-medium">Advice grounded in your business</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-brand-blue text-lg">check_circle</span>
              <span className="font-medium">A clear path forward</span>
            </div>
          </div>
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
            <p className="text-xs font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase font-bold">
              YOU ENJOY THE NIGHT. WE TAKE CARE OF IT.
            </p>
          </div>
        </div>

        {/* Right Consultation Booking Card */}
        <div className="lg:col-span-6" id="contact">
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-xl">
            <h3 className="font-headline text-2xl font-bold text-slate-900 dark:text-white mb-1">
              Let&apos;s hear what you&apos;re building.
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              A few details to get us started.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <fieldset disabled={state === "sending"} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Full name *
                    </label>
                    <input
                      id="form-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl bg-slate-50/70 dark:bg-slate-800/70 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm px-4 py-2.5 focus:bg-white dark:focus:bg-slate-800 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="form-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Work email *
                    </label>
                    <input
                      id="form-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full rounded-xl bg-slate-50/70 dark:bg-slate-800/70 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm px-4 py-2.5 focus:bg-white dark:focus:bg-slate-800 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 focus:outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-meeting" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Meeting type
                    </label>
                    <select
                      id="form-meeting"
                      name="meetingType"
                      className="w-full rounded-xl bg-slate-50/70 dark:bg-slate-800/70 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm px-4 py-2.5 focus:bg-white dark:focus:bg-slate-800 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 focus:outline-none transition"
                    >
                      <option value="Online meeting">Online meeting</option>
                      <option value="Technical audit discovery">Technical audit discovery</option>
                      <option value="Architecture consultation">Architecture consultation</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="form-date" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Preferred date *
                    </label>
                    <input
                      id="form-date"
                      name="date"
                      type="date"
                      required
                      className="w-full rounded-xl bg-slate-50/70 dark:bg-slate-800/70 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm px-4 py-2.5 focus:bg-white dark:focus:bg-slate-800 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 focus:outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="form-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    What can we help with?
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    rows={3}
                    placeholder="A little about your project, your challenges, or your next big idea..."
                    className="w-full rounded-xl bg-slate-50/70 dark:bg-slate-800/70 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm px-4 py-2.5 focus:bg-white dark:focus:bg-slate-800 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 focus:outline-none transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="glow-btn w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0C51A3] to-[#008cb8] hover:brightness-105 text-white font-headline font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 transition-all"
                >
                  <span>
                    {state === "sending"
                      ? "Sending request..."
                      : state === "success"
                        ? "Consultation Requested ✓"
                        : "Request a consultation"}
                  </span>
                  <span className="material-symbols-outlined text-base">north_east</span>
                </button>

                <p className="text-center text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                  By submitting, you agree to our{" "}
                  <Link href="/privacy-policy" className="underline hover:text-brand-blue">
                    Privacy Policy
                  </Link>.
                </p>

                {state === "success" && (
                  <p className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs text-center font-medium">
                    Thank you! A principal engineer from IG DISCO will reach out to confirm a time.
                  </p>
                )}
                {state === "error" && (
                  <p className="p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 text-xs text-center font-medium">
                    We couldn&apos;t deliver your request right now. Please try again or email us directly.
                  </p>
                )}
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
