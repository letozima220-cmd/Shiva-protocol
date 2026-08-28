import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import { Shell } from "@/components/layout/Shell";

const space = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space",
});
const manrope = Manrope({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "SHIVA Protocol — Avatar · MCP · A2A",
  description:
    "Умный аватар с руками MCP, навыками, памятью, маркетом и сетью агентов. NEXUS × SHIVA.",
  keywords: ["SHIVA", "NEXUS", "MCP", "A2A", "аватар", "агенты"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${space.variable} ${manrope.variable}`}>
      <body className="font-manrope antialiased">
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
