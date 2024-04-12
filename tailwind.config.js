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
      textShadow: {
        'text_shadow': "0 0 1px #fff, 0 0 1px #fff, 0 0 1px #fff"
      },
      spacing: {
        '16.5': "70px"
      },
      boxShadow: {
        'gradientRed': '0 0 20px 1px #F800B9',
      },
      backgroundImage: {
        "btngradient": "linear-gradient(235.8deg, #7F04E3 -12.6%, #FF006B 106.18%)",
        "navborder": " linear-gradient(266.68deg, rgba(251, 240, 240, 0.18) 23.99%, rgba(255, 255, 255, 0.04) 43.22%),linear-gradient(91.18deg, rgba(251, 240, 240, 0.18) 8.62%, rgba(255, 255, 255, 0.04) 38.8%)",
        'bgservice': 'url(./assets/images/webp/servicebgimg.webp)',
        'bgservicegradient': 'linear-gradient(180deg, rgba(14, 14, 14, 0)0%, #040403 100%)',
        'bgservicegradient2': 'linear-gradient(180deg,  rgba(14, 14, 14, 0.6)0%, rgba(14, 14, 14, 0) 100%)',
        'cardgradient': 'linear-gradient(235.8deg, #7F04E3 -12.6%, #FF006B 106.18%)',
        'btngradientfooter': 'linear-gradient(96.17deg, #7F04E3 6%, #FF006B 98.41%)',
        'textgradient': "linear-gradient(97.84deg, #FF4141 0.52%, #FFA6B0 23.61%, #FFB6E6 50%, #FFD8D8 75%, #BF8DFF 100%)",
        'whitegradient': "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 100%)",
      },
      colors: {
        'black_light': '#01020F63',
        'lightwhite': '#EAECF0',
        'lightgray': '#646464',
        'darkblack': '#0A0A0A',
        'light-red': '#FF6363',
        'lightgray-100': '#57606A',
        'lightgray-200': '#99A2AF',
        'lightgray-300': '#E4E4E7',
        'lightgray-400': '#A1A1AA',
        'lightgray-500': '#0E0D0D',
        'lightgray-600': '#CAC6DD',
        'lightgray-700': '#FFFFFF1A',
        'lightgray-800': '#FFFFFF99',
        'lightgray-900': '#858585',
        'darkblue': '#1B1530',
        'lightwhite-100': '#FFFFFFCC'
      },
      borderRadius: {
        '9xl': '60px',
      }
    },
  },
  plugins: [],
}

