module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        color1: "#3B0201",
        color2: "#FEB238",
        color3: "#661109",
        color4: "#475993",
        color5: "rgba(102,17,9,0.6)",
        color6: "#28A745",
        color7: "#d92662",
        color8: "#A78963",
        overlay: "#ffffff6b",
        "overlay-dark": "#00000052",
      },
      backgroundImage: {
        'terms': "url('/public/img/terms_bg.gif')",
        'footer': "url('/public/img/footer.jpg')",
      },
      fontFamily: {
      'openSans': ['Open Sans','sans-serif' ]
    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-rtl")],
};