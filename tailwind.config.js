/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {backgroundImage:{
      'potential':'./assets/background_image_2.jpg'
    }},
  },
  plugins: [      
    require('flowbite/plugin')
],
  publicPath: '/'
}
