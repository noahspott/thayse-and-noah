/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatFast: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInImage: {
          "0%": { opacity: "0" },
          "100%": { opacity: "0.85" },
        },
      },
      animation: {
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "float-fast": "floatFast 5s ease-in-out infinite",
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        fadeIn: "fadeIn 1s ease-in-out",
        fadeInImage: "fadeInImage 2s ease-in-out",
      },
      colors: {
        dark: {
          1: "#000000",
          2: "#1A1A1A",
          3: "#4D4D4D",
        },
        primary: {
          50: "#f6f7f5",
          100: "#ecefec",
          200: "#d9ded8",
          300: "#c6cec5",
          400: "#b3bdb1",
          500: "#a0ad9e",
          600: "#808a7e",
          700: "#60685f",
          800: "#40453f",
          900: "#202320",
          950: "#101110",
        },
      },
    },
  },
  plugins: [],
};
