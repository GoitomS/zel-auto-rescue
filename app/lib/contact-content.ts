import contactData from "@/content/contact.json";

export interface ContactContent {
  hero: {
    primaryText: string;
    secondaryText: string;
  };
  hours: string;
  prepareTitle: string;
  prepareItems: string[];
}

export const contactContent = contactData as ContactContent;
