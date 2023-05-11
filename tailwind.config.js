/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "sans-serif"],
      },
      extend: {
        colors: {
          primary: {
            500: "#6415ff",
          },
          secondary: {
            200: "#667892",
            500: "#243e63",
          },
        },
        screens: {
          micro: "1px",
        },
      },
    },
    plugins: [],
  };
  