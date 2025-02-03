/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'lufga':'Lufga'
      },
      boxShadow: {
        'custom-blue': '0 0 50px 0 rgba(25, 58, 249, 0.07)', // Ombre personnalisée
      },
      backgroundImage: {
        'bg-gradient' : 'radial-gradient(circle at 120% 50%, #FFF8F6 -10%, #E2F0FF 10%, #F6FAFF 57%, #F4F9FF 100%)',
      },
      colors: {
         primary: "#2139EE",
         secondary:"#090933",
        'bg-light':"#F4F9FF",
        'bg-blue':'#E0EEFF',
        'bg-green':'#DEF4F0',
        'bg-orange':'#FFD9BF',
        'bg-red':'#F5C5C5',
         blue:'#0047EC',
         green:'#028361',
         red: '#FC5185',
         orange: '#EC8200'
      },
        width: {
          'custom': '1728px'
        },
    },
  },
  plugins: [
 
  ],
};