/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite.{js,ts}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['sans-serif'],
      'serif': ['Georgia'],
      'mono': ['SFMono-Regular'],
      'roboto': ['Roboto'],
      'openSans': ['"Open Sans"'],
      'ysabeau': ['"Ysabeau"'],
      'cormorant': ['Cormorant Font Pairings']
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

