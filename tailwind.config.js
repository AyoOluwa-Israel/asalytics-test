/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Readex Pro"', "sans-serif"],
      },
      colors: {
        primary: "#F2FBF6",
        success: "#6FD791",
        danger: "#BC3131",
        white: "#ffffff",
        black: "#000000",
        sideBorder: "#B7BECC",
      },
    },
  },
  plugins: [],
};
