"use client";

import { useEffect, useState } from "react";
import { getRandomImage, type ImageItem } from "@/lib/images";

export default function Footer() {
  const [footerImage, setFooterImage] = useState<ImageItem | null>(null);

  useEffect(() => {
    setFooterImage(getRandomImage("background"));
  }, []);

  if (!footerImage) {
    return null;
  }

  return (
    <footer className="relative w-full h-[50vh] overflow-hidden group cursor-pointer">
      {/* Background image - blurred */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${footerImage.src})`,
          filter: 'blur(8px)',
          transform: 'scale(1.1)',
        }}
      />

      {/* Logo overlaid - 50% smaller */}
      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-16 gap-8">
        <img
          src="/assets/BS Logo-cutout-invert.png"
          alt="Blatant Space"
          className="w-1/2 h-1/2 object-contain transition-opacity duration-300 group-hover:opacity-50"
        />
        
        {/* Email appears on hover */}
        <a 
          href="mailto:hello@blatantspace.com"
          className="text-2xl md:text-3xl text-cream font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          hello@blatantspace.com
        </a>
      </div>
    </footer>
  );
}
