# Amol Patil - Personal Portfolio Website

**[🚀 View Live Demo on Vercel](https://amolrangraopatil.vercel.app/)**  

A modern, responsive, and highly interactive portfolio website showcasing my skills, experience, projects, and achievements. The application is built with React and Vite, utilizing Tailwind CSS for styling and Framer Motion for complex scroll and micro-animations.

## 📸 Screenshots

| Live Desktop View |
| :---: |
| <img src="./public/images/home_screenshot.png" alt="Live Portfolio View"/> |

## 🚀 Features

- **Dynamic Hero Section:** Engaging animated intro with glass-morphism effects.
- **Interactive UI:** Smooth scrolling, page transitions, and micro-interactions powered by Framer Motion.
- **Projects Showcase:** An interactive horizontal carousel layout (`My Works`) to feature detailed case studies like Zomato Data Analysis and Jarvis AI.
- **Skills & Experience:** Visual representation of technical skills categorized by domains (Python, Data Viz, Gen AI, etc.) alongside professional journey.
- **Day/Night Background:** A dynamic, visually appealing animated background tailored to enhance the visual experience.
- **Fully Responsive:** Optimized seamlessly for both desktop and mobile devices.

## 💻 Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Motion (Framer Motion)](https://motion.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** TypeScript

## 📁 Project Structure

```text
portfolio/
├── public/                 # Static assets (images, icons, robots.txt)
│   └── images/             # Image directory containing project and profile pictures
├── src/
│   ├── components/         # Reusable React components (Hero, About, Projects, etc.)
│   ├── lib/                # Utility functions and library wrappers
│   ├── types.ts            # TypeScript interfaces and types
│   ├── constants.ts        # Static data configuration (Projects, Skills, Experiences)
│   ├── App.tsx             # Main application layout and scroll-tracking logic
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global stylesheets (Tailwind imports and custom classes)
├── package.json            # Project metadata and dependencies
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## 🛠️ Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm`, `yarn`, or `pnpm`

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   *The application will be running at `http://localhost:3000`*

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🚀 Deployment

This project is successfully deployed on [Vercel](https://vercel.com). You can visit the live application using the View Live Demo link at the top of this document.

If you are redeploying or deploying a fork:

1. Push your code to a GitHub/GitLab repository.
2. Import the project into Vercel.
3. Vercel will automatically detect the **Vite** framework.
4. Add any required environment variables (e.g., `GEMINI_API_KEY` if utilizing the Google GenAI integration).
5. Deploy!

## 🤝 Contact & Connections

Feel free to reach out for collaborations or just a friendly chat!
- **LinkedIn:** [Amol Patil](https://linkedin.com/in/amol-rangrao-patil)
