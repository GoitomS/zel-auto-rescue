"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNav, type NavItem } from "@/app/lib/navigation";
import { phoneDisplay, phoneHref } from "@/app/lib/site";

function isActive(pathname: string, item: NavItem) {
  if (item.href === "/") return pathname === "/";
  return (
    pathname.startsWith(item.href) ||
    (item.children?.some((child) => pathname.startsWith(child.href)) ?? false)
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-brand"
          onClick={() => setMobileOpen(false)}
        >
          Zel Auto <span className="font-normal text-slate-600">Rescue</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {mainNav.map((item) => {
            const active = isActive(pathname, item);
            const linkClass = `rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-brand ${
              active ? "text-brand" : "text-slate-700"
            }`;

            if (!item.children) {
              return (
                <Link key={item.href} href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={item.href} className="group relative">
                <Link href={item.href} className={linkClass} aria-haspopup="true">
                  {item.label}
                  <span aria-hidden className="ml-1 text-xs">
                    ▾
                  </span>
                </Link>
                <div className="invisible absolute left-0 top-full w-64 pt-2 opacity-0 transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="rounded-lg border border-slate-200 bg-white py-2 shadow-lg">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={phoneHref}
            className="hidden rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark sm:inline-flex"
          >
            Call {phoneDisplay}
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100 md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span aria-hidden className="text-2xl leading-none">
              {mobileOpen ? "×" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-slate-200 bg-white px-4 py-4 md:hidden"
        >
          <ul className="space-y-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-md px-3 py-2 text-base font-medium ${
                    isActive(pathname, item) ? "text-brand" : "text-slate-800"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="ml-4 border-l border-slate-200 pl-2">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-1.5 text-sm text-slate-600 hover:text-brand"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <a
            href={phoneHref}
            className="mt-4 block rounded-full bg-brand px-4 py-2 text-center text-sm font-semibold text-white"
          >
            Get Help Now
          </a>
        </nav>
      )}
    </header>
  );
}
