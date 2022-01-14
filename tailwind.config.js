module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
  },
  theme: {
    extend: {
        keyframes: {
            'animation1': {
                '0%': {
                    opacity: '0'
                },
              },
              'animation2' :{
                '0%' : {
                  opacity : '0',
                  transform : 'rotate(-20deg)'
                },
                '50%' :{
                  opacity : '0',
                  transform : 'rotate(20deg)'
                }
              },
              'animation3' : {
                '0%' : {
                  opacity : '0',
                  transform : 'rotate(-30deg)'
                },
                '33%' : {
                  opacity : '33%',
                  transform : 'rotate(0deg)'
                },
                '66%' : {
                  opacity : '66%',
                  transform : 'rotate(30deg)'
                }
              }
        },
        animation: {
            'animation1': 'animation1 2s ease-in',
            'animation2': 'animation2 2s ease-in',
            'animation3': 'animation3 3s ease-in',

        }
    },
},
  plugins: [],
  variants: {},
}
