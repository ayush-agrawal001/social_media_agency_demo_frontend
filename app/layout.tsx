import type { Metadata } from "next";
import { Geist, Manrope } from "next/font/google";
import "./globals.css";
import { getSiteOrigin } from "./site-origin";

const display = Geist({
  variable: "--font-display",
  subsets: ["latin"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const origin = await getSiteOrigin();
  const image = `${origin}/og-minimal.png`;

  return {
    metadataBase: new URL(origin),
    title: "Cinemoon Studios | Video Production & Brand Storytelling",
    description: "Raipur-based video production studio creating short ads, founder documentaries, industrial films, real estate films and House of Vision brand stories.",
    alternates: { canonical: "/" },
    keywords: ["Cinemoon Studios", "video production", "brand storytelling", "founder documentary", "short ad films", "industrial films", "real estate films", "House of Vision", "Raipur production house"],
    authors: [{ name: "Cinemoon Studios" }],
    creator: "Cinemoon Studios",
    publisher: "Cinemoon Studios",
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    },
    icons: { icon: "/studio/cinemoon-logo.jpg", shortcut: "/studio/cinemoon-logo.jpg", apple: "/studio/cinemoon-logo.jpg" },
    openGraph: {
      title: "Cinemoon Studios | Films That Make People Care",
      description: "Short ads, founder documentaries and cinematic brand stories from Raipur.",
      url: "/",
      siteName: "Cinemoon Studios",
      locale: "en_IN",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: "Cinemoon Studios — Films that make people care." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Cinemoon Studios | Films That Make People Care",
      description: "Short ads, founder documentaries and cinematic brand stories from Raipur.",
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
    name: "Cinemoon Studios",
    url: origin,
    logo: `${origin}/studio/cinemoon-logo.jpg`,
    image: `${origin}/og-minimal.png`,
    description: "A Raipur-based video production studio creating short ads, founder documentaries, industrial films, real estate films and cinematic brand stories.",
    email: "info@cinemoonstudios.com",
    telephone: "+91 77738 39884",
    areaServed: "India",
    founder: { "@type": "Person", name: "Aishwarya Sharma" },
    sameAs: ["https://www.instagram.com/cinemoon.studios"],
    knowsAbout: ["Film production", "Short ad films", "Founder documentaries", "Brand storytelling", "Industrial films", "Real estate films", "Social video", "Post-production"],
  };

  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
