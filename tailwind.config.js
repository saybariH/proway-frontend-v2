/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'lufga':'Lufga'
      },
      colors: {
        'bgdark': "#141718",
        'bglight': "#F8F8FC",
        'primary': "#6599FF",
        'soft-lavender': "#EBEBF8"
      }
    },
  },
  plugins: [

  ],
};