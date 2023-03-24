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
      
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
