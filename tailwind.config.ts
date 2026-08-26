import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#10213F",
          900: "#1A2E59",
          800: "#213966",
          700: "#2A477A",
          600: "#3C5B8D",
        },
        brand: {
          800: "#075F47",
          700: "#078562",
          600: "#0B996E",
          500: "#12AF7C",
          400: "#39C694",
          300: "#76DDB9",
          100: "#DDF8EE",
          50: "#F0FCF7",
        },
      },
      boxShadow: {
        soft: "0 28px 80px -52px rgba(26,46,89,.28)",
        card: "0 22px 70px -50px rgba(26,46,89,.26)",
        glow: "0 22px 72px -32px rgba(18,175,124,.48)",
        lift: "0 34px 90px -50px rgba(26,46,89,.34)",
      },
      backgroundImage: {
        "hero-grid": "linear-gradient(rgba(26,46,89,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(26,46,89,.045) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%,100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "pulse-soft": "pulseSoft 5s ease-in-out infinite",
        shimmer: "shimmer 2.7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
