"use client";
import { useI18n } from "@/components/i18n-provider";
export default function Approach() {
  const { t, lang } = useI18n();
  return (
    <section id="approach" className="relative py-24 lg:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <p className={"text-xs uppercase tracking-widest text-sage-700 " + (lang === "zh" ? "font-hk" : "")}>
              {t.approach.eyebrow}
            </p>
            <h2 className={"mt-3 text-balance text-4xl leading-tight tracking-tightest text-ink sm:text-5xl " + (lang === "zh" ? "font-hk" : "font-display")}>
              {t.approach.title}
            </h2>
            <p className={"mt-4 text-pretty text-lg leading-relaxed text-ink/70 " + (lang === "zh" ? "font-hk" : "")}>
              {t.approach.subtitle}
            </p>
            <div className="mt-8 h-px w-24 bg-ink/20" />
            <p className={"mt-6 max-w-md text-sm text-ink/55 " + (lang === "zh" ? "font-hk" : "")}>
              {lang === "zh"
                ? "我們相信，緩慢而準確，比匆忙而模糊更接近中醫的本意。"
                : "Slow and precise is closer to the spirit of Chinese medicine than rushed and vague."}
            </p>
          </div>
          <div className="lg:col-span-7">
            <ol className="space-y-6">
              {t.approach.steps.map((step, i) => (
                <li
                  key={i}
                  className="group relative grid grid-cols-12 gap-4 rounded-2xl border border-ink/10 bg-bone p-6 transition hover:border-ink/20 hover:shadow-soft sm:p-8"
                >
                  <span className="col-span-3 sm:col-span-2 font-display text-3xl text-sage-600/70 sm:text-5xl">
                    {step.num}
                  </span>
                  <div className="col-span-9 sm:col-span-10">
                    <h3 className={"text-2xl font-medium text-ink " + (lang === "zh" ? "font-hk" : "font-display")}>
                      {step.title}
                    </h3>
                    <p className={"mt-2 max-w-prose text-base leading-relaxed text-ink/70 " + (lang === "zh" ? "font-hk" : "")}>
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
