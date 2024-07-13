/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*/.{html,js}", "./index.html"],
  theme: {
    fontSize: {
      "sm": "16px",
      "md": "18px",
      "xl": "25px",
      "2x1": "28px",
      "3x1": "58px",
    },
    extend: {
      colors: {
        "gray": "#B9BBBB",
        "green": "#6E9277",
        "black": "#000000",
        "white": "#ffffff",
        "lite gray": "#F5F8F6",
        "gray2": "#4D5852",
        "liteblack": "#4D5852",
        "darkgreen": "#48524A",
        "darkwhite": "#F1EDE2"
      }
    },
    plugins: [],
  }
}

