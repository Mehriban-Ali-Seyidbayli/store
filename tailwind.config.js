/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B6BBC4',
        'blue-100': '#687EFF',
        'blue-200': '#515187',
        'dark-100': '#31304D',
        'dark-200': '#161A30',
      },
    },
  },
  plugins: [],
};
