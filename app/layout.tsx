import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteConfig.name} ${siteConfig.nameAr} | ${siteConfig.description}`,
  description: `${siteConfig.nameAr} نيو كايرو - ${siteConfig.description}. فلل، توين هاوس، تاون هاوس وشقق سكنية بأنظمة سداد مرنة. تطوير ${siteConfig.developerAr}.`,
  keywords: [
    "هايد بارك سنترال",
    "Hyde Park Central",
    "التجمع السادس",
    "نيو كايرو",
    "كمبوند",
    "فلل",
    "شقق",
    "هايد بارك",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
