import type { Metadata } from "next";
import { Cormorant_Garamond, Cinzel, Manrope, JetBrains_Mono } from "next/font/google";
import AmbientBackground from "@/components/layout/AmbientBackground";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "360 Integrated Systems — Premium Low Voltage Integration",
    template: "%s | 360 Integrated Systems",
  },
  description:
    "World-class security, automation, and AV integration for luxury homes and premium businesses.",
  keywords: ["CCTV", "home automation", "security systems", "smart home", "low voltage"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`dark ${cormorant.variable} ${cinzel.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        {/* Fixed ambient glow canvas — sits at z-0, behind all page content */}
        <AmbientBackground />
        {/* All page content lives at z-[1], above the ambient layer */}
        <div className="relative z-[1] flex min-h-screen flex-col">
          {children}
        </div>
        {/* Global floating WhatsApp CTA — renders above all page content */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
