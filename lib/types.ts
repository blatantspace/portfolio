export interface WorkItem {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  description: string;
  image: string;
  featured: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  examples: string[];
}

export interface PressItem {
  publication: string;
  title: string;
  url?: string;
  year: string;
}
