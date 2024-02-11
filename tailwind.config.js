/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner1: "url('/src/batman.jpg')",
      },
      colors: {
        movieapp: {
          background: "black",
        },
      },
    },
  },
  plugins: [],
};
