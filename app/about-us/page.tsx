import type { Metadata } from "next";
import Link from "next/link";
import { CallToAction } from "../components/call-to-action";
import MainPageBanner from "../components/main-page-banner";
import { aboutContent } from "../lib/about-content";
import { homeContent } from "../lib/home-content";
import { phoneDisplay, phoneHref } from "../lib/site";

export const metadata: Metadata = {
  title: "About Us | Zel Auto Rescue",
  description:
    "Learn about Zel Auto Rescue, a local 24/7 roadside assistance team serving drivers across the Dallas–Fort Worth area.",
};

const { hero, story, mission, values } = aboutContent;

export default function AboutUs() {
  return (
    <>
      <MainPageBanner
        primaryText={hero.primaryText}
        secondaryText={hero.secondaryText}
        buttonText={`Call ${phoneDisplay}`}
        buttonLink={phoneHref}
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">Our story</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {story.title}
            </h2>
            <div className="mt-6 space-y-4 text-slate-600">
              {story.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-7">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-slate-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">Our mission</p>
            <p className="mt-4 text-xl font-medium leading-8 text-slate-900">{mission}</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">Our values</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What we stand for
          </h2>
          <dl className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <dt className="text-lg font-semibold text-slate-900">{value.title}</dt>
                <dd className="mt-3 text-sm leading-6 text-slate-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">What we do</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Four services, done well
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {homeContent.services.map((service) => (
              <li key={service.title} className="border-l-4 border-brand pl-4">
                <h3 className="font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{service.description}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-slate-600">
            Have a question about our services?{" "}
            <Link href="/contact-us" className="font-semibold text-brand hover:text-brand-dark">
              Get in touch
            </Link>
            .
          </p>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
