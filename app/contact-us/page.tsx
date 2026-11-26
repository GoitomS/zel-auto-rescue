import type { Metadata } from "next";
import MainPageBanner from "../components/main-page-banner";
import { contactContent } from "../lib/contact-content";
import { homeContent } from "../lib/home-content";
import {
  email,
  emailHref,
  phoneDisplay,
  phoneHref,
  smsHref,
} from "../lib/site";

export const metadata: Metadata = {
  title: "Contact Us | Zel Auto Rescue",
  description:
    "Call, text, or email Zel Auto Rescue for 24/7 roadside assistance in the Dallas–Fort Worth area.",
};

const { hero, hours, prepareTitle, prepareItems } = contactContent;

const contactMethods = [
  {
    title: "Call us",
    description: "The fastest way to get help on the road.",
    label: phoneDisplay,
    href: phoneHref,
  },
  {
    title: "Text us",
    description: "Send your location and what happened.",
    label: phoneDisplay,
    href: smsHref,
  },
  {
    title: "Email us",
    description: "For questions that aren't urgent.",
    label: email,
    href: emailHref,
  },
];

export default function ContactUs() {
  return (
    <>
      <MainPageBanner
        primaryText={hero.primaryText}
        secondaryText={hero.secondaryText}
        buttonText={`Call ${phoneDisplay}`}
        buttonLink={phoneHref}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <ul className="grid gap-6 md:grid-cols-3">
            {contactMethods.map((method) => (
              <li key={method.title}>
                <a
                  href={method.href}
                  className="block h-full rounded-2xl border border-slate-200 p-6 shadow-sm transition-colors hover:border-brand"
                >
                  <h2 className="text-lg font-semibold text-slate-900">{method.title}</h2>
                  <p className="mt-2 text-sm text-slate-600">{method.description}</p>
                  <p className="mt-4 break-words font-semibold text-brand">{method.label}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">Hours</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Always open
            </h2>
            <p className="mt-4 text-slate-600">{hours}</p>

            <p className="mt-10 text-sm font-semibold uppercase tracking-wider text-brand">
              Service area
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Dallas–Fort Worth metroplex
            </h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {homeContent.serviceAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h2 className="text-xl font-semibold text-slate-900">{prepareTitle}</h2>
            <ul className="mt-6 space-y-4">
              {prepareItems.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                  <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
