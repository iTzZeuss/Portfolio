/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        neon: "0 0 5px rgba(0, 255, 255, 0.7), 0 0 10px rgba(0, 255, 255, 0.5), 0 0 15px rgba(0, 255, 255, 0.3)",
      },
      fontFamily: {
        calli: ["PlaywriteIEGuides"],
        varela: ["Varela"],
        anton: ["Anton"],
      },
      backgroundImage: {
        bg2: "url('./pics/backgroundSample3.png')",
      },
    },
  },
  plugins: [],
};
