export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string; // 1 line description
  description: string[]; // 2 paragraphs
  mainImage: string;
  supportImages?: string[]; // optional grid of supporting images
  links: ProjectLink[];
  status: "active" | "coming-soon" | "completed";
}

export const projects: Project[] = [
  {
    id: "retro-graphics",
    title: "Retro Graphics",
    tagline: "AI-powered tool for creating nostalgic, vintage-style imagery",
    description: [
      "Built an app that lets anyone create the signature Blatant Space aesthetic—warm, nostalgic imagery that feels like it was pulled from a VHS tape or faded photograph.",
      "Retro Graphics democratizes the creative process, making AI-generated vintage art accessible to everyone. Create your own memories from decades that never existed.",
    ],
    mainImage: "/projects/retro-graphics.jpg",
    supportImages: [],
    links: [
      { label: "Try It", url: "https://www.retro.graphics/create" },
    ],
    status: "active",
  },
  {
    id: "robin-guide",
    title: "Robin Guide",
    tagline: "Your AI companion for navigating the creative process",
    description: [
      "Robin Guide is a Blatant Space project exploring how AI can serve as a creative companion rather than a replacement for human creativity.",
      "Built to help artists, musicians, and creators find their way through the noise and focus on what matters most—making work that resonates.",
    ],
    mainImage: "/projects/robin-guide.jpg",
    supportImages: [],
    links: [
      { label: "Visit", url: "https://robin.guide" },
    ],
    status: "active",
  },
];

// Helper to get project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projects.find((p) => p.id === id);
};

// Helper to get projects by status
export const getProjectsByStatus = (status: Project["status"]): Project[] => {
  return projects.filter((p) => p.status === status);
};
