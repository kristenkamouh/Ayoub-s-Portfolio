# Jad Ayoub - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Computer and Communications Engineer with a focus on software development and artificial intelligence.

## 🌟 Features

- **Modern UI/UX**: Clean, professional design with smooth animations using Framer Motion
- **Responsive Design**: Fully responsive layout that works seamlessly on all devices
- **Dark/Light Mode**: Theme toggle with persistent user preference
- **Interactive Sections**:
  - About Me with photo and bio
  - Core Skills showcase
  - Professional Experience timeline
  - Featured Projects with modal previews and downloads
  - Contact section
- **Project Showcases**: 
  - Image previews in modal dialogs
  - Downloadable documents (reports, presentations)
  - Organized by technology and category

## 🚀 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui with Radix UI primitives
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Theme**: next-themes for dark mode support

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or bun package manager

### Setup

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd portfolio

# Install dependencies
npm install
# or if using bun
bun install

# Start development server
npm run dev
# or
bun run dev
```

The application will be available at `http://localhost:5173` (or the port shown in terminal).

## 🛠️ Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Build for development environment
npm run build:dev

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 📁 Project Structure

```
portfolio/
├── public/              # Static files
│   └── LabReport.docx  # Downloadable documents
├── src/
│   ├── assets/         # Images and media files
│   ├── components/     # React components
│   │   ├── ui/        # shadcn/ui components
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── ...
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   ├── pages/         # Page components
│   ├── App.tsx        # Main app component
│   └── main.tsx       # Entry point
├── components.json     # shadcn/ui configuration
├── tailwind.config.ts # Tailwind configuration
└── vite.config.ts     # Vite configuration
```

## 🎨 Customization

### Adding Projects

Edit `src/components/Projects.tsx` to add or modify projects:

```typescript
const projects: Project[] = [{
  title: "Project Name",
  description: "Project description",
  tags: ["Technology", "Tags"],
  viewType: "modal" | "download" | "link",
  viewLabel: "Button Label",
  mediaType: "image" | "document",
  mediaUrl: "/path/to/media", // for modal
  downloadUrl: "/path/to/file", // for downloads
  externalUrl: "https://..." // for external links
}];
```

### Updating Personal Information

- **About Section**: Edit `src/components/About.tsx`
- **Skills**: Edit `src/components/Skills.tsx`
- **Experience**: Edit `src/components/Experience.tsx`
- **Contact**: Edit `src/components/Contact.tsx`

### Theme Customization

Modify `tailwind.config.ts` to change colors, fonts, and other design tokens.

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder, ready for deployment to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## 📄 License

This project is open source and available for personal use.

## 👤 Contact

**Jad Ayoub**
- Computer and Communications Engineer
- Interests: Software Development, Artificial Intelligence

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
