import DuckpediaImg from "@assets/images/projects/duckpedia.webp";
import PortfolioImg from "@assets/images/projects/portfolio.webp";
import SidekiqImg from "@assets/images/projects/sidekiq.webp";
import AWSCertificate from "@assets/images/certificates/aws-certified-solutions-architect-associate.webp";
import IoTCertificate from "@assets/images/certificates/iot.webp";

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  // { name: "Education", href: "#education" },
];

export const SECTIONS_IDS = {
  hero: "hero",
  about: "about",
  experience: "experience",
  projects: "projects",
  education: "education",
};

export const TECHNOLOGIES_STYLES: { [technology: string]: string } = {
  Javascript:
    "border-yellow-400 bg-yellow-100 dark:bg-yellow-900 dark:border-yellow-600",

  Typescript:
    "border-blue-600 bg-blue-100 dark:bg-blue-900 dark:border-blue-600",

  React: "border-cyan-500 bg-cyan-100 dark:bg-cyan-900 dark:border-cyan-600",

  Redux:
    "border-purple-600 bg-purple-100 dark:bg-purple-900 dark:border-purple-700",

  "React Native":
    "border-cyan-500 bg-cyan-100 dark:bg-cyan-900 dark:border-cyan-600",

  Expo: "border-violet-800 bg-violet-100 dark:bg-violet-900 dark:border-violet-700",

  Firebase:
    "border-amber-500 bg-amber-100 dark:bg-amber-900 dark:border-amber-600",

  Strapi:
    "border-indigo-600 bg-indigo-100 dark:bg-indigo-900 dark:border-indigo-700",

  MUI: "border-sky-600 bg-sky-100 dark:bg-sky-900 dark:border-sky-600",

  RSpec: "border-red-600 bg-red-100 dark:bg-red-900 dark:border-red-700",

  NodeJS:
    "border-green-700 bg-green-100 dark:bg-green-900 dark:border-green-700",

  Express: "border-gray-500 bg-gray-100 dark:bg-gray-800 dark:border-gray-600",

  Arduino: "border-teal-600 bg-teal-100 dark:bg-teal-900 dark:border-teal-700",

  "C/C++": "border-blue-700 bg-blue-100 dark:bg-blue-900 dark:border-blue-700",

  Python:
    "border-blue-600 bg-gradient-to-r from-blue-100 to-yellow-100 dark:from-blue-900 dark:to-yellow-900 dark:border-blue-700",

  Linux: "border-gray-700 bg-gray-100 dark:bg-gray-900 dark:border-gray-800",

  GraphQL: "border-pink-600 bg-pink-100 dark:bg-pink-900 dark:border-pink-700",

  PostgreSQL:
    "border-blue-700 bg-blue-100 dark:bg-blue-900 dark:border-blue-700",

  MongoDB:
    "border-green-600 bg-green-100 dark:bg-green-900 dark:border-green-700",

  Redis: "border-red-600 bg-red-100 dark:bg-red-900 dark:border-red-700",

  Prisma: "border-cyan-600 bg-cyan-50 dark:bg-cyan-900 dark:border-cyan-700",

  Docker: "border-sky-600 bg-sky-100 dark:bg-sky-900 dark:border-sky-700",

  Sidekiq: "border-gray-500 bg-gray-100 dark:bg-gray-900 dark:border-gray-600",

  "Ruby on Rails":
    "border-red-600 bg-red-100 dark:bg-red-900 dark:border-red-700",

  Ruby: "border-red-600 bg-red-100 dark:bg-red-900 dark:border-red-700",

  HTML: "border-orange-600 bg-orange-100 dark:bg-orange-900 dark:border-orange-700",

  CSS: "border-blue-600 bg-blue-100 dark:bg-blue-900 dark:border-blue-700",

  TailwindCSS:
    "border-cyan-500 bg-cyan-100 dark:bg-cyan-900 dark:border-cyan-600",

  Sass: "border-pink-600 bg-pink-100 dark:bg-pink-900 dark:border-pink-700",

  Jest: "border-rose-600 bg-rose-100 dark:bg-rose-900 dark:border-rose-700",

  Astrojs:
    "border-orange-500 bg-gradient-to-r from-orange-100 to-purple-100 dark:from-orange-900 dark:to-purple-900 dark:border-orange-600",

  Minitest: "border-red-600 bg-red-100 dark:bg-red-900 dark:border-red-700",

  Nextjs: "border-black bg-gray-100 dark:bg-gray-900 dark:border-gray-700",

  default: "border-gray-500 bg-gray-100 dark:bg-gray-900 dark:border-gray-600",
};

export const PROJECTS = [
  {
    title: "Duckpedia",
    technologies: ["Nextjs", "Typescript", "Prisma", "TailwindCSS"],
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
    title: "Sidekiq Contribution",
    technologies: ["Ruby on Rails", "Ruby", "Redis", "HTML", "CSS", "Minitest"],
    image: SidekiqImg,
    description: `Contributed to Sidekiq, a popular Ruby on Rails background job processor. 
    As a Spanish speaker collaborating with US developers, I encountered usability issues with 
    the automatic language detection. I implemented a language selector feature, allowing users 
    to override their browser's locale setting. This enhancement improved accessibility for 
    developers worldwide working in multilingual environments.`,
    githubLink: "https://github.com/sidekiq/sidekiq/pull/6217",
  },
  {
    title: "Portfolio Website",
    technologies: ["Astrojs", "Typescript", "TailwindCSS", "HTML"],
    image: PortfolioImg,
    description: `Created to showcase my work and technical skills in one central hub. I
      developed this portfolio with a minimalist design enhanced by colorful
      gradients and subtle animations. Built with performance in mind, achieving
      a perfect 100% Lighthouse score across all metrics and 100% score on SEO
      checkers.`,
    githubLink: "https://github.com/FrancoARossi/francoarossi-portfolio",
  },
];

export const EDUCATION = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    institution: "Amazon Web Services",
    date: "2024",
    description: `Acquired the AWS Certified Solutions Architect – Associate certification,
      demonstrating proficiency in designing and deploying scalable systems on
      AWS. This certification validates my ability to implement best practices for
      security, cost optimization, and high availability in cloud-based
      architectures.`,
    link: "https://www.credly.com/badges/19c40fd4-1c1b-4b3a-a9a9-63478c588be1/public_url",
    image: AWSCertificate,
  },
  {
    title: "Information Systems Engineering",
    institution: "Universidad Tecnológica Nacional - FRD",
    date: "2016-Present",
    description: `Currently pursuing a degree in Information Systems Engineering at
      Universidad Tecnológica Nacional. This program equips me with a strong
      foundation in software development, database management, and system
      architecture. I am actively engaged in projects that enhance my technical
      skills and problem-solving abilities, preparing me for a successful career
      in the tech industry.`,
  },
  {
    title: "Internet of Things Course",
    institution: "Universidad Tecnológica Nacional - FRRe",
    date: "2019",
    description: `Certificate that covers various communication protocols, 
      hardware, sensors, programming, technologies, and management for Internet of Things (IoT) projects 
      applied to industrial solutions, home automation and smart cities among others.`,
    image: IoTCertificate,
  },
];

export const EASTER_EGGS = ["header-color", "image-shake"];
