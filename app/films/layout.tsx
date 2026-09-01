import type { Metadata } from "next";
import "./films.css";

export const metadata: Metadata = {
  title: "Pre-Construction Films — Blatant Space",
  description:
    "Photorealistic films of unbuilt homes. The finished house, on its real lot, in about a week. $700 CAD.",
  metadataBase: new URL("https://blatantspace.com"),
  alternates: {
    canonical: "/films",
  },
  keywords: [
    "pre-construction films",
    "unbuilt homes",
    "real estate video",
    "Winnipeg builders",
  ],
  openGraph: {
    title: "Pre-Construction Films — Blatant Space",
    description:
      "Sell the finished home before the foundation is poured.",
    type: "website",
    images: [
      {
        url: "/films/hero-golden.webp",
        width: 2000,
        height: 1117,
        alt: "Photorealistic frame of an unbuilt infill home on an established street",
      },
    ],
  },
};

export default function FilmsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="films">{children}</div>;
}
