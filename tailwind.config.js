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
      },
      screens: {
        'desktop-transition': {'max': '1200px'},
        'laptop': {'max': '1024px'},
        'laptop-transition': {'max': '900px'},
        'tablet': {'max': '768px'},
        'mobile': {'max': '320px'},
      }
    },
  },
  plugins: [],
}

