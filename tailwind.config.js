/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark:"#D0A2F7",
        medium:"#DCBFFF",
        light:"#F1EAFF"
      },
     fontFamily:{
      Nunito:"Nunito",
      Roboto:"Roboto"
      }
    },
  },
  plugins: [],
}

