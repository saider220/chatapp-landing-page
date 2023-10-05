/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'purple-hero': "#6018F7",
        'teal': "#5EEBA7"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans'], 
        'roboto': ['Roboto', 'sans'], 
      }
    },
  },
  plugins: [],
}

