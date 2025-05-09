import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
	description:
		"iPhone 16 Pro et iPhone 16 Pro Max. Design en titane résistant. Commande de l’appareil photo. Dolby Vision 4K à 120 i/s. Puce A18 Pro.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<head>
				<Script
					src="https://kit.fontawesome.com/064ddf1845.js"
					crossOrigin="anonymous"
					strategy="afterInteractive"
				></Script>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
