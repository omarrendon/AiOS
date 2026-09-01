import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { SmoothAnchors } from "./_components/smooth-anchors";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AiOS · Soluciones tecnológicas",
  description:
    "Desarrollo de software, automatización con IA y consultoría estratégica para optimizar la gestión de equipos remotos.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${ibmPlexSans.variable} h-full scroll-pt-24 scroll-smooth font-sans antialiased motion-reduce:scroll-auto`}
    >
      <body className="flex min-h-full flex-col">
        <SmoothAnchors />
        {children}
      </body>
    </html>
  );
}
