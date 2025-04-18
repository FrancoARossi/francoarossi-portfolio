import type { ImageMetadata } from "astro";

export type NavItem = {
  label: string;
  href: string;
};

export type SectionId =
  | "hero"
  | "about"
  | "experience"
  | "projects"
  | "education";

export type SectionIdsMap = {
  [key in SectionId]: string;
};

export type TechnologyStyle = {
  [technology: string]: string;
};

export type Project = {
  title: string;
  technologies: string[];
  image: ImageMetadata;
  description: string;
  link?: string;
  githubLink: string;
};

export type Education = {
  title: string;
  institution: string;
  date: string;
  description: string;
  link?: string;
  image?: ImageMetadata;
  imageClassNames?: string;
};
