"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

const INQUIRY_EMAIL = "raexyhacks68@gmail.com";

const VOLUME_CHOICES = [
  { value: "Under $10,000", label: "Under $10,000 / month" },
  { value: "$10,000 – $50,000", label: "$10,000 – $50,000 / month" },
  { value: "$50,000 – $250,000", label: "$50,000 – $250,000 / month" },
  { value: "$250,000 – $1,000,000", label: "$250,000 – $1M / month" },
  { value: "$1,000,000+", label: "$1M+ / month" },
  { value: "Prefer not to say", label: "Prefer not to say" },
] as const;

type Ctx = { open: () => void };

const GetStartedContext = createContext<Ctx | null>(null);

export function useGetStarted() {
  const ctx = useContext(GetStartedContext);
  if (!ctx) {
    throw new Error("GetStartedButton must be used inside GetStartedProvider");
  }
  return ctx;
}

export function GetStartedProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  const close = useCallback(() => setOpen(false), []);
  const openFn = useCallback(() => setOpen(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => {
      dialogRef.current?.querySelector<HTMLInputElement>("input")?.focus();
    }, 40);
    return () => window.clearTimeout(t);
  }, [open]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const fullName = String(fd.get("fullName") ?? "").trim();
    const businessName = String(fd.get("businessName") ?? "").trim();
    const businessEmail = String(fd.get("businessEmail") ?? "").trim();
    const website = String(fd.get("website") ?? "").trim();
    const monthlyVolume = String(fd.get("monthlyVolume") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    const subject = encodeURIComponent("Get Started — Merchant inquiry");
    const body = encodeURIComponent(
      [
        `Full name: ${fullName}`,
        `Business name: ${businessName}`,
        `Business email: ${businessEmail}`,
        `Website: ${website || "—"}`,
        `Monthly volume: ${monthlyVolume || "—"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    );

    window.location.href = `mailto:${INQUIRY_EMAIL}?subject=${subject}&body=${body}`;
    close();
  }

  return (
    <GetStartedContext.Provider value={{ open: openFn }}>
      {children}
      {open ? (
        <div className="gs-modal" role="presentation">
          <button
            type="button"
            className="gs-modal__backdrop"
            aria-label="Close dialog"
            onClick={close}
          />
          <div
            ref={dialogRef}
            className="gs-modal__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <div className="gs-modal__head">
              <div>
                <h2 id={titleId} className="gs-modal__title">
                  Get Started
                </h2>
                <p className="gs-modal__lead">
                  Tell us about your business and payment requirements. Our team
                  will review your details and get back to you.
                </p>
              </div>
              <button
                type="button"
                className="gs-modal__close"
                onClick={close}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <form className="cform gs-modal__form" onSubmit={handleSubmit}>
              <div className="cform__row">
                <div className="cform__field">
                  <label className="cform__label" htmlFor="gs-fullName">
                    Full name <span className="cform__req">*</span>
                  </label>
                  <input
                    id="gs-fullName"
                    name="fullName"
                    type="text"
                    className="cform__input"
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="cform__field">
                  <label className="cform__label" htmlFor="gs-businessName">
                    Business name <span className="cform__req">*</span>
                  </label>
                  <input
                    id="gs-businessName"
                    name="businessName"
                    type="text"
                    className="cform__input"
                    autoComplete="organization"
                    required
                  />
                </div>
              </div>

              <div className="cform__field">
                <label className="cform__label" htmlFor="gs-businessEmail">
                  Business email <span className="cform__req">*</span>
                </label>
                <input
                  id="gs-businessEmail"
                  name="businessEmail"
                  type="email"
                  className="cform__input"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="cform__field">
                <label className="cform__label" htmlFor="gs-website">
                  Website <span className="cform__hintInline">(optional)</span>
                </label>
                <input
                  id="gs-website"
                  name="website"
                  type="text"
                  className="cform__input"
                  placeholder="https://example.com"
                  autoComplete="url"
                  inputMode="url"
                />
              </div>

              <div className="cform__field">
                <label className="cform__label" htmlFor="gs-volume">
                  Monthly volume <span className="cform__req">*</span>
                </label>
                <select
                  id="gs-volume"
                  name="monthlyVolume"
                  className="cform__input cform__select"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select range
                  </option>
                  {VOLUME_CHOICES.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="cform__field">
                <label className="cform__label" htmlFor="gs-message">
                  Message <span className="cform__req">*</span>
                </label>
                <textarea
                  id="gs-message"
                  name="message"
                  className="cform__textarea"
                  required
                  rows={4}
                  placeholder="Tell us about your processing needs, timeline, and anything else we should know."
                />
              </div>

              <div className="gs-modal__actions">
                <button type="button" className="btn btn--ghost btn--sm" onClick={close}>
                  Cancel
                </button>
                <button type="submit" className="btn btn--primary gs-modal__submit">
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </GetStartedContext.Provider>
  );
}

export function GetStartedButton({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const { open } = useGetStarted();
  return (
    <button type="button" className={className} onClick={open}>
      {children}
    </button>
  );
}
