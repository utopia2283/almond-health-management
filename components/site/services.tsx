"use client";
import { useI18n } from "@/components/i18n-provider";
import { Sparkles, HeartPulse, Stethoscope, Leaf, MoonStar, Activity } from "lucide-react";
const icons = [Sparkles, HeartPulse, Stethoscope, Leaf, MoonStar, Activity];
export default function Services() {
  const { t, lang } = useI18n();
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className={"text-xs uppercase tracking-widest text-sage-700 " + (lang === "zh" ? "font-hk" : "")}>
              {t.services.eyebrow}
            </p>
            <h2 className={"mt-3 text-balance text-4xl leading-tight tracking-tightest text-ink sm:text-5xl " + (lang === "zh" ? "font-hk" : "font-display")}>
              {t.services.title}
            </h2>
            <p className={"mt-4 max-w-xl text-pretty text-lg leading-relaxed text-ink/70 " + (lang === "zh" ? "font-hk" : "")}>
              {t.services.subtitle}
            </p>
          </div>
          <div className="hidden lg:flex h-px w-40 bg-ink/15" />
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <article
                key={i}
                className="group relative flex flex-col gap-4 bg-bone p-7 transition hover:bg-white"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-sage-100 text-sage-700 transition group-hover:bg-ink group-hover:text-bone">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className={"text-xs text-ink/40 " + (lang === "zh" ? "font-hk" : "font-sans")}>
                    0{i + 1}
                  </span>
                </div>
                <h3 className={"text-xl font-medium text-ink " + (lang === "zh" ? "font-hk" : "font-display")}>
                  {s.name}
                </h3>
                <p className={"text-sm leading-relaxed text-ink/65 " + (lang === "zh" ? "font-hk" : "")}>
                  {s.desc}
                </p>
                <div className="mt-auto flex items-center gap-2 pt-2 text-xs text-ink/40">
                  <span className="h-px w-6 bg-ink/20" />
                  <span className={lang === "zh" ? "font-hk" : ""}>
                    {lang === "zh" ? "了解詳情" : "Learn more"}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
