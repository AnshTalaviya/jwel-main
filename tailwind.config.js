/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"], // or any other font like "Inter", "Roboto"
      },
      colors: {
        white: "#ffffff",
        bgColorPink: "#fcdcdd",
        textGreyColor: "#6B7280"
      },

    },




  },
  plugins: [],
}