import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          DEFAULT: "#0B0F1A",
          50: "#151B2B",
          100: "#1A2236",
        },
        nexus: {
          black: "#050505",
          dark: "#0a0a0a",
          red: "#e63946",
          emerald: "#2a9d8f",
        },
      },
      fontFamily: {
        space: ["var(--font-space)", "system-ui", "sans-serif"],
        manrope: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
