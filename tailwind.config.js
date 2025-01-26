/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        calli: ["PlaywriteIEGuides"],
        varela: ["Varela"],
        anton: ["Anton"],
      },
      backgroundImage: {
        bg1: "url('./pics/backgroundSample1.jpg')",
        bg2: "url('./pics/backgroundSample3.png')",
      },
    },
  },
  plugins: [],
};
