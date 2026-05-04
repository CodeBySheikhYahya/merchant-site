"use client";

import type { FormEvent } from "react";

const INQUIRY_EMAIL = "raexyhacks68@gmail.com";

export function ContactInquiryForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const company = String(fd.get("company") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    const subject = encodeURIComponent(
      "Business inquiry — Merchant Provider SRX LLC",
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    );

    window.location.href = `mailto:${INQUIRY_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="cform" onSubmit={handleSubmit} noValidate>
      <div className="cform__row">
        <div className="cform__field">
          <label className="cform__label" htmlFor="contact-name">
            Full name <span className="cform__req">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            className="cform__input"
            autoComplete="name"
            required
          />
        </div>
        <div className="cform__field">
          <label className="cform__label" htmlFor="contact-email">
            Work email <span className="cform__req">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            className="cform__input"
            autoComplete="email"
            required
          />
        </div>
      </div>
      <div className="cform__field">
        <label className="cform__label" htmlFor="contact-company">
          Company / legal entity
        </label>
        <input
          id="contact-company"
          name="company"
          type="text"
          className="cform__input"
          autoComplete="organization"
        />
      </div>
      <div className="cform__field">
        <label className="cform__label" htmlFor="contact-message">
          Message <span className="cform__req">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          className="cform__textarea"
          rows={5}
          required
        />
      </div>
      <p className="cform__hint">Fields marked * are required.</p>
      <button type="submit" className="cform__submit btn btn--primary">
        Submit
      </button>
    </form>
  );
}
