const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        gallery: `
          linear-gradient(
            to top right,
            ${colors.purple["400"]},
            ${colors.violet["400"]},
            ${colors.indigo["400"]},
            ${colors.blue["400"]} ,
            ${colors.sky["400"]},
            ${colors.cyan["400"]},
            ${colors.teal["400"]},
            ${colors.emerald["400"]},
            ${colors.green["400"]},
            ${colors.lime["400"]}
          )`,
      },
    },
  },
  plugins: [],
};
