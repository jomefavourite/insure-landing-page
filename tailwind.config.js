module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        color1: "#2d2640",
        color2: "#95a9c6",
        color3: "#2b272f",
        color4: "#837d87",
        color5: "#fafafa",
      },
      fontFamily: {
        dm: "DM Serif Display",
        karla: "Karla",
      },
      backgroundImage: (theme) => ({
        "work-mobile":
          "url('./public/images/bg-pattern-how-we-work-mobile.svg')",
        "footer-mobile": "url('./public/images/bg-pattern-footer-mobile.svg')",
      }),
      backgroundPosition: {
        top2: "1000px 0 0 0 ",
      },
    },
  },
  variants: {},
  plugins: [],
};
