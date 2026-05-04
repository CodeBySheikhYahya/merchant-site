import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy — Merchant Provider SRX LLC",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalShell>
      <article className="doc">
        <h1>Privacy Policy</h1>
        <p className="meta">Merchant Provider SRX LLC · Last updated: May 4, 2026</p>
        <p className="banner">
          This policy is a starting template for your website. Have qualified legal
          counsel review and adapt it before you rely on it for compliance.
        </p>
        <h2>1. Who we are</h2>
        <p>
          This website is operated by <strong>Merchant Provider SRX LLC</strong>{" "}
          (“SRX,” “we,” “us,” or “our”). Contact:{" "}
          <a href="mailto:raexyhacks68@gmail.com">
            raexyhacks68@gmail.com
          </a>
          <br />
          Business address: 12849 Climbing Ivy Dr.
        </p>
        <h2>2. Information we may collect</h2>
        <p>
          Depending on how you interact with us, we may collect categories of
          information such as:
        </p>
        <ul>
          <li>
            Identifiers and business contact details you submit through forms or
            email (e.g., name, company, email address, phone number).
          </li>
          <li>
            Technical data commonly logged by web servers and analytics tools
            (e.g., IP address, device type, browser, approximate location derived
            from IP, pages viewed, and timestamps).
          </li>
          <li>
            Records of communications you have with us relating to services or
            inquiries.
          </li>
        </ul>
        <h2>3. How we use information</h2>
        <p>
          We use information to operate this site, respond to requests, improve
          security and performance, comply with law, and pursue legitimate business
          purposes you would reasonably expect.
        </p>
        <h2>4. Cookies and similar technologies</h2>
        <p>
          We may use cookies or similar technologies where necessary for site
          functionality or analytics. You can control many cookies through your
          browser settings.
        </p>
        <h2>5. Sharing</h2>
        <p>
          We do not sell your personal information. We may share information with
          service providers who assist us (for example, hosting, email, or
          analytics), where required by law, or in connection with a business
          transaction subject to appropriate safeguards.
        </p>
        <h2>6. Retention</h2>
        <p>
          We retain information only as long as needed for the purposes described in
          this policy, unless a longer retention period is required or permitted by
          law.
        </p>
        <h2>7. Security</h2>
        <p>
          We implement reasonable administrative, technical, and organizational
          measures designed to protect information. No method of transmission or
          storage is completely secure.
        </p>
        <h2>8. Your choices and rights</h2>
        <p>
          Depending on your jurisdiction, you may have rights to access, correct,
          delete, or restrict certain processing of your personal information, or
          to object to certain processing. To exercise rights, contact us using the
          email above. We may need to verify your request.
        </p>
        <h2>9. Children</h2>
        <p>
          This site is not directed to children under 16, and we do not knowingly
          collect personal information from children.
        </p>
        <h2>10. International transfers</h2>
        <p>
          If you access this site from outside the United States, your information
          may be processed in the United States or other countries where privacy laws
          may differ.
        </p>
        <h2>11. Changes</h2>
        <p>
          We may update this policy from time to time. The “Last updated” date will
          change when we post revisions.
        </p>
        <h2>12. Contact</h2>
        <p>
          For privacy questions, contact{" "}
          <a href="mailto:raexyhacks68@gmail.com">
            raexyhacks68@gmail.com
          </a>
          .
        </p>
        <p style={{ marginTop: 40 }}>
          <Link href="/legal">Legal overview</Link>
          {" · "}
          <Link href="/terms-of-service">Terms of Service</Link>
          {" · "}
          <Link href="/compliance-notice">Compliance Notice</Link>
        </p>
      </article>
    </LegalShell>
  );
}
