import DuckpediaImg from "@assets/images/projects/duckpedia.webp";
import PortfolioImg from "@assets/images/projects/portfolio.webp";

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  // { name: "Education", href: "#education" },
];

export const TECHNOLOGIES_STYLES: { [technology: string]: string } = {
  JavaScript:
    "border-yellow-500 bg-yellow-200 dark:bg-yellow-950 dark:border-yellow-800",

  TypeScript:
    "border-blue-500 bg-blue-200 dark:bg-blue-950 dark:border-blue-800",

  React:
    "border-indigo-500 bg-indigo-200 dark:bg-indigo-950 dark:border-indigo-800",

  Redux:
    "border-purple-500 bg-purple-200 dark:bg-purple-950 dark:border-purple-800",

  "React Native":
    "border-indigo-500 bg-indigo-200 dark:bg-indigo-950 dark:border-indigo-800",

  Expo: "border-indigo-500 bg-indigo-200 dark:bg-indigo-950 dark:border-indigo-800",

  Firebase:
    "border-yellow-500 bg-yellow-200 dark:bg-yellow-950 dark:border-yellow-800",

  Strapi: "border-blue-500 bg-blue-200 dark:bg-blue-950 dark:border-blue-800",

  MUI: "border-blue-500 bg-blue-200 dark:bg-blue-950 dark:border-blue-800",

  RSpec: "border-red-500 bg-red-200 dark:bg-red-950 dark:border-red-800",

  NodeJS:
    "border-green-500 bg-green-200 dark:bg-green-950 dark:border-green-800",

  Express:
    "border-green-500 bg-green-200 dark:bg-green-950 dark:border-green-800",

  Arduino: "border-blue-500 bg-blue-200 dark:bg-blue-950 dark:border-blue-800",

  "C/C++": "border-blue-500 bg-blue-200 dark:bg-blue-950 dark:border-blue-800",

  Python:
    "border-yellow-500 bg-yellow-200 dark:bg-yellow-950 dark:border-yellow-800",

  Linux:
    "border-black-500 bg-black-200 dark:bg-black-950 dark:border-black-800",

  GraphQL: "border-pink-500 bg-pink-200 dark:bg-pink-950 dark:border-pink-800",

  PostgreSQL:
    "border-blue-500 bg-blue-200 dark:bg-blue-950 dark:border-blue-800",

  MongoDB:
    "border-green-500 bg-green-200 dark:bg-green-950 dark:border-green-800",

  Redis: "border-red-500 bg-red-200 dark:bg-red-950 dark:border-red-800",

  Docker: "border-blue-500 bg-blue-200 dark:bg-blue-950 dark:border-blue-800",

  "Ruby On Rails":
    "border-red-500 bg-red-200 dark:bg-red-950 dark:border-red-800",

  Ruby: "border-red-500 bg-red-200 dark:bg-red-950 dark:border-red-800",

  HTML: "border-orange-500 bg-orange-200 dark:bg-orange-950 dark:border-orange-800",

  CSS: "border-sky-500 bg-sky-200 dark:bg-sky-950 dark:border-sky-800",

  TailwindCSS:
    "border-cyan-500 bg-cyan-200 dark:bg-cyan-950 dark:border-cyan-800",

  Sass: "border-pink-500 bg-pink-200 dark:bg-pink-950 dark:border-pink-800",

  Jest: "border-rose-500 bg-rose-200 dark:bg-rose-950 dark:border-rose-800",

  Git: "border-rose-500 bg-rose-200 dark:bg-rose-950 dark:border-rose-800",

  GitHub:
    "border-violet-500 bg-yviolet-200 dark:bg-violet-950 dark:border-violet-800",

  GitLab:
    "border-amber-500 bg-amber-200 dark:bg-amber-950 dark:border-amber-800",

  Astrojs:
    "border-amber-500 bg-amber-200 dark:bg-amber-950 dark:border-amber-800",

  default:
    "border-black-500 bg-black-200 dark:bg-black-950 dark:border-black-800",
};

export const PROJECTS = [
  {
    title: "Duckpedia",
    technologies: ["Nextjs", "TailwindCSS"],
    image: DuckpediaImg,
    description: `A fun project born at the Sirius office from our <a
        class="underline underline-offset-2"
        title="Navigate to Duck Game's Steam page"
        href="https://store.steampowered.com/app/312530/Duck_Game"
        target="_blank"
        rel="noopener noreferrer"
      >
        Duck Game</a
      > culture, where colleagues choose unique hat-wearing duck avatars. As informal
      tracking became chaotic, I developed this digital registry that allows team
      members to browse, claim, and manage duck hats, solving ownership disputes
      while adding a playful element to our workplace.`,
    link: "https://duckpedia.vercel.app/",
    githubLink: "https://github.com/FrancoARossi/duckpedia",
  },
  {
    title: "Portfolio Website",
    technologies: ["Astrojs", "TailwindCSS"],
    image: PortfolioImg,
    description: `Created to showcase my work and technical skills in one central hub. I
      developed this portfolio with a minimalist design enhanced by colorful
      gradients and subtle animations. Built with performance in mind, achieving
      a perfect 100% Lighthouse score across all metrics and 100% score on SEO
      checkers.`,
    githubLink: "https://github.com/FrancoARossi/francoarossi-portfolio",
  },
];

export const EASTER_EGGS = ["header-color", "image-shake"];
