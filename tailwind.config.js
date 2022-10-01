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
        xl: '1240px',
        // xxl: '1920px'  
      },
      
        colors:{
          primary: '#1A7A69',
          // primaryDark: '#4D727A',
          // primaryLight: '#F4FFFF',
          // dark: '#403939',
        }
      
    },
  },
  plugins: [],
}
