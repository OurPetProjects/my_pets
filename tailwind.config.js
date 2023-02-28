/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'slate': '#2E4052',
      'yellow': '#FFC857',
      'blue': '#7293A0',
      'red': '#8A3431',
      'white': '#FDFFFB'
    }
  },
  plugins: [
     require('@tailwindcss/forms')
  ],
}
