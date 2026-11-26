import Link from "next/link";
import { footerNav } from "@/app/lib/navigation";

function CopyrightYear() {
  return new Date().getFullYear();
}

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" className="text-lg font-bold text-white">
            Zel Auto <span className="font-normal text-slate-400">Rescue</span>
          </Link>
        </div>

        {footerNav.map((section) => (
          <div key={section.title}>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              {section.title}
            </h2>
            <ul className="mt-4 space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-800">
        <p className="mx-auto max-w-7xl px-4 py-6 text-xs text-slate-400 sm:px-6 lg:px-8">
          © <CopyrightYear /> Zel Auto Rescue. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
