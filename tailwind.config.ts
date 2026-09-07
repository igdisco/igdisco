import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-color)",
        foreground: "var(--text-primary)",
        primary: {
          DEFAULT: "var(--primary-color)",
          hover: "var(--primary-hover)",
        },
        secondary: "var(--text-secondary)",
        card: "var(--card-bg)",
        border: "var(--card-border)",
        accent: "var(--accent-color)",
      },
      fontFamily: {
        sans: ["Bahnschrift", "var(--font-barlow)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
