/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          950: "#151A23",
        },
      },
      backgroundImage: {
        "hero-bg": "/images/bg.png",
      },
    },
    fontFamily: {
      open: ["Open Sans"],
    },
    screens: {
      xxs: "300px",
      // => @media (min-width: 300px) { ... }
      xs: "450px",
      // => @media (min-width: 450px) { ... }
      sm: "480px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "976px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
