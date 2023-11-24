// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
// (import image from './landing-page-bg.jpg')
module.exports = {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'hero-pattern': "url('./src/assets/landing-page-bg.png')",
        'hero-pattern': "url('https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        // 'hero-pattern': "url('https://img.freepik.com/free-vector/realistic-white-golden-geometric-background_79603-2032.jpg?w=740&t=st=1700636117~exp=1700636717~hmac=eef897c81e612efd021e043e2ebafac8d92cd8efda3308f96a68e0bbee1d5ca7')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [require('flowbite/plugin')],

};