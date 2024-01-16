import { links } from "./data";
import { projectsData } from "./data";

export type SectionName = (typeof links)[number]["name"];
export type ProjectProps = (typeof projectsData)[number];
export type Theme = "light" | "dark";
