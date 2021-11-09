module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        color1: "#3B0201",
        color2: "#FEB238",
        color3: "#661109",
        overlay: "#ffffff6b",
        "overlay-dark": "#00000052",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-rtl")],
};