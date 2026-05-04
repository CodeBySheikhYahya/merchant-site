"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect } from "react";

/**
 * Lenis smooth scrolling (wheel + touch + in-page anchors). Skipped when the
 * user prefers reduced motion. CSS `scroll-behavior: smooth` stays in
 * globals as a no-JS fallback; while Lenis runs we set `scroll-behavior:
 * auto` on `<html>` to avoid double-smoothing.
 */
export function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    const html = document.documentElement;
    const previousScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    const lenis = new Lenis({
      autoRaf: true,
      autoToggle: true,
      anchors: true,
      allowNestedScroll: true,
      naiveDimensions: true,
      stopInertiaOnNavigate: true,
      syncTouch: true,
      lerp: 0.08,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    return () => {
      lenis.destroy();
      html.style.scrollBehavior = previousScrollBehavior;
    };
  }, []);

  return null;
}
