import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import { GetStartedProvider } from "@/components/GetStarted";
import { OverscrollGuard } from "@/components/OverscrollGuard";
import { SmoothScroll } from "@/components/SmoothScroll";
import { COMPANY_LEGAL_NAME } from "@/lib/company";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

/** Bold condensed wordmark — freight / logistics energy without changing body UI. */
const logoSrx = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-logo-srx",
  display: "swap",
});

export const metadata: Metadata = {
  title: COMPANY_LEGAL_NAME,
  description:
    "Routing, settlement, and risk infrastructure for growing merchant portfolios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${logoSrx.variable}`}>
      <body className={inter.className}>
        <SmoothScroll />
        <OverscrollGuard />
        <div className="site-root">
          <GetStartedProvider>{children}</GetStartedProvider>
        </div>
      </body>
    </html>
  );
}
