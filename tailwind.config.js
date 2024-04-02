/** @type {import('tailwindcss').Config} */
export default {
  darkMode: false,
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
    // extend: {
    //   colors: {
    //     primary: "#FF6347",
    //     secondary: "#008080",
    //     // Add more custom colors as needed
    //   },
    //   fontFamily: {
    //     sans: ["Roboto", "sans-serif"],
    //     // Add more custom fonts as needed
    //   },
    // },
  },
  plugins: [],
};
