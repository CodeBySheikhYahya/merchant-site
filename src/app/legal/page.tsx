import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/LegalShell";
import { IMG_LEGAL_HUB } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Legal — Merchant Provider SRX LLC",
};

export default function LegalPage() {
  return (
    <LegalShell
      title="Legal"
      eyebrow="Policies & notices"
      heroImage={IMG_LEGAL_HUB}
      heroAlt=""
    >
      <article className="doc">
        <p className="meta">Merchant Provider SRX LLC · Policies and notices</p>
        <p className="banner">
          This page summarizes where to find our key legal documents. The documents
          themselves control if there is any inconsistency with this summary.
        </p>
        <h2>Entity</h2>
        <p>
          <strong>Merchant Provider SRX LLC</strong>
          <br />
          12849 Climbing Ivy Dr
          <br />
          Email:{" "}
          <a href="mailto:raexyhacks68@gmail.com">
            raexyhacks68@gmail.com
          </a>
        </p>
        <h2>Policies</h2>
        <div className="link-grid">
          <Link href="/privacy-policy">Privacy Policy — personal information</Link>
          <Link href="/terms-of-service">Terms of Service — use of this website</Link>
          <Link href="/compliance-notice">Compliance Notice — regulatory disclaimers</Link>
        </div>
        <h2>Regulatory disclaimer (short form)</h2>
        <p>
          Payment, money transmission, and merchant acquiring rules vary by
          jurisdiction and product. Nothing on this website is a substitute for
          advice from qualified legal, compliance, or tax professionals. Offerings,
          if any, are subject to contracts, underwriting, and applicable law.
        </p>
        <h2>Updates</h2>
        <p>
          We may revise posted policies from time to time. Each document shows a
          “Last updated” line when we make substantive edits.
        </p>
      </article>
    </LegalShell>
  );
}
