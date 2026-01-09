import MinimalNav from "../components/MinimalNav";
import CollabsSection from "../components/CollabsSection";
import Footer from "../components/Footer";

export const metadata = {
  title: "Collabs | Blatant Space",
  description: "Selected work with artists, labels, and brands",
};

export default function CollabsPage() {
  return (
    <main className="bg-charcoal min-h-screen">
      <MinimalNav />
      <div className="pt-20">
        <CollabsSection />
      </div>
      <Footer />
    </main>
  );
}
