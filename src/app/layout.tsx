import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "National Conference | Vellalar College of Pharmacy",
  description:
    "Artificial Intelligence and machine learning: A Game changer in the Pharma field - National Conference at Vellalar College of Pharmacy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="glassmorphism-container min-h-screen flex flex-col">
          <Header />
          <div className="pt-20 flex-1 flex flex-col">
            {children}
            <Analytics />
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
