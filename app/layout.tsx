import type { Metadata, Viewport } from "next";
import { Great_Vibes, Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FDF8F5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://arun-kiruthika-babyshower.vercel.app"),
  title: "Arun & Kiruthika | Baby Shower Invitation",
  description:
    "Join Arun & Kiruthiga as they celebrate a beautiful new chapter filled with tiny feet, big dreams and endless love.",
  keywords: [
    "Arun and Kiruthika",
    "Baby Shower Invitation",
    "Digital Invitation",
    "Mettur Kolathur",
    "Palamuthir AC Hall",
  ],
  authors: [{ name: "Arun & Kiruthika" }],
  openGraph: {
    title: "Arun & Kiruthika | Baby Shower Invitation",
    description:
      "Join Arun & Kiruthiga as they celebrate a beautiful new chapter filled with tiny feet, big dreams and endless love.",
    url: "https://arun-kiruthika-babyshower.vercel.app",
    siteName: "Arun & Kiruthika Baby Shower",
    images: [
      {
        url: "/images/invitation-card.png",
        width: 853,
        height: 1280,
        alt: "Arun & Kiruthika Baby Shower Invitation",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arun & Kiruthika | Baby Shower Invitation",
    description:
      "Join Arun & Kiruthiga as they celebrate a beautiful new chapter filled with tiny feet, big dreams and endless love.",
    images: ["/images/invitation-card.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${greatVibes.variable} ${cormorant.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <body className="font-sans bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-blush-dark)] selection:text-[var(--color-rose)]">
        {children}
      </body>
    </html>
  );
}
