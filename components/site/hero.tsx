"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/components/i18n-provider";
import { WordsPullUp, WordsPullUpMultiStyle } from "@/components/ui/words-pull-up";

const navItems = {
  en: [
    { label: "Services", href: "#services" },
    { label: "Approach", href: "#approach" },
    { label: "Clinics", href: "#clinics" },
    { label: "Stories", href: "#stories" },
    { label: "Book", href: "#contact" },
  ],
  zh: [
    { label: "診療", href: "#services" },
    { label: "理念", href: "#approach" },
    { label: "診所", href: "#clinics" },
    { label: "分享", href: "#stories" },
    { label: "預約", href: "#contact" },
  ],
};

export default function Hero() {
  const { t, lang } = useI18n();
  const items = navItems[lang];
  const headline = lang === "zh" ? "仁幸" : "Almond";
  const tagline = lang === "zh" ? "中醫健康管理" : "Health Management";

  return (
    <section id="top" className="h-screen w-full">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem] bg-ink">

        {/* Background image (always works as fallback) */}
        <img
          src="https://images.unsplash.com/photo-1545048702-79362596cdc9?auto=format&fit=crop&w=2400&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Background video (enhances with motion) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1545048702-79362596cdc9?auto=format&fit=crop&w=2400&q=80"
          className="absolute inset-0 h-full w-full object-cover"
          src="https://videos.pexels.com/video-files/3577093/3577093-uhd_2560_1440_30fps.mp4"
        />

        {/* Noise overlay (film grain) */}
        <div className="pointer-events-none absolute inset-0 bg-[url('/noise.svg')] opacity-[0.18] mix-blend-overlay" />

        {/* Color tint — keep brand sage */}
        <div className="pointer-events-none absolute inset-0 bg-sage-900/40 mix-blend-multiply" />

        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-black/85" />

        {/* Floating pill nav — top center inside the card */}
        <nav className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
          <div className="flex items-center gap-3 rounded-b-2xl border-x border-b border-white/10 bg-black/75 px-4 py-2 backdrop-blur-md sm:gap-6 md:gap-10 md:rounded-b-3xl md:px-8 md:py-2.5 lg:gap-12">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[10px] transition-colors sm:text-xs md:text-sm font-hk"
                style={{ color: "rgba(225, 224, 204, 0.82)", letterSpacing: "0.02em" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E1E0CC")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(225, 224, 204, 0.82)")}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero content — bottom row */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-5 sm:px-6 md:px-10 md:pb-6">
          <div className="grid grid-cols-12 items-end gap-4">

            <div className="col-span-12 lg:col-span-8">
              <h1
                className="font-display font-medium leading-[0.82] tracking-[-0.06em] text-[clamp(72px,21vw,360px)]"
                style={{ color: "#E1E0CC" }}
              >
                <WordsPullUp text={headline} showAsterisk />
              </h1>
              <h2
                className="font-display font-light italic leading-[0.88] tracking-[-0.04em] text-[clamp(26px,7.5vw,128px)] -mt-1"
                style={{ color: "#C7C3A8" }}
              >
                <WordsPullUpMultiStyle
                  segments={[{ text: tagline, className: "italic font-light" }]}
                />
              </h2>
            </div>

            <div className="col-span-12 flex flex-col gap-4 pb-2 sm:pb-4 lg:col-span-4 lg:pb-8">

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="font-hk text-xs sm:text-sm md:text-[15px]"
                style={{ color: "rgba(225, 224, 204, 0.8)", lineHeight: 1.4 }}
              >
                {t.hero.subtitle}
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center gap-3"
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 self-start rounded-full bg-bone py-1.5 pl-5 pr-1 text-sm font-medium text-ink transition-all hover:gap-3 sm:text-base font-hk"
                >
                  {t.hero.ctaPrimary}
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                    <ArrowRight className="h-4 w-4" style={{ color: "#E1E0CC" }} />
                  </span>
                </a>
                <a
                  href="#approach"
                  className="font-hk inline-flex items-center gap-2 self-start rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-bone backdrop-blur transition hover:bg-white/10"
                >
                  {t.hero.ctaSecondary}
                </a>
              </motion.div>

            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-5 right-5 hidden items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-bone/50 md:flex font-hk"
        >
          <span className="h-px w-8 bg-bone/30" />
          {lang === "zh" ? "向下" : "Scroll"}
        </motion.div>
      </div>
    </section>
  );
}
