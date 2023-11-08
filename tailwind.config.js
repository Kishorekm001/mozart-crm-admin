/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        loginBg: "#1C4584CC",
        primary: "#3D3D3D",
        activecolor: "#1285F7",
        primarybg: "#3D3D3D",
        secondarybg: "#F5F5F5",
        primaryborder: "#3D3D3D4D",
        primaryblue: "#0E83D9",
      },
      borderWidth: {
        1: "1px",
      },
      fontFamily: {
        mitr: ["Mitr", "sans-serif"],
      },
      height: {
        modalheight: "60vh",
      },
    },
  },
  plugins: [],
  corePlugins: {
    appearance: ["responsive"],
  },
};
