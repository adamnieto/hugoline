module.exports = {
  darkMode: 'class',
  content: [
    "./themes/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html",
    'node_modules/preline/dist/*.js'
  ],
  theme: {
    extend: {},
  },

  plugins: [    
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('preline/plugin')
  ]
}