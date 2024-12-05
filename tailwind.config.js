/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': "url('./backgroundSample1.jpg')",
        'bg2': "url('./backgroundSample2.jpg')",
      }
    },
  },
  plugins: [],
}