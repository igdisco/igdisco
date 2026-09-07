"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";
export default function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
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
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-copy">
          <span className="eyebrow">07 / LET’S BUILD WHAT’S NEXT</span>
          <h2>
            Keep your business
            <br />
            in rhythm.{" "}
            <br />
            <span>Let’s talk IT.</span>
          </h2>
          <p>
            Tell us where you are and where you want to go. We’ll work out the
            next step together.
          </p>
          <div className="contact-points">
            <span>
              <CheckCircle2 size={17} /> A conversation with our engineers
            </span>
            <span>
              <CheckCircle2 size={17} /> Advice grounded in your business
            </span>
            <span>
              <CheckCircle2 size={17} /> A clear path forward
            </span>
          </div>
          <span className="contact-signoff">
            YOU ENJOY THE NIGHT. WE TAKE CARE OF IT.
          </span>
        </div>
        <div className="contact-form-panel">
          <h3>Let’s hear what you’re building.</h3>
          <p>A few details to get us started.</p>
          <form onSubmit={handleSubmit}>
            <fieldset disabled={state === "sending"}>
              <div className="form-row">
                <label htmlFor="name">
                  Full name <span>*</span>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    maxLength={120}
                    placeholder="Your name"
                  />
                </label>
                <label htmlFor="email">
                  Work email <span>*</span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    placeholder="you@company.com"
                  />
                </label>
              </div>
              <div className="form-row">
                <label htmlFor="meeting-type">
                  Meeting type
                  <select name="meetingType" id="meeting-type">
                    <option value="online">Online meeting</option>
                    <option value="in-person">In-person meeting</option>
                  </select>
                </label>
                <label htmlFor="date">
                  Preferred date <span>*</span>
                  <input type="date" name="date" id="date" required />
                </label>
              </div>
              <label htmlFor="message">
                What can we help with?
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={5000}
                  placeholder="A little about your project, your challenges, or your next big idea…"
                />
              </label>
              <button type="submit" className="button form-submit">
                {state === "sending" ? (
                  <>
                    Sending request <LoaderCircle size={17} className="spin" />
                  </>
                ) : (
                  <>
                    Request a consultation <ArrowUpRight size={18} />
                  </>
                )}
              </button>
            </fieldset>
            <p className="form-privacy">
              By submitting, you agree to our{" "}
              <a href="/privacy-policy">Privacy Policy</a>.
            </p>
            <div aria-live="polite">
              {state === "success" && (
                <p className="form-message success">
                  Thank you. Your request has been sent. Our team will follow up
                  to confirm a time.
                </p>
              )}
              {state === "error" && (
                <p className="form-message error" role="alert">
                  We couldn’t send your request right now. Your details are
                  still here. Please try again later.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
