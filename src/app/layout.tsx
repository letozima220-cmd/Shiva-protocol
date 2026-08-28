import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SHIVA Protocol",
  description: "Autonomous AI Governance Protocol",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-[#0a0a0f] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
