module.exports = {
  content: [
    './src/**/*.{html,js}',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00d1b2',
        secondary: '#95efe1',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
