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
    title: "Cinemoon Studios | Ad Agency & Production House",
    description: "Cinemoon Studios turns ideas into ad films, brand stories, social content, photography and complete production experiences.",
    alternates: { canonical: "/" },
    keywords: ["Cinemoon Studios", "production house", "ad agency", "film production", "content creation", "branding agency", "social media marketing", "Raipur production house"],
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
      title: "Cinemoon Studios | From Vision to Reality",
      description: "An ad agency and production house creating films, brand stories and social content.",
      url: "/",
      siteName: "Cinemoon Studios",
      locale: "en_IN",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: "Cinemoon Studios — From vision to reality." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Cinemoon Studios | From Vision to Reality",
      description: "An ad agency and production house creating films, brand stories and social content.",
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
    image: `${origin}/og.png`,
    description: "An ad agency and production house creating films, brand stories, social content, photography and branded experiences.",
    email: "info@cinemoonstudios.com",
    telephone: "+91 77738 39884",
    areaServed: "India",
    founder: { "@type": "Person", name: "Aishwarya Sharma" },
    sameAs: ["https://www.instagram.com/cinemoon.studios"],
    knowsAbout: ["Film production", "Ad films", "Content creation", "Product photography", "Branding", "Social media marketing", "Documentaries", "Music videos"],
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
