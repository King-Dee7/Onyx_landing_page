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
        theme: {
          white: "var(--white)",
          "off-white": "var(--off-white)",
          dark: "var(--dark)",
          "dark-surface": "var(--dark-surface)",
          green: "var(--green)",
          "green-dark": "var(--green-dark)",
          ink: "var(--ink)",
          body: "var(--body)",
          muted: "var(--muted)",
          border: "var(--border)",
          "border-dark": "var(--border-dark)",
        }
      },
      fontFamily: {
        syne: ["var(--font-syne)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;
