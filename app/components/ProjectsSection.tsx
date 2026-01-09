"use client";

import { motion } from "framer-motion";
import { projects, type Project } from "@/lib/projects";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="w-full"
    >
      {/* Main Image */}
      <div className="relative aspect-video w-full overflow-hidden bg-charcoal mb-6">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${project.mainImage})`,
            backgroundColor: '#3a3a3a',
          }}
        />
      </div>

      {/* Supporting Images Grid (if any) */}
      {project.supportImages && project.supportImages.length > 0 && (
        <div className="grid grid-cols-3 gap-1 mb-6">
          {project.supportImages.map((img, i) => (
            <div
              key={i}
              className="aspect-square bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="space-y-4">
        {/* Category & Year */}
        <div className="text-sm text-cream/50 uppercase tracking-wider">
          {project.category} · {project.year}
        </div>

        {/* Title */}
        <h3 className="text-3xl md:text-4xl font-light text-cream">
          {project.title}
        </h3>

        {/* Tagline */}
        <p className="text-lg text-cream/70 font-light">
          {project.tagline}
        </p>

        {/* Description paragraphs */}
        <div className="space-y-4 text-cream/60 leading-relaxed">
          {project.description.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {/* Links */}
        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-4 pt-4">
            {project.links.map((link, i) => (
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

export default function ProjectsSection() {
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
            Projects
          </h2>
          <p className="text-xl text-cream/50 font-light">
            Selected work for artists, labels, and brands
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
