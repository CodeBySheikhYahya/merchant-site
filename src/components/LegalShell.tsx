import Link from "next/link";
import { LogoSRX } from "@/components/LogoSRX";
import "@/styles/legal-pages.css";

export function LegalShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="legal-page">
      <header>
        <nav className="nav">
          <Link className="logo legalLogoLink" href="/" aria-label="SRX home">
            <LogoSRX />
          </Link>
          <Link className="back" href="/">
            ← Back to site
          </Link>
        </nav>
      </header>
      {children}
      <footer>© 2026 Merchant Provider SRX LLC</footer>
    </div>
  );
}
