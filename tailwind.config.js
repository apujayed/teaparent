/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {

      fontFamily: {
        custom: ['Hind Siliguri', 'sans-serif'], // 'CustomFont' is the name you used in @font-face
      },
    },
  },
  plugins: [
     require('flowbite')
  ],
}

