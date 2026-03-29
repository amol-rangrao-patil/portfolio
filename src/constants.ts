import { Project, Skill, Experience } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Zomato Data Analysis",
    description: "Comprehensive exploratory analysis on Zomato datasets using SQL and Python to uncover market trends, restaurant patterns, and consumer behavior insights.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop",
    tags: ["Python", "SQL", "EDA", "Data Analysis"],
    link: "#",
  },
  {
    id: "2",
    title: "Jarvis AI",
    description: "An intelligent voice-controlled assistant powered by AI, capable of understanding natural language commands and automating daily tasks with machine learning capabilities.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop",
    tags: ["AI", "Voice Assistant", "Machine Learning"],
    link: "#",
  },
  {
    id: "3",
    title: "Python Weather App",
    description: "A feature-rich weather application built with Python that provides real-time weather data, forecasts, and interactive visualizations with API integration.",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop",
    tags: ["Python", "API", "Web Development"],
    link: "#",
  },
  {
    id: "4",
    title: "Business Intelligence Dashboards",
    description: "Interactive Tableau and Power BI dashboards for visualizing complex internal data, enabling data-driven decision making and real-time analytics.",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1000&auto=format&fit=crop",
    tags: ["Tableau", "Power BI", "BI", "Analytics"],
    link: "#",
  },
  {
    id: "5",
    title: "AI-Powered Data Analytics",
    description: "A modern, AI-powered data analytics web application enabling automatic dataset cleaning, processing, and generating actionable business insights and trend predictions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "AI Analytics", "Data Processing", "Generative AI"],
    link: "#",
  },
];

export const SKILLS: Skill[] = [
  // Programming Languages
  { name: "Python", icon: "Code2", category: "Programming Languages" },
  { name: "C", icon: "FileCode", category: "Programming Languages" },
  { name: "C++", icon: "FileCode", category: "Programming Languages" },

  // Database
  { name: "MySQL", icon: "Database", category: "Database" },
  { name: "Oracle", icon: "Database", category: "Database" },

  // Data Visualization
  { name: "Qlik Sense", icon: "PieChart", category: "Data Visualization" },
  { name: "Power BI", icon: "BarChart3", category: "Data Visualization" },

  // Version Control
  { name: "Git", icon: "GitBranch", category: "Version Control" },
  { name: "Github", icon: "Github", category: "Version Control" },

  // Generative AI
  { name: "LLMs", icon: "Brain", category: "Generative AI" },
  { name: "Prompt Engineering", icon: "Terminal", category: "Generative AI" },
  { name: "Gemini", icon: "Zap", category: "Generative AI" },
  { name: "ChatGPT", icon: "MessageSquare", category: "Generative AI" },

  // Emerging Technologies
  { name: "Machine Learning Basics", icon: "Brain", category: "Emerging Technologies" },
  { name: "Deep Learning Fundamentals", icon: "Cpu", category: "Emerging Technologies" },
  { name: "NumPy", icon: "Binary", category: "Emerging Technologies" },
  { name: "Pandas", icon: "Table", category: "Emerging Technologies" },
  { name: "Matplotlib", icon: "LineChart", category: "Emerging Technologies" },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Google Gemini",
    role: "Google Student Ambassador",
    period: "Aug 2025 - Present",
    description: [
      "Represent Google Gemini on campus by introducing students to AI tools that save time and boost productivity.",
      "Organize workshops, events, and sessions where students learn how to use Gemini for studying, research, and projects.",
      "Helped peers understand AI features like summarizing notes and generating ideas.",
    ],
  },
  {
    company: "Inlighn Tech",
    role: "Remote Data Analyst Intern",
    period: "Feb 2025 - Mar 2025",
    description: [
      "Spearheaded exploratory analysis on Zomato datasets using SQL and Python, resulting in actionable insights.",
      "Collaborated with remote teams to streamline data reporting and visualization workflows.",
      "Implemented interactive Tableau dashboards, leading to enhanced clarity of complex internal and external data.",
    ],
  },
  {
    company: "Cognifyz Technology",
    role: "Remote Data Analysis Intern",
    period: "Jan 2025 - Feb 2025",
    description: [
      "Spearheaded exploratory data analysis (EDA) on raw customer datasets, identifying critical churn patterns.",
      "Collaborated with remote cross-functional teams to streamline project workflows.",
      "Implemented data visualization strategies using charts and graphs for data-driven decision-making.",
    ],
  },
];
