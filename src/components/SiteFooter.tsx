import Link from "next/link";
import { LogoSRX } from "@/components/LogoSRX";
import {
  COMPANY_ADDRESS_STREET,
  COMPANY_EMAIL,
  COMPANY_LEGAL_NAME,
  COMPANY_MAILTO,
} from "@/lib/company";

export function SiteFooter() {
  return (
    <footer className="ftr">
      <div className="ftr__rule" />
      <div className="ftr__band">
        <div className="ftr__shell shell">
          <div className="ftr__grid">
            <div className="ftr__col ftr__col--brand">
              <Link
                href="/"
                className="ftr__brandMark"
                aria-label={`${COMPANY_LEGAL_NAME} home`}
              >
                <LogoSRX className="ftr__logoSvg" />
              </Link>
              <p className="ftr__tag">
                Enterprise merchant payment services for teams that demand
                clarity, control, and compliance.
              </p>
            </div>

            <nav
              className="ftr__col ftr__col--links ftr__col--company"
              aria-label="Company"
            >
              <span className="ftr__h">Company</span>
              <Link className="ftr__a" href="/about">
                About
              </Link>
              <Link className="ftr__a" href="/contact">
                Contact
              </Link>
              <Link className="ftr__a" href="/">
                Home
              </Link>
              <Link className="ftr__a" href="/legal">
                Legal overview
              </Link>
            </nav>

            <nav
              className="ftr__col ftr__col--links ftr__col--legal"
              aria-label="Legal"
            >
              <span className="ftr__h">Legal</span>
              <Link className="ftr__a" href="/privacy-policy">
                Privacy Policy
              </Link>
              <Link className="ftr__a" href="/terms-of-service">
                Terms of Service
              </Link>
              <Link className="ftr__a" href="/compliance-notice">
                Compliance Notice
              </Link>
            </nav>

            <nav
              className="ftr__col ftr__col--links ftr__col--product"
              aria-label="Product"
            >
              <span className="ftr__h">Product</span>
              <Link className="ftr__a" href="/#cap-processing">
                Processing
              </Link>
              <Link className="ftr__a" href="/#cap-routing">
                Routing
              </Link>
              <Link className="ftr__a" href="/#cap-integrations">
                Integrations
              </Link>
            </nav>

            <div className="ftr__col ftr__col--hq">
              <span className="ftr__h">Headquarters</span>
              <p className="ftr__hqName">{COMPANY_LEGAL_NAME}</p>
              <p className="ftr__hqAddr">{COMPANY_ADDRESS_STREET}</p>
              <a className="ftr__a ftr__a--email" href={COMPANY_MAILTO}>
                {COMPANY_EMAIL}
              </a>
              <Link className="ftr__a ftr__allContacts" href="/contact">
                All contacts
              </Link>
              <p className="ftr__copy ftr__copy--desktop">
                © 2026 {COMPANY_LEGAL_NAME}. All rights reserved.
              </p>
            </div>
          </div>

          <div className="ftr__mobileZone">
            <p className="ftr__copy ftr__copy--mobile">
              © 2026 {COMPANY_LEGAL_NAME}. All rights reserved.
            </p>
            <p className="ftr__mobileLegal">
              <Link href="/contact">Contact</Link>
              {" · "}
              <Link href="/about">About</Link>
              {" · "}
              <Link href="/privacy-policy">Privacy</Link>
              {" · "}
              <Link href="/terms-of-service">Terms</Link>
              {" · "}
              <Link href="/compliance-notice">Compliance Notice</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
