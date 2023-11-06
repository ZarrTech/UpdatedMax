/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        wtc: "#f8fafc",
        bgColor: "#111111",
        Htc: "#8f8f8f",
        bgNAv: "#e7eaea",
        cbg: "#ffff",
      },

      screens: {
        mobile: "250px",
        tablet: "430px",
        desktop: "960px",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      height: {
        height: "400px",
      },

      width: {
        Vidwidth: "30%",
      },

      margin: {
        ml: "7rem",
        mr: "7rem",
      },
    },
  },
  plugins: [],
};
