import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F3F6F1",
        surface: "#FFFFFF",
        surfaceSoft: "#EAF0E9",
        ink: "#1E2E2A",
        inkSoft: "#4B5F59",
        teal: "#2F5D5A",
        tealDeep: "#17302E",
        sage: "#7FA08C",
        lavender: "#9C8FD9",
        sand: "#E3B276",
        coral: "#D9694F",
        line: "rgba(30,46,42,0.13)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        xl2: "18px",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scaleY(0.45)", opacity: "0.55" },
          "50%": { transform: "scaleY(1)", opacity: "1" },
        },
      },
      animation: {
        breathe: "breathe 3.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
