import type { Site, Page } from "@config/types";

export const SITE: Site = {
  TITLE: "AstroJobs",
  DESCRIPTION:
    "Welcome to AstroJobs, a place where Astro developers can get their first job.",
  AUTHOR: "Ian Restrepo",
  SITE_LANGUAGE: "en",
};

export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
};

export const LINKS = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Work",
    HREF: "/jobs/",
  }
];
