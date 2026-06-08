import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F1B17",
        bone: "#F5F1EA",
        cream: "#EFE8DC",
        sage: {
          50: "#F3F7F3",
          100: "#E2ECDF",
          200: "#C5D9C0",
          300: "#9DBC95",
          400: "#7AA171",
          500: "#5C8457",
          600: "#476842",
          700: "#3A5235",
          800: "#2F422C",
          900: "#283523",
        },
        gold: {
          400: "#D4B16A",
          500: "#C39A4F",
          600: "#A37C36",
        },
        rust: "#9A3B1F",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        display: ['"Playfair Display"', "ui-serif", "Georgia", "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        hk: ['"Noto Serif TC"', '"PingFang TC"', '"Microsoft JhengHei"', "serif"],
        hksans: ['"PingFang TC"', '"Microsoft JhengHei"', "ui-sans-serif", "system-ui"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15, 27, 23, 0.04), 0 8px 24px rgba(15, 27, 23, 0.06)",
        lift: "0 12px 40px -12px rgba(15, 27, 23, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
