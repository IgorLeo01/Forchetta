/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#FFA000',
        secondary: '#05161A',
        white: '#FFFFFF',
        grayText: '#C8C8C8',
      },
      fontFamily: {
        prompt: ['Prompt', 'sans-serif'],
        baskervville: ['Baskervville', 'serif'],
      },
    },
  },
  plugins: [],
};
