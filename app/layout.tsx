import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://acrorefrigeration.com.au"),
  title: {
    template: "%s | Acro Refrigeration",
    default: "Acro Refrigeration | Commercial Refrigeration Repair & Maintenance Brisbane",
  },
  description:
    "24/7 emergency repairs, preventative maintenance plans and cold room builds for commercial refrigeration systems. Fast response, HACCP-certified. Serving Brisbane & SE Queensland.",
  authors: [{ name: "Acro Refrigeration" }],
  openGraph: {
    type: "website",
    siteName: "Acro Refrigeration",
    images: [{ url: "/og-image.jpg", alt: "Acro Refrigeration" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
