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
         primary: "#2139EE",
         secondary:"#090933",
        'bg-light':"#F0F1FC",
        'bg-blue':'#E0EEFF',
        'bg-green':'#DEF4F0',
        'bg-orange':'#FFD9BF',
        'bg-red':'#F5C5C5',
         blue:'#0047EC',
         green:'#028361',
         red: '#FC5185',
         orange: '#EC8200'
      },
      width : {
        '1728': '1728px',
        '1412': '1412px',
        '1352': '1352px'
      }
    },
  },
  plugins: [

  ],
};