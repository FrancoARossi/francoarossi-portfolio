# Franco Rossi's Portfolio

[![Astro](https://img.shields.io/badge/Astro-4.4-FF5D01.svg?logo=astro&logoColor=white)](https://astro.build/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000.svg?logo=vercel&logoColor=white)](https://vercel.com/)

A modern, responsive portfolio website showcasing my work and experience as a Full Stack Developer.

## 🚀 Live Demo

Visit my portfolio at [francorossi.dev](https://francorossi.dev)

## ✨ Features

- **Performance-first architecture** using Astro's partial hydration
- **Responsive design** that looks great on all devices
- **Interactive elements** with subtle animations and easter eggs
- **Accessibility-focused** development
- **SEO optimized** with proper meta tags and structured data
- **Perfect Lighthouse scores** across all metrics

## 🛠️ Technologies

- [Astro](https://astro.build/) - Core framework
- [TailwindCSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vercel](https://vercel.com/) - Hosting and analytics
- [tsParticles](https://particles.js.org/) - Background particle effects

## 📋 Project Structure

```
/
├── public/            # Static assets
│   ├── images/        # Static image files
│   │   ├── ...
│   └── site.webmanifest
├── src/
│   ├── assets/        # Processed assets
│   │   ├── images/    # Images processed by Astro
│   │   │   ├── ...
│   ├── components/    # UI components
│   │   ├── icons/     # SVG icons
│   │   │   ├── ...
│   │   ├── sections/  # Page sections
│   │   │   ├── ...
│   │   ├── ...
│   ├── layouts/       # Page layouts
│   │   └── ...
│   ├── pages/         # Page components
│   │   └── ...
│   └── utils/         # Helper functions, types, and constants
│       ├── ...
├── .vscode/           # VS Code settings
│   ├── ...
├── .prettierrc        # Prettier configuration
├── astro.config.mjs   # Astro configuration
├── bun.lockb          # Bun lockfile (package lock)
├── package.json       # Project dependencies
├── README.md          # Project documentation
├── tailwind.config.mjs # Tailwind configuration
├── tsconfig.json      # TypeScript configuration
└── .gitignore         # Git ignore file
```

## 🧞 Development

### Prerequisites

- Node.js (v18+)
- A package manager (npm, yarn, bun, etc.)

### Setup (Using `bun`)

1. Clone the repository:

```bash
git clone https://github.com/FrancoARossi/francoarossi-portfolio.git
cd francoarossi-portfolio
```

2. Install dependencies:

```bash
bun install
```

3. Start the development server:

```bash
bun dev
```

4. Open your browser and navigate to `http://localhost:4321` to view the site.

### 🚀 Building for Production

```bash
bun build
```

### 📝 License

This project is open source and available under the MIT License.

### 🔎 Easter Eggs

The site includes several hidden interactive elements. Can you find them all? 👀

---

Built with 💜 by Franco Rossi