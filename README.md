# Merchant Provider SRX — Next.js (static)

Static export matching **`pencil-new-FDS.pen`** (desktop 1440 / mobile 390): typography, spacing, colors, sections, and imagery sourced from that design file.

## Commands

```bash
cd web
npm install
npm run dev      # http://localhost:3000
npm run build    # output → web/out
```

### `Cannot find module './605.js'` (or similar chunk errors)

That almost always means a **stale or half-written `.next`** folder (e.g. dev server stopped mid-compile, antivirus touched files, or two `next dev` instances). Fix:

```bash
cd web
npm run clean
npm run dev
```

Or one shot: `npm run dev:fresh`. `npm run clean` removes **`.next`** and **`out`** (you’ll need `npm run build` again before publishing `out/`).

If it still happens, close every Node process, delete `web/.next` manually, then `npm run dev` again.

`next.config.ts` sets `output: "export"` so `npm run build` produces a static site you can host on any static host (S3, Netlify, GitHub Pages with `out/` as publish directory).

## Routes

| Path | |
|------|---|
| `/` | Marketing homepage |
| `/legal` | Legal overview |
| `/privacy-policy` | Privacy Policy |
| `/terms-of-service` | Terms of Service |
| `/compliance-notice` | Compliance Notice |

## Design source

Design tokens and layout rules are implemented in `src/app/globals.css` from the Pencil document at `C:\Users\MTC\Documents\pencil-new-FDS.pen` (read via Pencil MCP). Update the pen first, then align CSS/components if you change the design.
