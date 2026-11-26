import type { Metadata } from "next";
import { LegalPage } from "../components/legal-page";
import { termsAndConditions } from "../lib/legal";

export const metadata: Metadata = {
  title: "Terms and Conditions | Zel Auto Rescue",
  description: "The terms that apply to the Zel Auto Rescue website and roadside assistance services.",
};

export default function TermsAndConditions() {
  return <LegalPage document={termsAndConditions} />;
}
