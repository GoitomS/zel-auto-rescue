import { CallToAction } from "./components/call-to-action";
import MainPageBanner from "./components/main-page-banner";
import { homeContent } from "./lib/home-content";
import { phoneDisplay, phoneHref } from "./lib/site";

const { hero, services, steps, reasons, serviceAreas, faqs } = homeContent;

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <MainPageBanner
        primaryText={hero.primaryText}
        secondaryText={hero.secondaryText}
        buttonText={`Call ${phoneDisplay}`}
        buttonLink={phoneHref}
      />

      <section id="services" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our services" title="Roadside help when you need it most" />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <li
                key={service.title}
                className="rounded-2xl border border-slate-200 p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="How it works" title="Three steps to get you moving" />
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why Zel Auto Rescue" title="Help you can count on" />
          <dl className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.title} className="border-l-4 border-brand pl-4">
                <dt className="text-lg font-semibold text-slate-900">{reason.title}</dt>
                <dd className="mt-2 text-sm leading-6 text-slate-600">{reason.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Service area" title="Serving the Dallas–Fort Worth metroplex" />
          <ul className="mt-10 flex flex-wrap gap-3">
            {serviceAreas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                  {faq.question}
                  <span aria-hidden className="text-brand transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
