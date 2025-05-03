const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      sm: "550px",
      // => @media (min-width: 550px) { ... }
      smd: "770px",
      md: "868px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }
      xl: "1200px",
      // "2xl": "1400px",
    },
    extend: {},
  },
  plugins: [],
};

module.exports = withMT(config);
