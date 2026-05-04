import Image from "next/image";
import Link from "next/link";
import { LogoSRX } from "@/components/LogoSRX";
import { COMPANY_LEGAL_NAME } from "@/lib/company";
import "@/styles/legal-pages.css";

export type LegalShellProps = {
  children: React.ReactNode;
  /** Page title shown in the hero (H1 for accessibility). */
  title: string;
  /** Small label above the title (e.g. “Privacy & data”). */
  eyebrow?: string;
  /** Full-bleed hero image URL (remote Unsplash). */
  heroImage: string;
  /** Optional wider shot for viewports ≥1024px (e.g. privacy: mobile vs desktop art). */
  heroImageDesktop?: string;
  heroAlt?: string;
  heroAltDesktop?: string;
};

export function LegalShell({
  children,
  title,
  eyebrow = "Legal",
  heroImage,
  heroImageDesktop,
  heroAlt = "",
  heroAltDesktop,
}: LegalShellProps) {
  return (
    <div className="legal-page">
      <header className="legal-topnav">
        <nav className="legal-topnav__inner">
          <Link
            className="legal-topnav__logo"
            href="/"
            aria-label={`${COMPANY_LEGAL_NAME} home`}
          >
            <LogoSRX />
          </Link>
          <Link className="legal-topnav__back" href="/">
            ← Back to site
          </Link>
        </nav>
      </header>

      <section className="legal-hero" aria-labelledby="legal-hero-heading">
        <div className="legal-hero__media">
          {heroImageDesktop ? (
            <>
              <Image
                src={heroImage}
                alt={heroAlt}
                fill
                priority
                className="legal-hero__img legal-hero__img--narrow"
                sizes="100vw"
              />
              <Image
                src={heroImageDesktop}
                alt={heroAltDesktop ?? heroAlt}
                fill
                priority
                className="legal-hero__img legal-hero__img--wide"
                sizes="100vw"
              />
            </>
          ) : (
            <Image
              src={heroImage}
              alt={heroAlt}
              fill
              priority
              className="legal-hero__img"
              sizes="100vw"
            />
          )}
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
        © 2026 {COMPANY_LEGAL_NAME}
      </footer>
    </div>
  );
}
