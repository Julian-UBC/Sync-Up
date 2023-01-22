/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: '#1eb2a6',
        secondary: '',
        gray: '#9da5b0',
        red: '#fc5d5b',
        green: '#00a389',
        text: '#071232',
        light: {
          gray: '#f0f1f3',
          green: '#d2e8e8',
          red: '#fcf2f2',
        },
        dark: {
          gray: '#7a8091'
        }
      }
    },
  },
  plugins: [],
};
