/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "control-board":
          "url('https://cdn.shopify.com/s/files/1/1619/4791/files/Banner1_63407119-ded8-441a-a92a-4f4ed5675a6d_1900x.jpg?v=1647413761')",
        "h2-extruders":
          "url('https://cdn.shopify.com/s/files/1/1619/4791/files/1_bbf0fb8e-3d45-4f1e-9329-b36f82c98f61_1900x.jpg?v=1650878390')",
        "3d-printer":
          "url('https://cdn.shopify.com/s/files/1/1619/4791/files/Ender3-__01_1900x.jpg?v=1630134241')",
        "usa-new":
          "url('https://cdn.shopify.com/s/files/1/1619/4791/t/48/assets/skr-3-ez-banner-1654849127386.jpg?v=1654849127')",
      },
      animation: {
        slideup: "slideup 1s ease-in-out",
        slidedown: "slidedown 1s ease-in-out",
        slideleft: "slideleft 1s ease-in-out",
        slideright: "slideright 1s ease-in-out",
        wave: "wave 1.2s linear infinite",
        slowfade: "slowfade 2.2s ease-in-out",
      },
      keyframes: {
        slowfade: {
          from: {opacity: 0},
          to: {opacity: 1},
        },
        slideup: {
          from: {opacity: 0, transform: "translateY(25%)"},
          to: {opacity: 1, transform: "none"},
        },
        slidedown: {
          from: {opacity: 0, transform: "translateY(-25%)"},
          to: {opacity: 1, transform: "none"},
        },
        slideleft: {
          from: {opacity: 0, transform: "translateX(-20px)"},
          to: {opacity: 1, transform: "translateX(0)"},
        },
        slideright: {
          from: {opacity: 0, transform: "translateX(20px)"},
          to: {opacity: 1, transform: "translateX(0)"},
        },
        wave: {
          "0%": {transform: "scale(0)"},
          "50%": {transform: "scale(1)"},
          "100%": {transform: "scale(0)"},
        },
      },
    },
  },
};
