export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        apple: {
          gray: '#f5f5f7',
          dark: '#1d1d1f',
          blue: '#0071e3',
          text: '#1d1d1f',
          subtext: '#86868b',
        }
      }
    },
  },
  plugins: [],
}
