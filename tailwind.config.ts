import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "var(--color-primary)", dark: "var(--color-primary-dark)" },
        secondary: { DEFAULT: "var(--color-secondary)" },
        accent: { DEFAULT: "var(--color-accent)", dark: "var(--color-accent-dark)" },
        surface: { DEFAULT: "var(--color-surface)", alt: "var(--color-surface-alt)" },
      },
      fontFamily: { sans: ["var(--font-inter)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
