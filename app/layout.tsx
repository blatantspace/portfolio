import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blatant Space - AI Art Direction & Character Design",
  description:
    "Digital artist creating imaginative creatures that bridge nostalgia and cutting-edge technology. AI art direction for fashion, music, and brands.",
  keywords: [
    "AI art",
    "character design",
    "music videos",
    "brand campaigns",
    "DALL-E",
    "generative art",
    "nostalgic art",
  ],
  openGraph: {
    title: "Blatant Space",
    description:
      "A high-tech handshake with the past. AI-generated art that feels handmade.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
