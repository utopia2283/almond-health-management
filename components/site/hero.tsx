"use client";
import { useI18n } from "@/components/i18n-provider";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { Stethoscope, Leaf, Sparkles, HeartPulse, ArrowRight, Quote } from "lucide-react";
export default function Hero() {
  const { t, lang } = useI18n();
  const quickTabs = [
    { title: t.services.items[0].name, icon: Sparkles },
    { title: t.services.items[1].name, icon: HeartPulse },
    { title: t.services.items[2].name, icon: Stethoscope },
    { type: "separator" as const },
    { title: t.services.items[3].name, icon: Leaf },
  ];
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28 grid-noise">
      <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-sage-200/40 blur-3xl" />
      <div className="absolute bottom-[-30%] left-[-10%] h-[420px] w-[420px] rounded-full bg-gold-400/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-center gap-3 text-xs text-ink/60">
          {t.trust.map((tag, i) => (
            <span key={i} className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-sage-500" />
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className={"text-sm tracking-wide text-ink/60 " + (lang === "zh" ? "font-hk" : "")}>
              {t.hero.eyebrow}
            </p>
            <h1 className={"mt-5 text-balance text-5xl leading-[1.05] tracking-tightest text-ink sm:text-6xl lg:text-7xl " + (lang === "zh" ? "font-hk" : "font-display")}>
              {t.hero.title}
            </h1>
            <p className={"mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink/70 " + (lang === "zh" ? "font-hk" : "")}>
              {t.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-bone transition hover:bg-ink/85">
                {t.hero.ctaPrimary}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a href="#approach" className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/70 px-6 py-3.5 text-sm font-medium text-ink transition hover:bg-white">
                {t.hero.ctaSecondary}
              </a>
            </div>
            <div className="mt-10">
              <p className={"text-xs uppercase tracking-widest text-ink/40 mb-3 " + (lang === "zh" ? "font-hk" : "")}>
                {lang === "zh" ? "快速了解" : "Quick explore"}
              </p>
              <ExpandableTabs tabs={quickTabs} activeColor="text-sage-700" />
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-gold-400/30 blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-sage-100 shadow-lift">
                <svg viewBox="0 0 400 500" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#C5D9C0" /><stop offset="100%" stopColor="#5C8457" /></linearGradient>
                    <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#F5F1EA" /><stop offset="100%" stopColor="#E2ECDF" /></linearGradient>
                    <radialGradient id="leaf" cx="0.5" cy="0.5" r="0.5"><stop offset="0%" stopColor="#9DBC95" /><stop offset="100%" stopColor="#476842" /></radialGradient>
                  </defs>
                  <rect width="400" height="500" fill="url(#g2)" />
                  <g opacity="0.85">
                    <path d="M0 380 Q100 320 200 340 T400 320 L400 500 L0 500 Z" fill="url(#g1)" />
                    <path d="M0 420 Q120 380 240 400 T400 380 L400 500 L0 500 Z" fill="#3A5235" opacity="0.55" />
                  </g>
                  <g transform="translate(80 90)">
                    <ellipse cx="120" cy="160" rx="120" ry="170" fill="url(#g1)" opacity="0.5" />
                    <path d="M120 30 C 70 60, 40 110, 40 170 C 40 240, 80 290, 120 300 C 160 290, 200 240, 200 170 C 200 110, 170 60, 120 30 Z" fill="#3A5235" opacity="0.95" />
                    <path d="M120 50 C 90 90, 80 140, 100 200 C 110 230, 120 250, 120 250 C 120 250, 130 230, 140 200 C 160 140, 150 90, 120 50 Z" fill="#5C8457" opacity="0.7" />
                    <line x1="120" y1="40" x2="120" y2="290" stroke="#283523" strokeWidth="1.5" opacity="0.5" />
                  </g>
                  <g transform="translate(250 60) rotate(20)" opacity="0.95">
                    <path d="M0 0 C 30 -10, 60 0, 80 30 C 60 50, 30 60, 0 50 Z" fill="url(#leaf)" />
                    <line x1="0" y1="25" x2="70" y2="25" stroke="#283523" strokeWidth="1" opacity="0.5" />
                  </g>
                  <g transform="translate(40 250) rotate(-15)" opacity="0.9">
                    <path d="M0 0 C 30 -10, 60 0, 80 30 C 60 50, 30 60, 0 50 Z" fill="url(#leaf)" />
                  </g>
                  <g transform="translate(280 320)">
                    <text x="0" y="0" fontFamily="serif" fontSize="56" fill="#F5F1EA" opacity="0.18" fontWeight="300">仁</text>
                    <text x="36" y="0" fontFamily="serif" fontSize="56" fill="#F5F1EA" opacity="0.18" fontWeight="300">幸</text>
                  </g>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                  <div className="rounded-2xl bg-bone/95 px-4 py-3 shadow-soft backdrop-blur">
                    <p className={"text-xs uppercase tracking-widest text-ink/50 " + (lang === "zh" ? "font-hk" : "")}>
                      {lang === "zh" ? "兩間診所" : "Two clinics"}
                    </p>
                    <p className="mt-1 text-sm font-medium text-ink">Wan Chai · Tsuen Wan</p>
                  </div>
                  <div className="rounded-full bg-bone/95 p-3 shadow-soft backdrop-blur">
                    <Quote className="h-4 w-4 text-sage-700" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-4 hidden sm:block">
                <div className="rounded-2xl bg-ink px-5 py-4 text-bone shadow-lift">
                  <p className={"text-xs uppercase tracking-widest text-bone/60 " + (lang === "zh" ? "font-hk" : "")}>
                    {lang === "zh" ? "首次診症" : "First visit"}
                  </p>
                  <p className="mt-1 font-display text-2xl">{lang === "zh" ? "60 分鐘" : "60 min"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
