import homeData from "@/content/home.json";

export type ContentItem = {
  title: string;
  description: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export interface HomeContent {
  hero: {
    primaryText: string;
    secondaryText: string;
  };
  services: ContentItem[];
  steps: ContentItem[];
  reasons: ContentItem[];
  serviceAreas: string[];
  faqs: Faq[];
}

export const homeContent = homeData as HomeContent;
