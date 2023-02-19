/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,css,js,jsx,ts,tsx}",
    "./src/**.*.{html,css,js,jsx,ts,tsx}",
    "./components/**.*.{html,css,js,jsx,ts,tsx}",
    "./components/*.**.{html,css,js,jsx,ts,tsx}",
  ],
  theme: {   
    extend: {},  
  },  
  plugins: [],  
} 
