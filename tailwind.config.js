/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // theme created to make classes reuse easy
    extend: {
      colors: {
        button: "#9333EA",
        bodyBg: "#0F172A",
        headings: "#C084FC",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
