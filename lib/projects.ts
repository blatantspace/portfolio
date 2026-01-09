export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string[];
  mainImage: string;
  supportImages?: string[];
  links: ProjectLink[];
  status: "active" | "coming-soon" | "completed";
}

export const projects: Project[] = [
  {
    id: "retro-graphics",
    title: "Retro Graphics",
    tagline: "Make your own",
    description: [
      "Tool for generating nostalgic imagery.",
      "The Blatant Space aesthetic, open to everyone.",
    ],
    mainImage: "/projects/retro-graphics.jpg",
    supportImages: [],
    links: [
      { label: "Create", url: "https://www.retro.graphics/create" },
    ],
    status: "active",
  },
  {
    id: "robin-guide",
    title: "Robin Guide",
    tagline: "AI for the creative process",
    description: [
      "A companion, not a replacement.",
      "Helps you find what you're looking for.",
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
