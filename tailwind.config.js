/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "12px",
      },
      fontFamily: {
        open: '"Open Sans", sans-serif',
        Anek: '"Anek Telugu", sans-serif',
      },
      fontSize: {
        "5xxl": "52px",
        "3xxl": "32px",
        "1xxl": "10px",
      },
      colors: {
        "light-sky": "#CFECFF",
        black: "#0A0A0A",
        "light-blue": "#0071BC",
        gray: "#F1F1F1",
        "dark-gray": "#535353",
        "gray-border": "#B2B2B2",
      },
      backgroundImage: {
        "blue-sky": ["linear-gradient(90deg, #58B9F9 1.82%, #0071BC 104.09%)"],
        "sky-blue": ["linear-gradient(90deg, #58B9F9 104.09%, #0071BC 1.82%)"],
      },
    },
  },
  plugins: [],
};
