/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('hds-web/tailwind.config.js'),
  ],
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    './node_modules/hds-web/src/HDS/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: [
        '"Inter"',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      petrona: ['Petrona', 'serif'],
    },
    extend: {
      screens: {
        'mb-s': '360px',
        'mb-m':'400px',
        'tb': '600px',
        'tb-m': '800px',
        'tb-l': '905px',
        'db-s':'1024px',
        'db': '1240px',
        'db-l': '2560px'
      },
    },
  },
  plugins: [],
}