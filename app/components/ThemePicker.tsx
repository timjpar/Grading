"use client";

import { useEffect, useState } from "react";
import { themes, defaultTheme, THEME_STORAGE_KEY } from "../themes";

// Read the theme the no-flash script already applied (client only).
function readInitialTheme() {
  if (typeof document === "undefined") return defaultTheme;
  return document.documentElement.dataset.theme || defaultTheme;
}

export function ThemePicker() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(readInitialTheme);

  // Apply the chosen theme to <html> and persist it.
  useEffect(() => {
    document.documentElement.dataset.theme = current;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, current);
    } catch {
      /* ignore */
    }
  }, [current]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function choose(id: string) {
    setCurrent(id);
    setOpen(false);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 print:hidden">
      {/* click-away backdrop */}
      {open && (
        <button
          type="button"
          aria-hidden="true"
          tabIndex={-1}
          onClick={() => setOpen(false)}
          className="fixed inset-0 -z-10 cursor-default"
        />
      )}

      {open && (
        <div
          role="dialog"
          aria-label="Choose a color theme"
          className="absolute bottom-16 right-0 w-[min(18rem,calc(100vw-2.5rem))] rounded-2xl border border-stone-200 bg-white p-4 shadow-2xl"
        >
          <p className="eyebrow-tab mb-3 text-xs text-stone-500">Site theme</p>
          <div className="grid grid-cols-1 gap-2">
            {themes.map((theme) => {
              const active = current === theme.id;
              return (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => choose(theme.id)}
                  aria-pressed={active}
                  className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-colors ${
                    active
                      ? "border-stone-900 bg-stone-50"
                      : "border-stone-200 hover:bg-stone-50"
                  }`}
                >
                  <span
                    className="flex h-8 w-8 flex-none items-center justify-center rounded-lg ring-1 ring-black/10"
                    style={{ backgroundColor: theme.primary }}
                  >
                    <span
                      className="h-3.5 w-3.5 rounded-full ring-1 ring-white/30"
                      style={{ backgroundColor: theme.accent }}
                    />
                  </span>
                  <span className="flex-1 text-sm font-semibold text-stone-800">
                    {theme.label}
                  </span>
                  {active && (
                    <svg className="h-5 w-5 text-stone-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Change site theme"
        aria-expanded={open}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-forest-900 text-action shadow-xl ring-1 ring-black/10 transition-transform hover:scale-105 active:scale-95"
      >
        <PaletteIcon className="h-6 w-6" />
      </button>
    </div>
  );
}

function PaletteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3a9 9 0 1 0 0 18c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1-.24-.28-.39-.63-.39-1.01 0-.83.67-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-4.42-4.03-8-9-8z" />
      <circle cx="7.5" cy="10.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="12" cy="7.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="10.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}
