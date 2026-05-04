import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/LegalShell";
import { IMG_LEGAL_TERMS } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Terms of Service — Merchant Provider SRX LLC",
};

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms of Service"
      eyebrow="Terms of use"
      heroImage={IMG_LEGAL_TERMS}
      heroAlt=""
    >
      <article className="doc">
        <p className="meta">Merchant Provider SRX LLC · Last updated: May 4, 2026</p>
        <p className="banner">
          These terms are a drafting template. They are not legal advice. Have
          counsel tailor them to your products, risk, and jurisdictions before
          publication.
        </p>
        <h2>1. Agreement</h2>
        <p>
          By accessing or using this website (the “Site”), you agree to these Terms
          of Service (“Terms”) with Merchant Provider SRX LLC (“SRX,” “we,” “us”).
          If you do not agree, do not use the Site.
        </p>
        <h2>2. The Site does not create a customer relationship by itself</h2>
        <p>
          Content on the Site is for general information. It does not constitute an
          offer where prohibited, or a binding commitment to provide any specific
          product, rate, or service until documented in a separate written agreement
          signed by both parties.
        </p>
        <h2>3. Eligibility and acceptable use</h2>
        <p>
          You agree not to misuse the Site, including by attempting to gain
          unauthorized access, introducing malware, scraping in a way that harms
          performance, or using the Site for unlawful purposes.
        </p>
        <h2>4. Intellectual property</h2>
        <p>
          Site design, text, graphics, logos, and other materials are owned by SRX
          or our licensors and are protected by applicable intellectual property laws.
          You may not copy, modify, or distribute them without permission except as
          allowed by law.
        </p>
        <h2>5. Third-party links</h2>
        <p>
          The Site may reference or link to third-party sites or tools (for example,
          map embeds). We are not responsible for third-party content or practices.
        </p>
        <h2>6. Disclaimers</h2>
        <p>
          THE SITE AND ITS CONTENT ARE PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT
          WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING IMPLIED
          WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT, TO THE MAXIMUM EXTENT PERMITTED BY LAW.
        </p>
        <h2>7. Limitation of liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, SRX AND ITS AFFILIATES, OFFICERS,
          DIRECTORS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT,
          INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF
          PROFITS, DATA, OR GOODWILL, ARISING FROM OR RELATED TO YOUR USE OF THE SITE.
        </p>
        <h2>8. Indemnity</h2>
        <p>
          To the extent permitted by law, you agree to indemnify and hold harmless
          SRX from claims arising out of your misuse of the Site or violation of
          these Terms.
        </p>
        <h2>9. Governing law and venue</h2>
        <p>
          These Terms are governed by the laws of the State in which Merchant
          Provider SRX LLC is organized, without regard to conflict-of-law rules,
          except where preempted by federal law. Subject to applicable law, you agree
          to exclusive jurisdiction and venue in the state or federal courts located
          in that State for disputes arising from these Terms or the Site. Replace
          this paragraph with the venue your counsel selects.
        </p>
        <h2>10. Changes</h2>
        <p>
          We may update these Terms by posting a revised version on the Site.
          Continued use after the effective date constitutes acceptance of the updated
          Terms.
        </p>
        <h2>11. Contact</h2>
        <p>
          Merchant Provider SRX LLC
          <br />
          12849 Climbing Ivy Dr
          <br />
          <a href="mailto:raexyhacks68@gmail.com">
            raexyhacks68@gmail.com
          </a>
        </p>
        <p className="doc__related">
          <Link href="/legal">Legal overview</Link>
          {" · "}
          <Link href="/privacy-policy">Privacy Policy</Link>
          {" · "}
          <Link href="/compliance-notice">Compliance Notice</Link>
        </p>
      </article>
    </LegalShell>
  );
}
