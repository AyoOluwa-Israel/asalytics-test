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
      boxShadow:{
        "3xl": "0px 2px 8px 0px rgba(99, 99, 99, 0.2) "
      },
      screens: {
        sm: "540px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
