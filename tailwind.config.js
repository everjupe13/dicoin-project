// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')

const toPX = values => Object.fromEntries(values.map(v => [+v, `${v}px`]))
const object0to100px = toPX(Array.from({ length: 101 }).map((_, i) => +i))

const fallbackSansSerifFonts = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Helvetica',
  'Arial',
  'sans-serif'
]

const typography = {
  // '.text-medium-30': {
  //   fontSize: '30px',
  //   lineHeight: '42px',
  //   fontWeight: 500
  // },
  // '.text-regular-28': {
  //   fontSize: '28px',
  //   lineHeight: '34px',
  //   fontWeight: 400
  // },
  // '.text-regular-26': {
  //   fontSize: '26px',
  //   lineHeight: '36px',
  //   fontWeight: 400
  // },
  // '.text-medium-22': {
  //   fontSize: '22px',
  //   lineHeight: '32px',
  //   fontWeight: 500
  // },
  // '.text-regular-22': {
  //   fontSize: '22px',
  //   lineHeight: '32px',
  //   fontWeight: 400
  // },
  // '.text-medium-20': {
  //   fontSize: '20px',
  //   lineHeight: '32px',
  //   fontWeight: 500
  // },
  // '.text-regular-20': {
  //   fontSize: '20px',
  //   lineHeight: '32px',
  //   fontWeight: 400
  // },

  '.text-medium-48': { // using
    fontSize: '48px',
    lineHeight: '62px',
    fontWeight: 500
  },
  
  '.text-medium-32': { // using
    fontSize: '32px',
    lineHeight: '48px',
    fontWeight: 500
  },

  '.text-medium-24': { // using
    fontSize: '24px',
    lineHeight: '38px',
    fontWeight: 500
  },

  '.text-medium-18': { // using
    fontSize: '18px',
    lineHeight: '28px',
    fontWeight: 500
  },

  '.text-medium-16': { // using
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 500
  },

  '.text-medium-14': { // using
    fontSize: '14px',
    lineHeight: '22px',
    fontWeight: 500
  },

  '.text-regular-18': {
    fontSize: '18px',
    lineHeight: '25px',
    fontWeight: 400
  },

  // '.text-semibold-14': {
  //   fontSize: '14px',
  //   lineHeight: '21px',
  //   fontWeight: 600
  // },

  // '.text-regular-17': {
  //   fontSize: '17px',
  //   lineHeight: '22px',
  //   fontWeight: 400
  // },
  // '.text-medium-15': {
  //   fontSize: '15px',
  //   lineHeight: '20px',
  //   fontWeight: 500
  // },
  // '.text-regular-15': {
  //   fontSize: '15px',
  //   lineHeight: '20px',
  //   fontWeight: 400
  // },
  // '.text-regular-13': {
  //   fontSize: '13px',
  //   lineHeight: '18px',
  //   fontWeight: 400
  // }
}

module.exports = {
  plugins: [
    require('@tailwindcss/aspect-ratio'),

    plugin(({ addUtilities }) => {
      addUtilities(typography)
    }),

    // plugin(({ addComponents }) => {
    //   addComponents({
    //     '.container': {
    //       maxWidth: '100%',
    //       '@screen sm': {
    //         maxWidth: '540px',
    //       },
    //       '@screen md': {
    //         maxWidth: '720px',
    //       },
    //       '@screen lg': {
    //         maxWidth: '960px',
    //       },
    //       '@screen xl': {
    //         maxWidth: '1140px',
    //       },
    //       '@screen 2xl': {
    //         maxWidth: '1440px',
    //       },
    //     }
    //   })
    // })
  ],

  content: ['./src/**/*.{js,ts,jsx,tsx}'],

  corePlugins: {
    aspectRatio: false,
    container: false
  },

  theme: {
    container: {
      center: true,
      padding: '16px'
    },

    extend: {
      borderColor: {
        DEFAULT: 'transparent'
      },

      scale: {
        101: '1.01'
      }
    },

    screens: {
      // xs: '0',
      // sm: '640px',
      // md: '768px',
      // lg: '1024px',
      // xl: '1280px',
      // '2xl': '1536px'

      xl: { max: '1529.99px' },
      lg: { max: '1199.99px' },
      md: { max: '991.99px' },
      sm: { max: '767.99px' },
      xs: { max: '575.99px' },
    },

    fontSize: false,

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#FFFFFF',
      zinc: '#E5E5E5',
      gray: {
        DEFAULT: '#191919',
        second: '#252525'
      },
      lightgray: '#BDBFBE',
      tapestry: '#DDADB5',
      green: {
        DEFAULT: '#6CEABD',
        'button-pressed': '#56BB97'
      },
      pink: {
        DEFAULT: '#FFBEC9',
        hover: '#FFCBD4'
      },
      danger: '#DA1C1C',
      red: '#FF3B30'
    },

    spacing: object0to100px,

    borderWidth: {
      DEFAULT: '1px',
      ...object0to100px
    },

    borderRadius: {
      ...object0to100px,
      full: '9999px'
    },

    fontFamily: {
      sans: ['Gilroy', ...fallbackSansSerifFonts],
      hauora: ['Hauora', ...fallbackSansSerifFonts]
    }
  }
}
