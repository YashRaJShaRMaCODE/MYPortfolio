import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteUrl } from "../lib/site";

const geist = localFont({
  src: "../../node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2",
  variable: "--font-geist-sans",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Yash Raj Sharma | Full-Stack Developer",
  description:
    "Yash Raj Sharma builds useful digital products across product interfaces, backend systems, and data platforms.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Yash Raj Sharma",
    title: "Yash Raj Sharma | Full-Stack Developer",
    description:
      "Useful software across product interfaces, backend systems, and data platforms.",
    images: [{ url: "/projects/subwave-dashboard.webp", alt: "A live radio platform built by Yash Raj Sharma" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Raj Sharma | Full-Stack Developer",
    description:
      "Useful software across product interfaces, backend systems, and data platforms.",
    images: ["/projects/subwave-dashboard.webp"],
  },
  keywords: [
    "Yash Raj Sharma",
    "full-stack developer",
    "Django",
    "Next.js",
    "TypeScript",
    "Python",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
