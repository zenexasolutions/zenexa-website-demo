import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zenexa — Healthcare BPO Services",
    template: "%s | Zenexa",
  },
  description:
    "Maximize healthcare revenue with end-to-end BPO solutions: RCM, coding, claims, denial management, and HEDIS.",
  keywords: [
    "Healthcare BPO",
    "Revenue Cycle Management",
    "Medical Coding",
    "Claims Processing",
    "Denial Management",
    "HEDIS",
    "HIPAA",
  ],
  metadataBase: new URL("https://www.zenexainfotech.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.zenexainfotech.com/",
    title: "Zenexa — Healthcare BPO Services",
    description:
      "AI-enhanced healthcare BPO delivering 99%+ accuracy and faster reimbursements.",
    siteName: "Zenexa",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenexa — Healthcare BPO Services",
    description:
      "End-to-end healthcare BPO: RCM, coding, claims, denial management, and HEDIS.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#184f5d",
  width: "device-width",
  initialScale: 1,
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Header />
        <main id="main-content" style={{ minHeight: '100vh' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
