const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ["Inconsolata", "sans-serif"],
    },
  },
  plugins: [],
  safelist: ["text-right"],
};
