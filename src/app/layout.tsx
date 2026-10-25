import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geist = localFont({
  src: "../../node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2",
  variable: "--font-geist-sans",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Yash Raj Sharma | Full-Stack Developer",
  description:
    "Yash Raj Sharma builds useful digital products across product interfaces, backend systems, and data platforms.",
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
