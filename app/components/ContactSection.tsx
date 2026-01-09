"use client";

export default function ContactSection() {
  return (
    <section className="relative w-full min-h-screen bg-charcoal flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <h2 className="text-5xl md:text-7xl font-light tracking-tight text-cream mb-8">
          Work Together
        </h2>

        <p className="text-xl md:text-2xl text-cream/70 mb-12 font-light leading-relaxed">
          Brand campaigns. Music videos. Character design.
          <br />
          AI art direction for the nostalgic future.
        </p>

        <div className="space-y-6">
          <a
            href="mailto:blatantspace@gmail.com"
            className="inline-block text-2xl text-cream hover:text-rust transition-colors"
          >
            blatantspace@gmail.com
          </a>

          <div className="flex gap-8 justify-center text-sm text-cream/50">
            <a
              href="https://instagram.com/blatant.space"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://foundation.app/@blatantspace"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream transition-colors"
            >
              Foundation
            </a>
          </div>
        </div>

        <p className="mt-16 text-xs text-cream/30 tracking-widest uppercase">
          Featured in COEVAL · Novembre · Paper · Trois Couleurs
        </p>
      </div>
    </section>
  );
}
