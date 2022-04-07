module.exports = {
  content: [
    './dist/*.html'
  ],
  theme: {
    screens: {
      sm: '280px',
      base: '640px',
      md: '768px',
      lg: '1155px',
      xl: '1295px'
    },
    extend: {
      colors: {
        e38826: '#e38826',
        zero06970: '#006970',
        zero0403f: '#00403f',
        transparentWhite: 'hsla(0, 0%, 100%, 0.75)',
        f2f2f2: '#f2f2f2'
      },
      fontFamily: {
        bigShouldersDisplay: "'Big Shoulders Display', cursive",
        lexendDeca: "'Lexend Deca', sans-serif"
      },
      spacing: {
        18: '18px',
        50: '50px',
        104: '104px',
        160: '160px',
        230: '230px'
      },
      fontSize: {
        15: '15px'
      },
      maxWidth: {
        210: '210px'
      }
    },
  },
  plugins: [],
}