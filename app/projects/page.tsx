import MinimalNav from "../components/MinimalNav";
import ProjectsSection from "../components/ProjectsSection";
import Footer from "../components/Footer";

export const metadata = {
  title: "Projects | Blatant Space",
  description: "Blatant Space initiatives and experiments",
};

export default function ProjectsPage() {
  return (
    <main className="bg-charcoal min-h-screen">
      <MinimalNav />
      <div className="pt-20">
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  );
}
