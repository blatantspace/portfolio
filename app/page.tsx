import MinimalNav from "./components/MinimalNav";
import GalleryHero from "./components/GalleryHero";
import GalleryGrid from "./components/GalleryGrid";
import GallerySection from "./components/GallerySection";
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

      {/* Another break section */}
      <GallerySection
        title="Ready when you are"
        subtitle=""
      />

      {/* Grid of imagery - third set */}
      <GalleryGrid count={16} />

      {/* Contact section - text only */}
      <ContactSection />

      {/* Footer with logo */}
      <Footer />
    </main>
  );
}
