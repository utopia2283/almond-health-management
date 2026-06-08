"use client";
import { useI18n } from "@/components/i18n-provider";
import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
export default function Cta() {
  const { t, lang } = useI18n();
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-8 py-16 text-bone shadow-lift sm:px-14 sm:py-20 lg:px-20">
          <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-sage-500/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-gold-400/20 blur-3xl" />
          <div className="absolute right-10 top-10 hidden font-hk text-7xl text-bone/10 lg:block select-none">仁</div>
          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h2 className={"text-balance text-4xl leading-[1.05] tracking-tightest sm:text-5xl lg:text-6xl " + (lang === "zh" ? "font-hk" : "font-display")}>
                {t.cta.title}
              </h2>
              <p className={"mt-5 max-w-xl text-pretty text-lg leading-relaxed text-bone/70 " + (lang === "zh" ? "font-hk" : "")}>
                {t.cta.subtitle}
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center justify-between gap-2 rounded-2xl bg-bone px-6 py-4 text-base font-medium text-ink transition hover:bg-cream"
              >
                {t.cta.cta}
                <ArrowUpRight className="h-5 w-5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:24810081"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-bone/20 px-4 py-3 text-sm font-medium text-bone transition hover:border-bone/40"
                >
                  <Phone className="h-4 w-4" /> Wan Chai
                </a>
                <a
                  href="tel:29406318"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-bone/20 px-4 py-3 text-sm font-medium text-bone transition hover:border-bone/40"
                >
                  <Phone className="h-4 w-4" /> Tsuen Wan
                </a>
              </div>
              <a
                href="https://wa.me/85267722119"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-bone/20 px-4 py-3 text-sm font-medium text-bone transition hover:border-bone/40"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
