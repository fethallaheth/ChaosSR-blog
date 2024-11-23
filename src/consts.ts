import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Chaos SR  ",
  DESCRIPTION: "Welcome to ChaosSR - a security researcher and developer in solidity and rust, move",
  EMAIL: "fethallahbenmokhtar@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 1,
  NUM_PROJECTS_ON_HOMEPAGE: 1,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Chaos Home.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X ",
    HREF: "https://x.com/0xlinguin",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/fethallaheth",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/fethallahbenmokhtar",
  },
];
