/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      bungee: ['Bungee Inline', 'cursive'],
    },
  },
  plugins: [],
};
