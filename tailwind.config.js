/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ajuste conforme sua estrutura
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        laranja: "#E04300",
        "laranja-70": "#E0430070",
        "laranja-20": "#E0430020",
        gray: "#959595",
        "black-15": "#00000015",
        "black-05": "#00000005",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}