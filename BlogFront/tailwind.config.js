/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s linear infinite',
      },
      colors: {
        // primary: "#D1EAF1",
        // secondary: "#EB4C49",
        primary: "#D1EAF1",
        secondary: "#303a52",
        brGray: "#EFEFEF",
      },
      fontFamily: {
        ranade: ["Ranade", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    aspectRatio: {
      '3/2': '3 / 2',
    },
  },
  plugins: [],
};