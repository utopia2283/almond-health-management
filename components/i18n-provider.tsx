"use client";

import * as React from "react";

type Lang = "en" | "zh";

interface Dict {
  nav: { services: string; approach: string; clinics: string; stories: string; contact: string; book: string };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    bullets: string[];
  };
  trust: string[];
  services: { eyebrow: string; title: string; subtitle: string; items: { name: string; desc: string }[] };
  approach: { eyebrow: string; title: string; subtitle: string; steps: { num: string; title: string; desc: string }[] };
  values: { eyebrow: string; title: string; cards: { tag: string; title: string; body: string }[] };
  clinics: { eyebrow: string; title: string; subtitle: string };
  stories: { eyebrow: string; title: string; items: { quote: string; name: string; role: string }[] };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  cta: { title: string; subtitle: string; cta: string };
  footer: { tagline: string; nav: string; visit: string; connect: string; rights: string; addressLabel: string; hoursLabel: string };
}

const en: Dict = {
  nav: {
    services: "Services",
    approach: "Our Approach",
    clinics: "Clinics",
    stories: "Stories",
    contact: "Contact",
    book: "Book a visit",
  },
  hero: {
    eyebrow: "Almond Health Management · TCM since 2008",
    title: "Modern Chinese medicine, calibrated to the way you actually live.",
    subtitle:
      "Acupuncture, herbal therapy, and acupoint catgut-embedding weight management from registered Chinese medicine practitioners in Wan Chai and Tsuen Wan.",
    ctaPrimary: "Book a consultation",
    ctaSecondary: "Explore our approach",
    bullets: [
      "Registered Chinese Medicine Practitioners",
      "Personalised herbal formulas",
      "Two Hong Kong clinics",
    ],
  },
  trust: ["Wan Chai", "Tsuen Wan", "By appointment", "CMP registered"],
  services: {
    eyebrow: "What we treat",
    title: "Care built around your constitution, not just your symptoms.",
    subtitle:
      "Every programme begins with a tongue, pulse and lifestyle read, and ends with a plan you can actually live with.",
    items: [
      {
        name: "Weight & metabolic reset",
        desc: "Acupoint catgut embedding, abdominal acupuncture and tailored herbal formulas for sustainable, medically supervised change.",
      },
      {
        name: "Women's health",
        desc: "Cycle, fertility, perimenopause and postpartum recovery supported with classical formulas and gentle needling.",
      },
      {
        name: "Pain & recovery",
        desc: "Neck, shoulder, lower back and post-injury recovery through acupuncture, cupping and tuina.",
      },
      {
        name: "Skin & complexion",
        desc: "Internal medicine for acne, eczema and dullness, working from the inside out over six to twelve weeks.",
      },
      {
        name: "Sleep, stress & energy",
        desc: "Quiet, evidence-aware protocols for insomnia, burnout and the wired-but-tired feeling that won't shift.",
      },
      {
        name: "Internal medicine",
        desc: "Digestion, immunity, allergies and post-viral fatigue, with referrals to specialists when needed.",
      },
    ],
  },
  approach: {
    eyebrow: "How we work",
    title: "A four-step process, refined over fifteen years of practice.",
    subtitle:
      "We move slowly on the first visit and faster once we know you. No mystery, no add-on packages.",
    steps: [
      { num: "01", title: "Listen", desc: "A 60-minute intake covering tongue, pulse, sleep, digestion, mood and history." },
      { num: "02", title: "Map", desc: "A written TCM pattern diagnosis plus a plain-English explanation of what's going on." },
      { num: "03", title: "Treat", desc: "Targeted acupuncture, cupping or tuina, paired with a custom herbal prescription." },
      { num: "04", title: "Review", desc: "Two to four weekly reviews, recalibrating the formula as your body responds." },
    ],
  },
  values: {
    eyebrow: "Why Almond",
    title: "Quiet, careful medicine, the way it used to be practised.",
    cards: [
      { tag: "Evidence-aware", title: "Classical roots, modern records", body: "Every formula and point prescription is logged, reviewed and explained in language you'll actually use at home." },
      { tag: "Personalised", title: "Nothing off the shelf", body: "Your prescription is granulated for your week, not pulled from a warehouse shelf and repackaged." },
      { tag: "Transparent", title: "Clear pricing, real timing", body: "You see the herbs on the label, the cost on the receipt, and the rationale on the discharge sheet." },
      { tag: "Continuity", title: "The same practitioner", body: "You'll see the same CMP across visits so patterns can be tracked instead of re-explained." },
    ],
  },
  clinics: {
    eyebrow: "Where to find us",
    title: "Two clinics, one standard of care.",
    subtitle: "Both are a short walk from an MTR exit, with a calm waiting room and a private treatment suite.",
  },
  stories: {
    eyebrow: "Patient stories",
    title: "What people say after six weeks, not the first visit.",
    items: [
      { quote: "I came in for weight loss and stayed for the way they actually listen. I dropped two sizes without being hungry once.", name: "Christine L.", role: "Marketing director" },
      { quote: "My cycle pain is the lowest it's been since I was sixteen. The herbs are explained in English, which matters more than you'd think.", name: "Mei T.", role: "Architect" },
      { quote: "After two years of post-viral fatigue, I sleep through the night again. The first clinic I've been to that didn't push supplements at me.", name: "Daniel W.", role: "Engineer" },
    ],
  },
  faq: {
    eyebrow: "Common questions",
    title: "Things people ask us in the first five minutes.",
    items: [
      { q: "Do you only do weight loss?", a: "No. Weight and metabolic work is the most-asked-about area, but our practitioners see the full range of internal medicine, pain, women's health and skin." },
      { q: "Is acupuncture safe if I'm pregnant or on medication?", a: "Yes for most cases, with adjustments. Tell us at booking and we'll match you with the right practitioner and review your current prescriptions." },
      { q: "How many sessions will I need?", a: "Most people notice a change within three to four visits. Chronic patterns usually take eight to twelve. We will tell you clearly if we think TCM isn't the right fit." },
      { q: "Can I claim on insurance?", a: "Most Hong Kong providers cover our registered CMPs. We'll provide a stamped receipt and diagnosis code on request." },
    ],
  },
  cta: {
    title: "Ready to begin, or just curious?",
    subtitle: "Book a 60-minute first visit, or message us on WhatsApp and we'll answer the questions that aren't here.",
    cta: "Book a visit",
  },
  footer: {
    tagline: "Almond Health Management · 仁幸中醫健康管理",
    nav: "Clinic",
    visit: "Visit",
    connect: "Connect",
    rights: "All rights reserved.",
    addressLabel: "Address",
    hoursLabel: "Hours",
  },
};

const zh: Dict = {
  nav: {
    services: "診療服務",
    approach: "治療理念",
    clinics: "診所位置",
    stories: "客人分享",
    contact: "聯絡我們",
    book: "預約診症",
  },
  hero: {
    eyebrow: "仁幸中醫健康管理 · 自 2008 年起",
    title: "以現代中醫，回應你真實的生活節奏。",
    subtitle:
      "由註冊中醫師主理，提供針灸、穴位埋線減肥及個人處方中藥，灣仔與荃灣兩間診所同步應診。",
    ctaPrimary: "預約首次診症",
    ctaSecondary: "了解治療理念",
    bullets: [
      "註冊中醫師主理",
      "度身訂造中藥處方",
      "香港兩間診所",
    ],
  },
  trust: ["灣仔", "荃灣", "全預約制", "註冊中醫"],
  services: {
    eyebrow: "診療範圍",
    title: "以體質為本，而不止於症狀。",
    subtitle: "每次診療由舌診、脈診與生活節奏開始，製訂你能真正跟隨的方案。",
    items: [
      { name: "體重及代謝重整", desc: "穴位埋線、腹針與中藥處方並用，由醫師監督下循序減重。" },
      { name: "婦女健康", desc: "經期、備孕、更年期及產後調理，以經方配以溫和針灸。" },
      { name: "痛症及復健", desc: "頸肩腰背痛及運動後復健，結合針灸、拔罐及推拿。" },
      { name: "皮膚及體質", desc: "暗瘡、濕疹及暗沉膚質，以六至十二週的內服調理由內而外改善。" },
      { name: "睡眠及壓力", desc: "針對失眠、耗損及長期疲勞，循經典方藥調整作息節律。" },
      { name: "內科調理", desc: "消化、免疫力、敏感及長新冠後調理，必要時轉介專科。" },
    ],
  },
  approach: {
    eyebrow: "診療流程",
    title: "四個步驟，源自十五年的臨床經驗。",
    subtitle: "初診從容一點，熟悉後節奏可以加快。沒有神秘療程，也沒有疊加銷售。",
    steps: [
      { num: "01", title: "聆 聽", desc: "六十分鐘詳細問診，包括舌診、脈診、睡眠、消化與病史。" },
      { num: "02", title: "判 證", desc: "書面中醫辨證，並以日常語言解釋身體正發生甚麼。" },
      { num: "03", title: "治 療", desc: "針灸、拔罐或推拿，配以度身調配的草本處方。" },
      { num: "04", title: "覆 診", desc: "每二至四週覆診，根據身體反應重新校準處方。" },
    ],
  },
  values: {
    eyebrow: "選擇仁幸",
    title: "從前中醫該有的樣子。",
    cards: [
      { tag: "循證", title: "古方為根，現代記錄", body: "每張處方及穴位皆有記錄，並以日常語言說明，方便在家跟從。" },
      { tag: "個人化", title: "沒有罐裝方案", body: "你的中藥顆粒是按當週體質調配，不會是貨架上隨意取下的成藥。" },
      { tag: "透明", title: "價錢清晰，節奏明瞭", body: "藥材標籤、收費細項及治療理據，全部寫在診後單張上。" },
      { tag: "持續", title: "同一位醫師", body: "每次由同一位註冊中醫跟進，方便連續觀察而非重頭再講。" },
    ],
  },
  clinics: {
    eyebrow: "診所位置",
    title: "兩間診所，同一種認真。",
    subtitle: "鄰近港鐵出口，候診區安靜，治療間獨立私隱。",
  },
  stories: {
    eyebrow: "客人分享",
    title: "六週後的轉變，比首次來診時更值得一聽。",
    items: [
      { quote: "本來是來減肥，後來留下來，是因為醫師真的會聆聽。六週後瘦了兩個碼，從未捱過餓。", name: "Christine L.", role: "市場總監" },
      { quote: "經痛比十六歲以來都輕。能以廣東話解釋草藥成分，比想像中重要。", name: "Mei T.", role: "建築師" },
      { quote: "長新冠兩年後終於一覺到天亮。第一次遇到不硬銷保健品的診所。", name: "Daniel W.", role: "工程師" },
    ],
  },
  faq: {
    eyebrow: "常見問題",
    title: "病人最常在前五分鐘問的事。",
    items: [
      { q: "你們只看減肥嗎？", a: "不是。減肥及代謝調理是最常查詢的範疇，但醫師亦診治內科、痛症、婦女健康及皮膚等問題。" },
      { q: "懷孕或正在食西藥，可以做針灸嗎？", a: "大部份情況可以，並會調整穴位。預約時告訴我們，我們會安排合適的醫師並審視你現時的處方。" },
      { q: "需要做幾多次？", a: "大多數人在三至四次內會感到轉變。長期體質問題一般需要八至十二次。若不適合中醫，我們會坦白告訴你。" },
      { q: "可以保險索償嗎？", a: "本港大部分保險公司接受我們註冊中醫師的單據。可於覆診時索取蓋章收據及診斷編碼。" },
    ],
  },
  cta: {
    title: "準備開始，還是只想先問一問？",
    subtitle: "預約六十分鐘的首次診症，或透過 WhatsApp 聯絡我們，回答你在網站找不到的問題。",
    cta: "立即預約",
  },
  footer: {
    tagline: "仁幸中醫健康管理 · Almond Health Management",
    nav: "診所",
    visit: "前往",
    connect: "關注我們",
    rights: "版權所有。",
    addressLabel: "地址",
    hoursLabel: "應診時間",
  },
};

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
}

const I18nContext = React.createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>("zh");
  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof document !== "undefined") {
      document.documentElement.lang = l === "zh" ? "zh-Hant-HK" : "en";
    }
  };
  const value = React.useMemo(
    () => ({ lang, setLang, t: lang === "zh" ? zh : en }),
    [lang]
  );
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = React.useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
