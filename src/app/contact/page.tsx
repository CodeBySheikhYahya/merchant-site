import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Building2, Mail, MapPin } from "lucide-react";
import { ContactInquiryForm } from "@/components/ContactInquiryForm";
import { ContactOrbit } from "@/components/ContactOrbit";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { IMG_CONTACT } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Contact Us — Merchant Provider SRX LLC",
  description:
    "Business inquiries, onboarding, and merchant service support for Merchant Provider SRX LLC.",
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="shell">
        <SiteHeader active="contact" />
      </div>

      <header className="contact-hero" aria-labelledby="contact-hero-title">
        <div className="contact-hero__media">
          <Image
            src={IMG_CONTACT}
            alt="Business team collaborating at a conference table"
            fill
            priority
            className="contact-hero__img"
            sizes="100vw"
          />
          <div className="contact-hero__scrim" aria-hidden />
        </div>
        <div className="shell contact-hero__copy">
          <p className="contact-hero__eyebrow">Get in touch</p>
          <h1 id="contact-hero-title" className="contact-hero__title">
            Contact Us
          </h1>
          <p className="contact-hero__entity">Merchant Provider SRX LLC</p>
        </div>
      </header>

      <div className="shell">
        <ContactOrbit />

        <main className="contact-main">
          <div className="contact-grid">
            <section
              className="contact-panel"
              aria-labelledby="contact-form-heading"
            >
              <h2 id="contact-form-heading" className="contact-panel__h">
                Send us a message
              </h2>
              <p className="contact-panel__req">
                Please include your business details so we can respond accurately.
              </p>
              <ContactInquiryForm />
              <p className="contact-panel__note">
                Submitting opens your email app addressed to{" "}
                <Link href="mailto:raexyhacks68@gmail.com">
                  raexyhacks68@gmail.com
                </Link>
                .
              </p>
            </section>

            <aside className="contact-aside" aria-label="Contact information">
              <h2 className="contact-aside__h">Let&apos;s start a conversation</h2>
              <p className="contact-aside__lead">
                For business inquiries, onboarding, or merchant service support,
                please reach out using the details below. Our team typically
                responds within a short time.
              </p>

              <dl className="contact-cards">
                <div className="contact-card contact-card--withIcon">
                  <span className="contact-card__iconWrap" aria-hidden>
                    <Mail strokeWidth={1.5} />
                  </span>
                  <div className="contact-card__body">
                    <dt>Email</dt>
                    <dd>
                      <Link href="mailto:raexyhacks68@gmail.com">
                        raexyhacks68@gmail.com
                      </Link>
                    </dd>
                  </div>
                </div>
                <div className="contact-card contact-card--withIcon">
                  <span className="contact-card__iconWrap" aria-hidden>
                    <Building2 strokeWidth={1.5} />
                  </span>
                  <div className="contact-card__body">
                    <dt>Business name</dt>
                    <dd>Merchant Provider SRX LLC</dd>
                  </div>
                </div>
                <div className="contact-card contact-card--withIcon">
                  <span className="contact-card__iconWrap" aria-hidden>
                    <MapPin strokeWidth={1.5} />
                  </span>
                  <div className="contact-card__body">
                    <dt>Location</dt>
                    <dd>
                      12849 Climbing Ivy Dr
                      <br />
                      United States
                    </dd>
                  </div>
                </div>
              </dl>
            </aside>
          </div>
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
