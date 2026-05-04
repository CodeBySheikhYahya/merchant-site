"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { GetStartedButton } from "@/components/GetStarted";
import { LogoSRX } from "@/components/LogoSRX";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { COMPANY_LEGAL_NAME } from "@/lib/company";

const easeOutSoft = [0.22, 1, 0.36, 1] as const;

type NavActive = "home" | "contact" | "about" | undefined;

export function SiteHeader({ active }: { active?: NavActive }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    closeBtnRef.current?.focus();
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [menuOpen, closeMenu]);

  return (
    <header className="nav">
      <Link
        href="/"
        className="nav__logoMark"
        aria-label={`${COMPANY_LEGAL_NAME} home`}
      >
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
        <GetStartedButton className="btn btn--primary btn--sm">
          Get Started
        </GetStartedButton>
      </div>

      <div className="nav__mobileBar">
        <motion.button
          type="button"
          className="nav__menuBtn"
          aria-expanded={menuOpen}
          aria-controls="site-nav-mobile-panel"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
          whileTap={reduceMotion ? undefined : { scale: 0.96 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="nav-close"
                className="nav__menuBtnIcon"
                aria-hidden
                initial={reduceMotion ? false : { opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.88 }}
                transition={{
                  duration: reduceMotion ? 0.01 : 0.16,
                  ease: easeOutSoft,
                }}
              >
                <X strokeWidth={1.75} size={22} />
              </motion.span>
            ) : (
              <motion.span
                key="nav-open"
                className="nav__menuBtnIcon"
                aria-hidden
                initial={reduceMotion ? false : { opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.88 }}
                transition={{
                  duration: reduceMotion ? 0.01 : 0.16,
                  ease: easeOutSoft,
                }}
              >
                <Menu strokeWidth={1.75} size={22} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <>
            <motion.button
              key="nav-backdrop"
              type="button"
              className="nav__drawerBackdrop"
              aria-label="Close menu"
              onClick={closeMenu}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
              transition={{
                duration: reduceMotion ? 0.01 : 0.2,
                ease: easeOutSoft,
              }}
            />
            <motion.div
              key="nav-drawer"
              id="site-nav-mobile-panel"
              className="nav__drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              initial={
                reduceMotion
                  ? { x: 0, opacity: 1 }
                  : { x: "100%", opacity: 0.96 }
              }
              animate={{ x: 0, opacity: 1 }}
              exit={
                reduceMotion
                  ? { x: 0, opacity: 1 }
                  : { x: "100%", opacity: 0.96 }
              }
              transition={{
                duration: reduceMotion ? 0.01 : 0.28,
                ease: easeOutSoft,
              }}
            >
              <div className="nav__drawerHead">
                <span className="nav__drawerTitle">Menu</span>
                <button
                  ref={closeBtnRef}
                  type="button"
                  className="nav__drawerClose"
                  aria-label="Close menu"
                  onClick={closeMenu}
                >
                  <X strokeWidth={1.75} size={20} aria-hidden />
                </button>
              </div>
              <nav
                className="nav__drawerNav"
                aria-label="Mobile primary"
                data-lenis-prevent
              >
                <Link
                  href="/"
                  className={`nav__drawerLink${active === "home" ? " nav__drawerLink--active" : ""}`}
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <Link
                  href="/#services"
                  className="nav__drawerLink"
                  onClick={closeMenu}
                >
                  Services
                </Link>
                <span className="nav__drawerMuted">Platform</span>
                <Link
                  href="/#compliance"
                  className="nav__drawerLink"
                  onClick={closeMenu}
                >
                  Compliance
                </Link>
                <Link
                  href="/about"
                  className={`nav__drawerLink${active === "about" ? " nav__drawerLink--active" : ""}`}
                  onClick={closeMenu}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className={`nav__drawerLink${active === "contact" ? " nav__drawerLink--active" : ""}`}
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </nav>
              <div className="nav__drawerFoot">
                <GetStartedButton
                  className="btn btn--primary btn--sm nav__drawerCta"
                  onClick={closeMenu}
                >
                  Get Started
                </GetStartedButton>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
