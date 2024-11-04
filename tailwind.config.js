const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // purge: [
  //   './pages/**/*.{js,ts,jsx,tsx}',
  //   './components/**/*.{js,ts,jsx,tsx}'
  // ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#ffc799',
          100: '#ffb070',
          200: '#ff9d4d',
          300: '#ff8b2b',
          400: '#ff7f17',
          500: '#ff7200',
          600: '#d66000',
          700: '#b85200',
          800: '#964300',
          900: '#662e00'
        }
      },
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms'
      }
    },
    screens: {
      'xs': '480px',
      ...defaultTheme.screens
    }
  },
  variants: {
    extend: {},
    width: ["responsive", "hover", "focus"]
  },
  plugins: [],
}
