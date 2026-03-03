import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ambiente Digital | Cartelería Neón para Eventos",
  description:
    "Cartelería y estructuras de neón personalizadas para eventos sociales y corporativos en Argentina.",
  keywords: [
    "carteles neon",
    "eventos neon",
    "espejos infinitos",
    "ambientación eventos",
    "neon argentina",
  ],
  authors: [{ name: "Ambiente Digital" }],
  creator: "Ambiente Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {children}
      <SpeedInsights />
      <Analytics />
      </body>
    </html>
  );
}
