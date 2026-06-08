"use client";
import { useI18n } from "@/components/i18n-provider";
import { Facebook, Instagram, Phone, MapPin, MessageCircle } from "lucide-react";
export default function Footer() {
  const { t, lang } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-ink/[0.97] text-bone/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-bone text-ink">
                <span className="font-hk text-base">仁</span>
              </span>
              <div>
                <p className="font-display text-xl text-bone">Almond Health Management</p>
                <p className="font-hk text-xs text-bone/55">仁幸中醫健康管理</p>
              </div>
            </div>
            <p className={"mt-6 max-w-md text-pretty text-sm leading-relaxed text-bone/65 " + (lang === "zh" ? "font-hk" : "")}>
              {lang === "zh"
                ? "兩間香港診所，由註冊中醫師主理，提供針灸、中藥及穴位埋線等服務。"
                : "Two clinics in Hong Kong, led by registered Chinese Medicine Practitioners, offering acupuncture, herbal therapy and acupoint catgut embedding."}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/almondpolyclinic"
                aria-label="Facebook"
                className="grid h-9 w-9 place-items-center rounded-full border border-bone/15 text-bone/70 transition hover:border-bone/40 hover:text-bone"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/almondhealthmanagement"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-bone/15 text-bone/70 transition hover:border-bone/40 hover:text-bone"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-4">
            <h4 className={"text-xs uppercase tracking-widest text-bone/50 " + (lang === "zh" ? "font-hk" : "")}>
              {t.footer.nav}
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-gold-400" />
                <span className={lang === "zh" ? "font-hk" : ""}>
                  {lang === "zh"
                    ? "灣仔 · 皇后大道東145號恆山中心22樓"
                    : "Wan Chai \u00b7 22/F Hang Shan Centre, 145 Queen\u2019s Road East"}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-gold-400" />
                <span className={lang === "zh" ? "font-hk" : ""}>
                  {lang === "zh"
                    ? "荃灣 · 眾安街68號千色匯 I 1605室"
                    : "Tsuen Wan \u00b7 1605 Kolour\u2013Tsuen Wan I, 68 Chung On Street"}
                </span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h4 className={"text-xs uppercase tracking-widest text-bone/50 " + (lang === "zh" ? "font-hk" : "")}>
              {t.footer.connect}
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold-400" />
                <a href="tel:24810081" className="hover:text-bone">2481 0081</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold-400" />
                <a href="tel:29406318" className="hover:text-bone">2940 6318</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 text-gold-400" />
                <a href="https://wa.me/85267722119" className="hover:text-bone">WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-bone/10 pt-6 text-xs text-bone/50 sm:flex-row sm:items-center">
          <p className={lang === "zh" ? "font-hk" : ""}>
            \u00a9 {year} Almond Health Management Co. Ltd. {t.footer.rights}
          </p>
          <p className={lang === "zh" ? "font-hk" : ""}>
            {lang === "zh" ? "由註冊中醫師主理" : "Practised by registered CMPs"}
          </p>
        </div>
      </div>
    </footer>
  );
}
