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
  // Add your Blatant Space projects here
  // Example:
  // {
  //   id: "project-name",
  //   title: "Project Title",
  //   tagline: "One line description of the project",
  //   description: [
  //     "First paragraph about the project...",
  //     "Second paragraph with more details...",
  //   ],
  //   mainImage: "/projects/project-image.jpg",
  //   supportImages: [], // optional grid images
  //   links: [
  //     { label: "Visit Project", url: "https://..." },
  //   ],
  //   status: "active",
  // },
];

// Helper to get project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projects.find((p) => p.id === id);
};

// Helper to get projects by status
export const getProjectsByStatus = (status: Project["status"]): Project[] => {
  return projects.filter((p) => p.status === status);
};
