import type { Metadata } from "next";
import { Space_Grotesk, Source_Serif_4, IBM_Plex_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Quantum Synergy Limited | Building the Future, Powering Progress",
  description:
    "Quantum Synergy Limited is a diversified multi-sector conglomerate operating across all 10 states of the Republic of South Sudan — Construction, Technology, Media, Financial Services, and Oil & Gas.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Quantum Synergy Limited | Building the Future, Powering Progress",
    description:
      "A diversified multi-sector conglomerate operating across all 10 states of the Republic of South Sudan.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Quantum Synergy Limited" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantum Synergy Limited | Building the Future, Powering Progress",
    description:
      "A diversified multi-sector conglomerate operating across all 10 states of the Republic of South Sudan.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${sourceSerif.variable} ${plexMono.variable} h-full`}
    >
      <body className="min-h-full">
        <div className="ambient-mesh" aria-hidden="true" />
        <div className="ambient-grain" aria-hidden="true" />
        <Header />
        <main id="top">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
