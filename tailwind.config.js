module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        baloo2: ["Baloo 2", "cursive"],
        lato: ["Lato", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        NotoSans: ["Noto Sans", "sans-serif"],
        PalanquinDark: ["Palanquin Dark"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
