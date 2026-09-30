"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, telHref, nav } from "../site";
import { PhoneIcon, MenuIcon, CloseIcon } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const primary = site.phones[0];

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/photos/logo.png"
            alt="Mountain Movers LLC"
            width={180}
            height={60}
            priority
            className="h-10 w-auto sm:h-12"
          />
          <span className="eyebrow-tab ml-3 hidden border-l border-stone-200 pl-3 text-xs leading-tight text-forest-700 sm:block">
            Grading &amp;
            <br />
            Site Prep
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-stone-700 lg:flex">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-forest-700 ${active ? "text-forest-700" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telHref(primary.number)}
            className="inline-flex items-center gap-2 rounded-md bg-action px-4 py-2 text-sm font-bold text-stone-900 shadow-sm transition-colors hover:bg-action-dark"
          >
            <PhoneIcon className="h-4 w-4" />
            <span className="hidden sm:inline">{primary.number}</span>
            <span className="sm:hidden">Call</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-md text-stone-700 hover:bg-stone-100 lg:hidden"
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-stone-200 bg-white lg:hidden">
          <div className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-3 text-base font-semibold ${active ? "bg-forest-50 text-forest-700" : "text-stone-700 hover:bg-stone-50"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}

// Top-level nav items stay highlighted on their child pages (e.g. /services/*).
function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
