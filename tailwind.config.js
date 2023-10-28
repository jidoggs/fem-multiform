/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
      backgroundImage: {
        check: "url('/src/assets/icon-checkmark.svg')",
        navDesktop: "url('/src/assets/bg-sidebar-desktop.svg')",
        navMobile: "url('/src/assets/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
};
