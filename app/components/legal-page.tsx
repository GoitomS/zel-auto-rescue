import { formatArticleDate } from "../lib/articles";
import type { LegalDocument } from "../lib/legal";
import { email, emailHref, phoneDisplay, phoneHref } from "../lib/site";

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <article className="bg-white">
      <header className="bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {document.title}
          </h1>
          <p className="mt-4 text-sm text-slate-500">
            Effective date:{" "}
            <time dateTime={document.effectiveDate}>
              {formatArticleDate(document.effectiveDate)}
            </time>
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="leading-7 text-slate-700">{document.intro}</p>

        {document.sections.map((section, index) => (
          <section key={section.heading} className="mt-10">
            <h2 className="text-xl font-semibold text-slate-900">
              {index + 1}. {section.heading}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 leading-7 text-slate-700">
                {paragraph}
              </p>
            ))}
            {section.items && (
              <ul className="mt-3 list-disc space-y-1 pl-6 leading-7 text-slate-700">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">
            {document.sections.length + 1}. Contact us
          </h2>
          <p className="mt-3 leading-7 text-slate-700">
            If you have questions about our {document.title}, contact us by
            email at{" "}
            <a href={emailHref} className="font-semibold text-brand hover:text-brand-dark">
              {email}
            </a>{" "}
            or by phone at{" "}
            <a href={phoneHref} className="font-semibold text-brand hover:text-brand-dark">
              {phoneDisplay}
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
