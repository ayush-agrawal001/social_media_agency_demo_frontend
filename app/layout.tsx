import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { getSiteOrigin } from "./site-origin";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const origin = await getSiteOrigin();
  const image = `${origin}/og.png`;

  return {
    metadataBase: new URL(origin),
    title: "Cinemoon — Social-First Creative Agency",
    description: "Campaigns, content and digital experiences that make brands impossible to scroll past.",
    alternates: { canonical: "/" },
    keywords: ["social media agency", "creative agency", "content production", "social strategy", "paid social", "influencer marketing"],
    authors: [{ name: "Cinemoon" }],
    creator: "Cinemoon",
    publisher: "Cinemoon",
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    },
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "Cinemoon — Impossible to Scroll Past",
      description: "A social-first creative agency moving at the speed of culture.",
      url: "/",
      siteName: "Cinemoon",
      locale: "en_GB",
      type: "website",
      images: [{ url: image, width: 1729, height: 910, alt: "Cinemoon — Social-first creative agency." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Cinemoon — Impossible to Scroll Past",
      description: "A social-first creative agency moving at the speed of culture.",
      images: [image],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const origin = await getSiteOrigin();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Cinemoon",
    url: origin,
    logo: `${origin}/favicon.svg`,
    image: `${origin}/og.png`,
    description: "A social-first creative agency producing campaigns, content and digital experiences that move at the speed of culture.",
    email: "hello@cinemoon.agency",
    areaServed: "Worldwide",
    knowsAbout: ["Social media strategy", "Content production", "Paid social", "Influencer marketing", "Brand campaigns", "Community management"],
  };

  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
