"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getRandomImage, type ImageItem } from "@/lib/images";

export default function GalleryHero() {
  const [heroImage, setHeroImage] = useState<ImageItem | null>(null);

  useEffect(() => {
    setHeroImage(getRandomImage("hero"));
  }, []);

  if (!heroImage) {
    return <div className="min-h-screen bg-charcoal" />;
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Full-screen background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage.src})`,
          filter: 'blur(8px)',
          transform: 'scale(1.1)',
        }}
      />

      {/* Logo overlaid - same size as background, invert version */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <img
          src="/assets/BS Logo-cutout-invert.png"
          alt="Blatant Space"
          className="w-full h-full object-contain"
        />
      </div>

    </section>
  );
}
