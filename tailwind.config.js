/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: {
    //   lightBlue: "#3C97D2",
    //   white: "#FFFFFF",
    // },
    extend: {
      // keyframes: {
      //   flash: {
      //     "25%, 50%": { opacity: 0 },
      //     "50%": { opacity: 1 },
      //     "75%": { opacity: 0 },
      //   },
      // },
      // animation: {
      //   flash: "flash 2s",
      // },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-animated")],
};
