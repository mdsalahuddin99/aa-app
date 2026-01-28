import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-hind-siliguri)", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          dark: "var(--primary-dark)",
        },
        // Customizing Emerald to match the Logo Green (#006a4e)
        emerald: {
          50: '#eefcf6',
          100: '#d5f7e8',
          200: '#aef0d4',
          300: '#7ae5bc',
          400: '#42d3a0',
          500: '#1cb584',
          600: '#006a4e', // Logo Green
          700: '#067c5d',
          800: '#08624b',
          900: '#08503f',
          950: '#032d24',
        },
        // Customizing Rose/Red to match the Logo Red (#D32F2F approx)
        rose: {
            50: '#fff1f2',
            100: '#ffe4e6',
            200: '#fecdd3',
            300: '#fda4af',
            400: '#fb7185',
            500: '#f43f5e',
            600: '#D32F2F', // Logo Red (Approx)
            700: '#be123c',
            800: '#9f1239',
            900: '#881337',
            950: '#4c0519',
        }
      },
    },
  },
  plugins: [],
};
export default config;
