import { COMPANY_LEGAL_NAME } from "@/lib/company";

/**
 * Vector wordmark “SRX” — Barlow Condensed (loaded in layout) for a bold logistics-style mark.
 * Inherits color via currentColor (use on dark backgrounds).
 */
export function LogoSRX({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      role="img"
      aria-label={COMPANY_LEGAL_NAME}
      viewBox="0 0 128 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{COMPANY_LEGAL_NAME}</title>
      <text
        x="0"
        y="25"
        fill="currentColor"
        style={{
          fontFamily:
            'var(--font-logo-srx), "Barlow Condensed", ui-sans-serif, system-ui, sans-serif',
          fontSize: "28px",
          fontWeight: 700,
          letterSpacing: "0.14em",
        }}
      >
        SRX
      </text>
    </svg>
  );
}
