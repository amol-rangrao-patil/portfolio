export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: "Programming Languages" | "Database" | "Data Visualization" | "Version Control" | "Generative AI" | "Emerging Technologies";
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}
