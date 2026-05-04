import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Compliance Notice — Merchant Provider SRX LLC",
};

export default function CompliancePage() {
  return (
    <LegalShell>
      <article className="doc">
        <h1>Compliance Notice</h1>
        <p className="meta">Merchant Provider SRX LLC · Last updated: May 4, 2026</p>
        <p className="banner">
          Customize this notice with your actual licenses, registrations, sponsor
          banks, card network status, and risk disclosures. This version is
          intentionally generic.
        </p>
        <h2>1. Purpose</h2>
        <p>
          This notice provides high-level compliance context for visitors. It does
          not replace agreements, disclosures, or statements provided at account
          opening or in product-specific materials.
        </p>
        <h2>2. Not an offer of regulated services</h2>
        <p>
          Unless expressly stated in a signed agreement, descriptions of capabilities
          on this website are illustrative. Availability of any service depends on
          due diligence, risk review, geography, and applicable law.
        </p>
        <h2>3. PCI and security posture</h2>
        <p>
          If you store, process, or transmit cardholder data, you must maintain
          controls appropriate to your environment. References to security practices
          on the Site are not a certification or attestation unless we publish a
          specific report or letter for your relationship.
        </p>
        <h2>4. AML / sanctions</h2>
        <p>
          We may conduct screening and monitoring as required by law or by our risk
          policies. We may refuse or exit relationships where required information
          cannot be obtained or where risk is outside our appetite.
        </p>
        <h2>5. Recordkeeping</h2>
        <p>
          We may retain records as required by law, contract, or legitimate business
          needs, including dispute resolution and audit.
        </p>
        <h2>6. No waiver</h2>
        <p>Failure to enforce any provision is not a waiver of our rights.</p>
        <h2>7. Contact</h2>
        <p>
          Compliance inquiries:{" "}
          <a href="mailto:raexyhacks68@gmail.com">
            raexyhacks68@gmail.com
          </a>
          <br />
          Merchant Provider SRX LLC · 12849 Climbing Ivy Dr
        </p>
        <p style={{ marginTop: 40 }}>
          <Link href="/legal">Legal overview</Link>
          {" · "}
          <Link href="/privacy-policy">Privacy Policy</Link>
          {" · "}
          <Link href="/terms-of-service">Terms of Service</Link>
        </p>
      </article>
    </LegalShell>
  );
}
