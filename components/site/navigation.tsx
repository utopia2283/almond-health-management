"use client";

import * as React from "react";
import { useI18n } from "@/components/i18n-provider";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = (t: ReturnType<typeof useI18n>["t"]) => [
  { href: "#services", label: t.nav.services },
  { href: "#approach", label: t.nav.approach },
  { href: "#clinics", label: t.nav.clinics },
  { href: "#stories", label: t.nav.stories },
  { href: "#contact", label: t.nav.contact },
];

export default function Navigation() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 " +
        (scrolled
          ? "backdrop-blur-md bg-bone/80 border-b border-ink/5"
          : "bg-transparent")
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 lg:px-10 py-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="relative grid h-9 w-9 place-items-center rounded-full bg-ink text-bone">
            <span className="font-hk text-base font-medium">仁</span>
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-gold-500" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg text-ink">Almond</span>
            <span className="font-hk text-[11px] tracking-wide text-ink/60 -mt-0.5">
              仁幸中醫
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links(t).map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-ink/70 transition hover:bg-ink/5 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center rounded-full border border-ink/10 bg-white/70 p-1 text-xs">
            <button
              onClick={() => setLang("en")}
              className={
                "rounded-full px-3 py-1.5 font-medium transition " +
                (lang === "en" ? "bg-ink text-bone" : "text-ink/60 hover:text-ink")
              }
            >
              EN
            </button>
            <button
              onClick={() => setLang("zh")}
              className={
                "rounded-full px-3 py-1.5 font-hk font-medium transition " +
                (lang === "zh" ? "bg-ink text-bone" : "text-ink/60 hover:text-ink")
              }
            >
              中
            </button>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-medium text-bone transition hover:bg-ink/85"
          >
            {t.nav.book}
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((s) => !s)}
            className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-white/70"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink/5 bg-bone/95 backdrop-blur">
          <div className="px-6 py-4 flex flex-col gap-1">
            {links(t).map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-ink/80 hover:bg-ink/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-medium text-bone"
            >
              {t.nav.book}
            </a>
            <div className="mt-3 flex items-center gap-2 text-xs">
              <button
                onClick={() => setLang("en")}
                className={
                  "rounded-full px-3 py-1.5 " +
                  (lang === "en" ? "bg-ink text-bone" : "bg-ink/5 text-ink/70")
                }
              >
                English
              </button>
              <button
                onClick={() => setLang("zh")}
                className={
                  "rounded-full px-3 py-1.5 font-hk " +
                  (lang === "zh" ? "bg-ink text-bone" : "bg-ink/5 text-ink/70")
                }
              >
                繁體中文
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
