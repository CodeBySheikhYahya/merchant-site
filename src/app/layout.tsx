import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GetStartedProvider } from "@/components/GetStarted";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Merchant Provider SRX LLC",
  description:
    "Routing, settlement, and risk infrastructure for growing merchant portfolios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <GetStartedProvider>{children}</GetStartedProvider>
      </body>
    </html>
  );
}
