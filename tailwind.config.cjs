/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primay: "#0B0D17",
        secondary: "#D0D6F9",
      },
    },
    fontFamily: {
      barlow: ['"Barlow Condensed"', "sans-serif"],
      bellefair: ["Bellefair", "serif"],
    },
  },
  plugins: [],
};
