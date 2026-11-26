import Image from "next/image";
import bannerPic from "@/public/banner_pic.webp";

export default function MainPageBanner({
  primaryText,
  secondaryText,
  buttonText,
  buttonLink,
}: {
  primaryText?: string;
  secondaryText?: string;
  buttonText?: string;
  buttonLink?: string;
}) {
  const isExternal = buttonLink?.startsWith("http") ?? false;

  return (
    <section className="relative overflow-hidden bg-slate-50">
      <Image
        src={bannerPic}
        alt=""
        aria-hidden
        fill
        preload
        sizes="100vw"
        className="-scale-x-100 object-cover opacity-5"
      />
      <div className="relative mx-auto container flex max-w-7xl flex-col justify-center px-4 py-30 sm:px-6 lg:px-8 ">
        {/* Header */}
        <div className="max-w-5xl ">
          <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-8xl overflow-hidden pb-2">
            {primaryText}
          </h1>
        </div>

        {/* Description + Action Button (Stacks on mobile, side-by-side on md+ screens) */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center mt-6">
          <p className="max-w-2xl text-lg text-slate-600">
            {secondaryText}
          </p>
        </div>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center mt-6">
          <a
            href={buttonLink}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="rounded-full bg-brand px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark sm:inline-flex"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
