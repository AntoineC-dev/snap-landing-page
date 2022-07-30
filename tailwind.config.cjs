/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const { createTrue } = require("typescript");
module.exports = {
  content: ["./src/app.html", "./src/**/*.{html,js,svelte,ts}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1366px",
      "3xl": "1536px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "hsl(0, 0%, 8%)",
      surface: "hsl(0, 0%, 98%)",
      gray: "hsl(0, 0%, 41%)",
      blue: "hsl(228, 45%, 44%)",
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Epilogue", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
