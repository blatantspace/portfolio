"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getRandomImage, type ImageItem } from "@/lib/images";

interface GallerySectionProps {
  title?: string;
  subtitle?: string;
  imageCount?: number;
}

export default function GallerySection({
  title,
  subtitle,
  imageCount = 1,
}: GallerySectionProps) {
  const [backgroundImage, setBackgroundImage] = useState<ImageItem | null>(
    null
  );

  useEffect(() => {
    setBackgroundImage(getRandomImage("background"));
  }, []);

  if (!backgroundImage) {
    return null;
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Full-width background image - NO blur */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage.src})`,
          }}
        />
        <div className="absolute inset-0 bg-charcoal/70" />
      </motion.div>

      {/* Text overlay */}
      {(title || subtitle) && (
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            {title && (
              <h2 className="text-5xl md:text-7xl font-light tracking-tight text-cream mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl md:text-2xl text-cream/80 font-light max-w-2xl">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
}
