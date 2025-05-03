import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// TODO: import SF Text and SF Icons

export const metadata: Metadata = {
  title: "iPhone 16 Pro et iPhone 16 Pro Max - Clone (FR)",
  description: "iPhone 16 Pro et iPhone 16 Pro Max. Design en titane résistant. Commande de l’appareil photo. Dolby Vision 4K à 120 i/s. Puce A18 Pro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-[family-name:var(--font-geist-sans) font-[family-name:var(--font-geist-mono)`}
      >
        {children}
      </body>
    </html>
  );
}
