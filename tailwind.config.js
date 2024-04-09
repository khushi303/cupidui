/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '12px',
        sm: '14px',
        '2sm': '15px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        xxl: '22px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '32px',
        '5xl': '36px',
        '6xl': '40px',
        '7xl': '42px',
        '8xl': '48px',
        '9xl': '50px',
        '2xxl': '60px',
      },
      container: {
        padding: {
          default: '1rem',
        },
        center: true,
      },
      backgroundImage: {
        "btngradient": "linear-gradient(235.8deg, #7F04E3 -12.6%, #FF006B 106.18%)"
      },
      colors: {
        'black_light': '#01020F63',
      },
      borderRadius: {
        '9xl': '60px',
      }
    },
  },
  plugins: [],
}