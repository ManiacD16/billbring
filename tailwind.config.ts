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
          950: "#07111F",
          900: "#0C1933",
          800: "#132449",
          700: "#1A2E59",
          600: "#294371",
        },
        brand: {
          800: "#03392B",
          700: "#044B38",
          600: "#056147",
          500: "#087D5A",
          400: "#12AF7C",
          300: "#74D9B7",
          100: "#DDF8EE",
          50: "#F1FCF8",
        },
      },
      boxShadow: {
        soft: "0 30px 90px -44px rgba(8,18,37,.28)",
        card: "0 22px 60px -38px rgba(8,18,37,.28)",
        glow: "0 24px 78px -30px rgba(18,175,124,.62)",
        lift: "0 40px 100px -44px rgba(8,18,37,.36)",
      },
      backgroundImage: {
        "hero-grid": "linear-gradient(rgba(26,46,89,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(26,46,89,.055) 1px, transparent 1px)",
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
