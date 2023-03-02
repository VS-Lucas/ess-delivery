//npm install -D tailwindcss postcss autoprefixer

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          'red-bg': '#261918', //bg-primary-red-bg -> background color
          'red-register': '#A62C21', 
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
