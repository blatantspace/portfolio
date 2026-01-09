import MinimalNav from "./components/MinimalNav";
import GalleryHero from "./components/GalleryHero";
import GalleryGrid from "./components/GalleryGrid";
import GallerySection from "./components/GallerySection";
import CollabsSection from "./components/CollabsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main id="top" className="bg-charcoal">
      <MinimalNav />
      
      {/* Full-screen hero with random image */}
      <GalleryHero />

      {/* Grid of imagery - first set */}
      <GalleryGrid count={16} />

      {/* Break section with background image */}
      <GallerySection
        title="Work that sticks"
        subtitle=""
      />

      {/* Grid of imagery - second set */}
      <GalleryGrid count={16} />

      {/* Collabs Section - work with artists/labels/brands */}
      <CollabsSection />

      {/* Projects Section - Blatant Space initiatives (only shows if projects exist) */}
      <ProjectsSection />

      {/* Grid of imagery - third set */}
      <GalleryGrid count={16} />

      {/* Contact section - text only */}
      <ContactSection />

      {/* Footer with logo */}
      <Footer />
    </main>
  );
}
