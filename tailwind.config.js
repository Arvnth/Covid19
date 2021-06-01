module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderWidth:{
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
     '3': '3px',
      '4': '4px',
     '6': '6px',
     '8': '8px',
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundAttachment: ['hover', 'focus'],
      divideWidth: ['hover', 'focus'],
      tableLayout: ['hover', 'focus'],
      gridTemplateColumns: ['hover', 'focus'],
      gridAutoFlow: ['hover', 'focus'],
    },
  },
  screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl':'1536px',
    },
  plugins: [],
}
