import privacyPolicyData from "@/content/privacy-policy.json";
import termsData from "@/content/terms-and-conditions.json";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
  items?: string[];
};

export interface LegalDocument {
  title: string;
  /** ISO date, YYYY-MM-DD */
  effectiveDate: string;
  intro: string;
  sections: LegalSection[];
}

export const privacyPolicy = privacyPolicyData as LegalDocument;
export const termsAndConditions = termsData as LegalDocument;
