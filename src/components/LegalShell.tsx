import Image from "next/image";
import Link from "next/link";
import { LogoSRX } from "@/components/LogoSRX";
import "@/styles/legal-pages.css";

export type LegalShellProps = {
  children: React.ReactNode;
  /** Page title shown in the hero (H1 for accessibility). */
  title: string;
  /** Small label above the title (e.g. “Privacy & data”). */
  eyebrow?: string;
  /** Full-bleed hero image URL (remote Unsplash). */
  heroImage: string;
  heroAlt?: string;
};

export function LegalShell({
  children,
  title,
  eyebrow = "Legal",
  heroImage,
  heroAlt = "",
}: LegalShellProps) {
  return (
    <div className="legal-page">
      <header className="legal-topnav">
        <nav className="legal-topnav__inner">
          <Link className="legal-topnav__logo" href="/" aria-label="SRX home">
            <LogoSRX />
          </Link>
          <Link className="legal-topnav__back" href="/">
            ← Back to site
          </Link>
        </nav>
      </header>

      <section className="legal-hero" aria-labelledby="legal-hero-heading">
        <div className="legal-hero__media">
          <Image
            src={heroImage}
            alt={heroAlt}
            fill
            priority
            className="legal-hero__img"
            sizes="100vw"
          />
          <div className="legal-hero__scrim" aria-hidden />
        </div>
        <div className="legal-hero__content">
          <p className="legal-hero__eyebrow">{eyebrow}</p>
          <h1 id="legal-hero-heading" className="legal-hero__title">
            {title}
          </h1>
        </div>
      </section>

      <main className="legal-main">{children}</main>

      <footer className="legal-footer">
        © 2026 Merchant Provider SRX LLC
      </footer>
    </div>
  );
}
