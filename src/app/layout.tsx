import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} h-full`}>
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
