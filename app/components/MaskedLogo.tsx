"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getRandomImage, type ImageItem } from "@/lib/images";

interface MaskedLogoProps {
  maskVersion?: "white" | "black";
  cycleImages?: boolean;
  cycleInterval?: number;
  className?: string;
}

export default function MaskedLogo({
  maskVersion = "white",
  cycleImages = true,
  cycleInterval = 4000,
  className = "",
}: MaskedLogoProps) {
  const [currentImage, setCurrentImage] = useState<ImageItem | null>(null);

  useEffect(() => {
    // Set initial random image
    setCurrentImage(getRandomImage());

    if (cycleImages) {
      const interval = setInterval(() => {
        setCurrentImage(getRandomImage());
      }, cycleInterval);

      return () => clearInterval(interval);
    }
  }, [cycleImages, cycleInterval]);

  if (!currentImage) {
    return null;
  }

  return (
    <div className={`relative ${className}`}>
      {/* Background image that gets masked */}
      <motion.div
        key={currentImage.src}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${currentImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          WebkitMaskImage: maskVersion === "white" 
            ? `url(/assets/BS Logo-cutout.png)` 
            : `url(/assets/BS Logo-cutout-invert.png)`,
          maskImage: maskVersion === "white" 
            ? `url(/assets/BS Logo-cutout.png)` 
            : `url(/assets/BS Logo-cutout-invert.png)`,
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      />

      {/* Invisible spacer to maintain aspect ratio */}
      <img
        src={maskVersion === "white" 
          ? "/assets/BS Logo-cutout.png" 
          : "/assets/BS Logo-cutout-invert.png"}
        alt=""
        className="invisible w-full"
      />
    </div>
  );
}
