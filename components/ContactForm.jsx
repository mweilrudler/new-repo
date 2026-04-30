"use client";

import { useState } from "react";

const services = [
  "Tax Planning & Compliance",
  "Accounting & Bookkeeping",
  "Audit & Assurance",
  "Business Advisory Services",
  "Estate & Trust Services",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result.error || "We could not send your inquiry. Please try again."
        );
      }

      form.reset();
      setStatus("success");
      setMessage("Thank you. Your inquiry has been submitted.");
    } catch (error) {
      setStatus("error");
      setMessage(error.message);
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          autoComplete="given-name"
          required
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          autoComplete="family-name"
          required
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        autoComplete="email"
        required
        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        autoComplete="tel"
        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
      />

      <select
        name="service"
        required
        defaultValue=""
        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/30"
      >
        <option value="" disabled>
          Service Needed
        </option>
        {services.map((service) => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </select>

      <textarea
        name="message"
        rows={4}
        placeholder="Message"
        required
        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
      />

      <p className="text-xs text-slate-400">
        By submitting this form, you agree to be contacted by Rudler, PSC
        regarding your inquiry.
      </p>

      {message ? (
        <p
          className={`rounded-md px-4 py-3 text-sm ${
            status === "success"
              ? "bg-green-50 text-green-800"
              : "bg-red-50 text-red-700"
          }`}
          role={status === "error" ? "alert" : "status"}
        >
          {message}
        </p>
      ) : null}

      <button
        type="submit"
        className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
      </button>
    </form>
  );
}
