
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // colors: {
    //   'grab-green' : '#00b14f'
    // },
    extend: {
      colors: {
        'custom-green': "#00b14f",
        'custom-green-light': "#1ebd60"
      }
    },
  },
  plugins: [
      require('@tailwindcss/typography')
  ],
}
