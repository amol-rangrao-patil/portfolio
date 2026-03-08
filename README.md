# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Deployment on Vercel

This project is optimized for deployment on [Vercel](https://vercel.com).

### Steps to Deploy:

1. **Push to GitHub/GitLab/Bitbucket:**
   - Initialize a git repository: `git init`
   - Add all files: `git add .`
   - Commit: `git commit -m "Initial commit"`
   - Push to your preferred git provider.

2. **Import to Vercel:**
   - Go to the [Vercel Dashboard](https://vercel.com/dashboard).
   - Click **"New Project"**.
   - Import your repository.
   - Vercel will automatically detect the **Vite** framework.
   - Click **"Deploy"**.

### Environment Variables:

If you are using the Gemini API, make sure to add the following environment variable in the Vercel project settings:

- `GEMINI_API_KEY`: Your Google Gemini API Key.

## 🛠️ Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 📁 Project Structure

- `src/`: React components and application logic.
- `public/`: Static assets (images, icons, etc.).
- `vercel.json`: Configuration for Vercel deployment (handles client-side routing).
- `vite.config.ts`: Vite configuration.
