import type { Metadata } from "next";
import { LegalPage } from "../components/legal-page";
import { privacyPolicy } from "../lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | Zel Auto Rescue",
  description: "How Zel Auto Rescue collects, uses, and protects your information.",
};

export default function PrivacyPolicy() {
  return <LegalPage document={privacyPolicy} />;
}
