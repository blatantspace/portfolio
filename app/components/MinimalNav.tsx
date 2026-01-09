"use client";

export default function MinimalNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-end">
        <a
          href="mailto:hello@blatantspace.com"
          className="text-sm font-light text-cream hover:text-cream/80 transition-all px-4 py-2 rounded-full bg-charcoal/40 backdrop-blur-sm hover:bg-charcoal/60"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
