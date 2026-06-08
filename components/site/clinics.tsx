"use client";
import { useI18n } from "@/components/i18n-provider";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
const clinics = [
  {
    key: "wanchai",
    en: {
      name: "Wan Chai Clinic",
      address: "22/F, Hang Shan Centre, 145 Queen\u2019s Road East, Wan Chai, Hong Kong",
      mtr: "Wan Chai Station, Exit D",
      tel: "2481 0081",
      whatsapp: "6772 2119",
      hours: [
        ["Mon \u2013 Fri", "10:00 \u2013 20:00"],
        ["Sat", "10:00 \u2013 18:00"],
        ["Sun & PH", "Closed"],
      ],
    },
    zh: {
      name: "灣仔診所",
      address: "香港灣仔皇后大道東145號恆山中心22樓全層",
      mtr: "港鐵灣仔站 D 出口",
      tel: "2481 0081",
      whatsapp: "6772 2119",
      hours: [
        ["星期一至五", "10:00 \u2013 20:00"],
        ["星期六", "10:00 \u2013 18:00"],
        ["星期日及公眾假期", "休診"],
      ],
    },
  },
  {
    key: "tsuenwan",
    en: {
      name: "Tsuen Wan Clinic",
      address: "Suite 1605, 16/F, Kolour\u2013Tsuen Wan I, 68 Chung On Street, Tsuen Wan, NT",
      mtr: "Tsuen Wan Station, Exit B2",
      tel: "2940 6318",
      whatsapp: "6032 2837",
      hours: [
        ["Mon \u2013 Fri", "10:00 \u2013 20:00"],
        ["Sat", "10:00 \u2013 18:00"],
        ["Sun & PH", "Closed"],
      ],
    },
    zh: {
      name: "荃灣診所",
      address: "新界荃灣眾安街68號千色匯 I 16樓 1605 室",
      mtr: "港鐵荃灣站 B2 出口",
      tel: "2940 6318",
      whatsapp: "6032 2837",
      hours: [
        ["星期一至五", "10:00 \u2013 20:00"],
        ["星期六", "10:00 \u2013 18:00"],
        ["星期日及公眾假期", "休診"],
      ],
    },
  },
];
export default function Clinics() {
  const { t, lang } = useI18n();
  return (
    <section id="clinics" className="relative py-24 lg:py-32 bg-ink text-bone">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className={"text-xs uppercase tracking-widest text-gold-400 " + (lang === "zh" ? "font-hk" : "")}>
              {t.clinics.eyebrow}
            </p>
            <h2 className={"mt-3 text-balance text-4xl leading-tight tracking-tightest sm:text-5xl " + (lang === "zh" ? "font-hk" : "font-display")}>
              {t.clinics.title}
            </h2>
            <p className={"mt-4 max-w-xl text-pretty text-lg leading-relaxed text-bone/70 " + (lang === "zh" ? "font-hk" : "")}>
              {t.clinics.subtitle}
            </p>
          </div>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {clinics.map((c) => {
            const data = lang === "zh" ? c.zh : c.en;
            return (
              <article
                key={c.key}
                className="group relative overflow-hidden rounded-3xl border border-bone/10 bg-bone/5 p-8 transition hover:border-bone/20 hover:bg-bone/[0.07]"
              >
                <div className="flex items-center justify-between">
                  <h3 className={"text-2xl text-bone " + (lang === "zh" ? "font-hk" : "font-display")}>
                    {data.name}
                  </h3>
                  <span className={"rounded-full border border-bone/20 px-3 py-1 text-[10px] uppercase tracking-widest text-bone/60 " + (lang === "zh" ? "font-hk" : "")}>
                    {c.key === "wanchai" ? (lang === "zh" ? "港島" : "Hong Kong Island") : (lang === "zh" ? "新界" : "New Territories")}
                  </span>
                </div>
                <dl className="mt-8 space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                    <div>
                      <dt className="sr-only">Address</dt>
                      <dd className={"text-bone/85 " + (lang === "zh" ? "font-hk" : "")}>{data.address}</dd>
                      <dd className={"mt-1 text-bone/55 " + (lang === "zh" ? "font-hk" : "")}>{data.mtr}</dd>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-gold-400" />
                    <a href={"tel:" + data.tel.replace(/\s/g, "")} className="text-bone/85 hover:text-bone">
                      {data.tel}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-4 w-4 shrink-0 text-gold-400" />
                    <a href={"https://wa.me/852" + data.whatsapp} className="text-bone/85 hover:text-bone">
                      WhatsApp {data.whatsapp}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                    <div className={"space-y-1 text-bone/80 " + (lang === "zh" ? "font-hk" : "")}>
                      {data.hours.map(([d, h]) => (
                        <div key={d} className="flex gap-3">
                          <span className="w-32 text-bone/60">{d}</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </dl>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={"tel:" + data.tel.replace(/\s/g, "")}
                    className="inline-flex items-center gap-2 rounded-full bg-bone px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-cream"
                  >
                    <Phone className="h-4 w-4" />
                    {lang === "zh" ? "致電預約" : "Call to book"}
                  </a>
                  <a
                    href={"https://wa.me/852" + data.whatsapp}
                    className="inline-flex items-center gap-2 rounded-full border border-bone/20 px-5 py-2.5 text-sm font-medium text-bone transition hover:border-bone/40"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
