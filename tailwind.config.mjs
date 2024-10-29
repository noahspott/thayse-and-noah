/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "thay-green": {
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
        dark: {
          1: "#2e2e2e",
          2: "#3a3a3a",
        },
      },
    },
  },
  plugins: [],
};
