"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getRandomImages, type ImageItem } from "@/lib/images";

interface GalleryGridProps {
  count?: number;
}

export default function GalleryGrid({ count = 12 }: GalleryGridProps) {
  const [gridItems, setGridItems] = useState<ImageItem[]>([]);

  useEffect(() => {
    // Select random grid items (mix of images and videos)
    setGridItems(getRandomImages(count, "grid"));
  }, [count]);

  if (gridItems.length === 0) {
    return null;
  }

  return (
    <section className="w-full py-0">
      {/* Sharp-edged grid - no gaps, no rounded corners */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {gridItems.map((item, index) => (
          <motion.div
            key={`${item.src}-${index}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="relative aspect-square overflow-hidden group cursor-zoom-in"
          >
            {item.isVideo ? (
              // Video element
              <>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
                {/* Video indicator */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-charcoal/60 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-cream text-xs">▶</span>
                  </div>
                </div>
              </>
            ) : (
              // Image element
              <div
                className="w-full h-full bg-cover bg-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                style={{
                  backgroundImage: `url(${item.src})`,
                }}
              />
            )}

            {/* Hover overlay - minimal */}
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
