/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  important: true,
  mode: "JIT",
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      merriweatherSans: ["Merriweather Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
    },
    extend: {
      colors: {
        butter: "#FEDC3D",
        black: "#000000",
        azure: "#01ABAA",
      },
      boxShadow: {
        bxs: "0 0 30px 0 rgba(0,0,0,.1)",
      },
      backgroundImage: {
        cangaceiros: "url(../../assets/imgs/cangaceiros.png)",
        cangaceirosolo: "url(../../assets/imgs/cangaceirosolo.png)",
      },
    },
    screens: {
      main1190: { max: "1190px" },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".word-break": {
          "word-break": "break-word",
        },
      });
    }),
  ],
};
