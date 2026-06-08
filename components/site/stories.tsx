"use client";
import { useI18n } from "@/components/i18n-provider";
export default function Stories() {
  const { t, lang } = useI18n();
  return (
    <section id="stories" className="relative py-24 lg:py-32 bg-bone">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className={"text-xs uppercase tracking-widest text-sage-700 " + (lang === "zh" ? "font-hk" : "")}>
            {t.stories.eyebrow}
          </p>
          <h2 className={"mt-3 text-balance text-4xl leading-tight tracking-tightest text-ink sm:text-5xl " + (lang === "zh" ? "font-hk" : "font-display")}>
            {t.stories.title}
          </h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {t.stories.items.map((s, i) => (
            <figure
              key={i}
              className="flex h-full flex-col justify-between rounded-3xl border border-ink/10 bg-white p-7 shadow-soft"
            >
              <blockquote className={"text-pretty text-lg leading-relaxed text-ink/80 " + (lang === "zh" ? "font-hk" : "font-serif")}>
                &ldquo;{s.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-sage-100 font-display text-base text-sage-700">
                  {s.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-medium text-ink">{s.name}</p>
                  <p className={"text-xs text-ink/55 " + (lang === "zh" ? "font-hk" : "")}>{s.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
