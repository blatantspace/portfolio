"use client";

import Link from "next/link";

export default function MinimalNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo/Home link */}
        <Link
          href="/"
          className="text-sm font-light text-cream hover:text-cream/80 transition-all"
        >
          Blatant Space
        </Link>

        {/* Navigation links */}
        <div className="flex gap-4">
          <Link
            href="/collabs"
            className="text-sm font-light text-cream/70 hover:text-cream transition-all"
          >
            Collabs
          </Link>
          <Link
            href="/projects"
            className="text-sm font-light text-cream/70 hover:text-cream transition-all"
          >
            Projects
          </Link>
          <a
            href="mailto:blatantspace@gmail.com"
            className="text-sm font-light text-cream hover:text-cream/80 transition-all px-4 py-2 rounded-full bg-charcoal/40 backdrop-blur-sm hover:bg-charcoal/60"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
