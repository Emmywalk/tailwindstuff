/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff7b7b",
        gray_bg: "#2E3E55",
        orange_btn: "#DF6E1E",
        form_bg: "#D9D9D94D",
        gray_nv: " rgba(46, 62, 85, 0.8)"
      }
    },
  },
  plugins: [],
}