"use client";

import { useState } from "react";
import { site, telHref } from "../site";
import { submitForm } from "../submitForm";
import { PhoneIcon } from "./icons";

const projectTypes = [
  "Land clearing",
  "Dirt import & fill",
  "Grading / leveling a pad",
  "Home site prep",
  "Drainage / french drain",
  "Driveway",
  "Concrete (slab, footers, patio)",
  "Something else",
];

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "error"; message: string };

const inputClass =
  "rounded-md border border-stone-300 bg-white px-3 py-2.5 font-normal text-stone-900 placeholder:text-stone-400 focus:border-forest-600 focus:outline-none focus:ring-2 focus:ring-forest-600/20";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => ((data.get(k) as string | null) ?? "").trim();

    setStatus({ kind: "sending" });
    const result = await submitForm({
      subject: `Grading quote request from ${get("name")}`,
      fields: [
        ["Name", get("name")],
        ["Phone", get("phone")],
        ["Email", get("email") || "—"],
        ["Project type", get("projectType")],
        ["Property address / county", get("location") || "—"],
        ["Details", get("message") || "—"],
      ],
      replyTo: get("email") || undefined,
      honeypot: get("_honey"),
    });

    if (result.success) {
      form.reset();
      setStatus({ kind: "sent" });
    } else {
      setStatus({ kind: "error", message: result.error });
    }
  }

  if (status.kind === "sent") {
    return (
      <div className="rounded-xl border border-forest-100 bg-forest-50 p-8 text-center" role="status">
        <h3 className="text-xl font-bold text-forest-800">
          Thanks — we got your request.
        </h3>
        <p className="mt-2 text-stone-600">
          We&apos;ll get back to you soon to talk about your site. Need us sooner?
          Call{" "}
          <a href={telHref(site.phone)} className="font-semibold text-forest-700 underline">
            {site.phone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus({ kind: "idle" })}
          className="mt-5 text-sm font-semibold text-forest-700 underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  const sending = status.kind === "sending";

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <Field label="Your name" name="name" autoComplete="name" required maxLength={100} />
      <Field label="Phone" name="phone" type="tel" autoComplete="tel" required maxLength={40} />
      <Field label="Email (optional)" name="email" type="email" autoComplete="email" maxLength={200} />
      <label className="flex flex-col gap-1.5 text-sm font-semibold text-stone-700">
        Type of project
        <select name="projectType" className={inputClass} defaultValue={projectTypes[0]}>
          {projectTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <div className="sm:col-span-2">
        <Field
          label="Property address or county"
          name="location"
          autoComplete="street-address"
          maxLength={200}
        />
      </div>
      <label className="flex flex-col gap-1.5 text-sm font-semibold text-stone-700 sm:col-span-2">
        Tell us about the site
        <textarea
          name="message"
          rows={4}
          maxLength={5000}
          placeholder="What you're building, how steep the lot is, trees to clear, rock, standing water, access for equipment…"
          className={inputClass}
        />
      </label>

      {/* Honeypot: hidden from people, irresistible to bots. */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {status.kind === "error" && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800 sm:col-span-2">
          {status.message} Please call us at{" "}
          <a href={telHref(site.phone)} className="font-bold underline">
            {site.phone}
          </a>{" "}
          and we&apos;ll take your details over the phone.
        </div>
      )}

      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center justify-center gap-2 rounded-md bg-action px-6 py-3.5 text-base font-bold text-stone-900 shadow-md transition-colors hover:bg-action-dark disabled:cursor-wait disabled:opacity-70 sm:col-span-2"
      >
        {sending ? "Sending…" : "Request My Quote"}
      </button>
      <p className="flex items-center gap-1.5 text-xs text-stone-500 sm:col-span-2">
        <PhoneIcon className="h-3.5 w-3.5" />
        Prefer to talk? Call{" "}
        <a href={telHref(site.phone)} className="font-semibold text-forest-700 underline">
          {site.phone}
        </a>
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
  maxLength,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  maxLength?: number;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm font-semibold text-stone-700">
      {label}
      {required && <span className="sr-only">(required)</span>}
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        maxLength={maxLength}
        className={inputClass}
      />
    </label>
  );
}
