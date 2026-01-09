"use client";

import { motion } from "framer-motion";
import { collabs, type Collab } from "@/lib/collabs";

function YouTubeEmbed({ videoId }: { videoId: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-black">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}

function CollabCard({ collab, index }: { collab: Collab; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="w-full"
    >
      {/* Video or Image */}
      {collab.youtubeId ? (
        <div className="mb-6">
          <YouTubeEmbed videoId={collab.youtubeId} />
        </div>
      ) : (
        <div className="relative aspect-video w-full overflow-hidden bg-charcoal mb-6">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${collab.mainImage})`,
              backgroundColor: '#3a3a3a',
            }}
          />
        </div>
      )}

      {/* Supporting Images Grid (if any) */}
      {collab.supportImages && collab.supportImages.length > 0 && (
        <div className="grid grid-cols-3 gap-1 mb-6">
          {collab.supportImages.map((img, i) => (
            <div
              key={i}
              className="aspect-square bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
      )}

      {/* Supporting Videos Mosaic (if any) */}
      {collab.supportVideos && collab.supportVideos.length > 0 && (
        <div className={`grid gap-2 mb-6 ${collab.supportVideos.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
          {collab.supportVideos.map((video, i) => (
            <div key={i} className="aspect-video overflow-hidden bg-black">
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="space-y-4">
        {/* Category & Year */}
        <div className="text-sm text-cream/50 uppercase tracking-wider">
          {collab.category} · {collab.year}
        </div>

        {/* Title */}
        <h3 className="text-3xl md:text-4xl font-light text-cream">
          {collab.title}
        </h3>

        {/* Tagline */}
        <p className="text-lg text-cream/70 font-light">
          {collab.tagline}
        </p>

        {/* Description paragraphs */}
        <div className="space-y-4 text-cream/60 leading-relaxed">
          {collab.description.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {/* Links */}
        {collab.links.length > 0 && (
          <div className="flex flex-wrap gap-4 pt-4">
            {collab.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/80 hover:text-cream transition-colors underline underline-offset-4"
              >
                {link.label} →
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default function CollabsSection() {
  return (
    <section className="w-full py-24 px-6 bg-charcoal">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-light text-cream mb-4">
            Collabs
          </h2>
          <p className="text-xl text-cream/50 font-light">
            Selected work with artists, labels, and brands
          </p>
        </motion.div>

        {/* Collabs List */}
        <div className="space-y-24">
          {collabs.map((collab, index) => (
            <CollabCard key={collab.id} collab={collab} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
