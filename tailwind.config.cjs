/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    // colors: {
    //   transparent: "transparent",
    //   current: "currentColor",
    //   black: "hsl(0, 0%, 8%)",
    //   white: "hsl(0, 0%, 98%)",
    //   gray: "hsl(0, 0%, 41%)",
    // },
    extend: {
      colors: {
        black: "hsl(0, 0%, 8%)",
        white: "hsl(0, 0%, 98%)",
        gray: "hsl(0, 0%, 41%)",
      },
      fontFamily: {
        sans: ["Epilogue", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
