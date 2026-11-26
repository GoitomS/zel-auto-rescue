import { phoneDisplay, phoneHref } from "../lib/site";

export function CallToAction({
  title = "Stranded right now?",
  description = "Call us any time, day or night. We are ready to help.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-brand">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
          <p className="mt-2 text-white/90">{description}</p>
        </div>
        <a
          href={phoneHref}
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-slate-100"
        >
          Call {phoneDisplay}
        </a>
      </div>
    </section>
  );
}
