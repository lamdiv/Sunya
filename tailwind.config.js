/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter' : ['Inter', 'sans-serif'],
      },
      screens:{
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'  
      },
      
        colors:{
          primary: '#4FA3A5',
          primaryDark: '#4D727A',
          primaryLight: '#F4FFFF',
          dark: '#403939',
        }
      
    },
  },
  plugins: [],
}
