"use client";
import * as React from "react";
import { useI18n } from "@/components/i18n-provider";
import { Plus, Minus } from "lucide-react";
export default function Faq() {
  const { t, lang } = useI18n();
  const [open, setOpen] = React.useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className={"text-xs uppercase tracking-widest text-sage-700 " + (lang === "zh" ? "font-hk" : "")}>
            {t.faq.eyebrow}
          </p>
          <h2 className={"mt-3 text-balance text-4xl leading-tight tracking-tightest text-ink sm:text-5xl " + (lang === "zh" ? "font-hk" : "font-display")}>
            {t.faq.title}
          </h2>
        </div>
        <div className="mt-10 divide-y divide-ink/10 rounded-3xl border border-ink/10 bg-white">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition hover:bg-cream/50 sm:px-8"
                  aria-expanded={isOpen}
                >
                  <span className={"text-base font-medium text-ink sm:text-lg " + (lang === "zh" ? "font-hk" : "")}>
                    {item.q}
                  </span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink/10 text-ink/60">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className={"px-6 pb-6 text-pretty text-base leading-relaxed text-ink/70 sm:px-8 " + (lang === "zh" ? "font-hk" : "")}>
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
