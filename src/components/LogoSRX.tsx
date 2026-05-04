/**
 * Vector wordmark “SRX” — Inter-style weight / letterspacing to match pencil-new-FDS.pen.
 * Inherits color via currentColor (use on dark backgrounds).
 */
export function LogoSRX({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      role="img"
      aria-label="SRX"
      viewBox="0 0 120 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>SRX</title>
      <text
        x="0"
        y="19.5"
        fill="currentColor"
        style={{
          fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
          fontSize: "18px",
          fontWeight: 600,
          letterSpacing: "0.32em",
        }}
      >
        SRX
      </text>
    </svg>
  );
}
