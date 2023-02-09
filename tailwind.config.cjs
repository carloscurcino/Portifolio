/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      dark: '#1E1E1E',
      gray: '#696363',
      'cyan-800': '#0363b2',
      'cyan-400': '#058EFF',
      'cyan-300': '#67acc5',
      'cyan-200': '#81D8F7',
      
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
        mono: 'JetBrains Mono, monospace',
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
      }
      )
    })
  ],
}
