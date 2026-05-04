import Link from "next/link";
import { GetStartedButton } from "@/components/GetStarted";
import { LogoSRX } from "@/components/LogoSRX";

type NavActive = "home" | "contact" | "about" | undefined;

export function SiteHeader({ active }: { active?: NavActive }) {
  return (
    <header className="nav">
      <Link href="/" className="nav__logoMark" aria-label="SRX home">
        <LogoSRX />
      </Link>
      <nav className="nav__links" aria-label="Primary">
        <Link
          href="/"
          className={`nav__link${active === "home" ? " nav__link--active" : ""}`}
        >
          Home
        </Link>
        <Link href="/#services" className="nav__link">
          Services
        </Link>
        <span className="nav__link">Platform</span>
        <Link href="/#compliance" className="nav__link">
          Compliance
        </Link>
        <Link
          href="/about"
          className={`nav__link${active === "about" ? " nav__link--active" : ""}`}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={`nav__link${active === "contact" ? " nav__link--active" : ""}`}
        >
          Contact
        </Link>
      </nav>
      <div className="nav__cta">
        <span className="nav__ctaText">Talk to Sales</span>
        <GetStartedButton className="btn btn--primary btn--sm">
          Get Started
        </GetStartedButton>
      </div>
      <div className="nav__mobile">
        <Link
          href="/"
          className={`nav__mobileLink${active === "home" ? " nav__mobileLink--active" : ""}`}
        >
          Home
        </Link>
        <Link href="/#services" className="nav__mobileLink">
          Services
        </Link>
        <Link href="/#compliance" className="nav__mobileLink">
          Compliance
        </Link>
        <Link
          href="/about"
          className={`nav__mobileLink${active === "about" ? " nav__mobileLink--active" : ""}`}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={`nav__mobileLink${active === "contact" ? " nav__mobileLink--active" : ""}`}
        >
          Contact
        </Link>
        <GetStartedButton className="btn btn--primary btn--sm">
          Get Started
        </GetStartedButton>
      </div>
    </header>
  );
}
