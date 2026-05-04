"use client";

import { useEffect } from "react";

function scrollMaxY() {
  return Math.max(
    0,
    document.documentElement.scrollHeight - window.innerHeight,
  );
}

/**
 * Blocks rubber-band scroll past the document top or bottom. Complements
 * `overscroll-behavior` on html/body/.site-root. Skips events inside overlays
 * (Get Started modal, mobile nav drawer, FAQ panel) so nested scroll still works.
 */
export function OverscrollGuard() {
  useEffect(() => {
    const skipRubberBand = (t: EventTarget | null) =>
      t instanceof Element &&
      (t.closest(".gs-modal") ||
        t.closest(".nav__drawer") ||
        t.closest(".trustFaq__panel"));

    const onWheel = (e: WheelEvent) => {
      if (skipRubberBand(e.target)) return;
      const y = window.scrollY;
      const maxY = scrollMaxY();
      if (e.deltaY < 0 && y <= 0) {
        e.preventDefault();
        return;
      }
      if (e.deltaY > 0 && y >= maxY - 0.5) {
        e.preventDefault();
      }
    };

    let touchStartY = 0;

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) touchStartY = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      if (skipRubberBand(e.target)) return;
      const y = e.touches[0].clientY;
      const scrollY = window.scrollY;
      const maxY = scrollMaxY();
      if (scrollY <= 0 && y > touchStartY) {
        e.preventDefault();
        return;
      }
      if (scrollY >= maxY - 0.5 && y < touchStartY) {
        e.preventDefault();
      }
    };

    const opts = { passive: false, capture: true } as const;
    document.addEventListener("wheel", onWheel, opts);
    document.addEventListener("touchstart", onTouchStart, { passive: true, capture: true });
    document.addEventListener("touchmove", onTouchMove, opts);

    return () => {
      document.removeEventListener("wheel", onWheel, true);
      document.removeEventListener("touchstart", onTouchStart, true);
      document.removeEventListener("touchmove", onTouchMove, true);
    };
  }, []);

  return null;
}
