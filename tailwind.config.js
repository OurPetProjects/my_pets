/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      // For use in responsiveness
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      // Theme pallete
      slate: "#2E4052",
      yellow: "#FFC857",
      blue: "#7293A0",
      red: "#8A3431",
      white: "#FDFFFB",
    },
    fontFamily: {
      // Set chosen font(s) here
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
