import aboutData from "@/content/about.json";
import type { ContentItem } from "./home-content";

export interface AboutContent {
  hero: {
    primaryText: string;
    secondaryText: string;
  };
  story: {
    title: string;
    paragraphs: string[];
  };
  mission: string;
  values: ContentItem[];
}

export const aboutContent = aboutData as AboutContent;
