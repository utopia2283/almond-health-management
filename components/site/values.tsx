"use client";
import { useI18n } from "@/components/i18n-provider";
import DisplayCards from "@/components/ui/display-cards";
import { FlaskConical, User, Receipt, Repeat } from "lucide-react";
const icons = [FlaskConical, User, Receipt, Repeat];
export default function Values() {
  const { t, lang } = useI18n();
  const cards = t.values.cards.map((c, i) => ({
    icon: (() => {
      const Icon = icons[i];
      return <Icon className="size-4 text-sage-700" />;
    })(),
    title: c.tag,
    description: c.title,
    date: c.body,
    className:
      i === 0
        ? "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-white/60 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0"
        : i === 1
        ? "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-white/60 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0"
        : "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
  }));
  return (
    <section id="values" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className={"text-xs uppercase tracking-widest text-sage-700 " + (lang === "zh" ? "font-hk" : "")}>
              {t.values.eyebrow}
            </p>
            <h2 className={"mt-3 text-balance text-4xl leading-tight tracking-tightest text-ink sm:text-5xl " + (lang === "zh" ? "font-hk" : "font-display")}>
              {t.values.title}
            </h2>
            <p className={"mt-4 max-w-md text-pretty text-lg leading-relaxed text-ink/70 " + (lang === "zh" ? "font-hk" : "")}>
              {lang === "zh"
                ? "四個原則，影響我們每一次診症的決定。"
                : "Four principles that shape every decision we make in the treatment room."}
            </p>
          </div>
          <div className="lg:col-span-7 flex items-center justify-center">
            <DisplayCards cards={cards} />
          </div>
        </div>
      </div>
    </section>
  );
}
