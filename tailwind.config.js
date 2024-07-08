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
      display: ["Reform", "sans-serif"],
      sans: ["ABCDiatype", "sans-serif"],
      mono: ["ABCDiatypeMono", "monospace"]
    },
    letterSpacing: {
      tight: '-.002em'
    }
  },
  plugins: [],
  safelist: ["text-right"],
};
