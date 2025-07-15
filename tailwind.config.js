module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        defaultBlack: "#0E0E0E",
        defaultOrange: "#E74C3C",
        defaultYellow: "#C7B99B",
      },
      fontFamily: {
        questrial: ["Questrial", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}; 