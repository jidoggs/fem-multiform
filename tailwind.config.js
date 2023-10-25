/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        themeNavyBlue: "#02295A",
        themeBlue: "#473DFF",
        themePurple: "#ADBEFF",
        themeCyan: "#BFE2FD",
        themeRed: "#ED3548",
        themeGray: {
          10: "#9699AB",
          20: "#D6D9E6",
          30: "#F0F6FF",
          40: "#FAFBFF",
        },
      },
    },
  },
  plugins: [],
};
