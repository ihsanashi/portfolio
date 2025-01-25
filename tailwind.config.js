const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Newsreader', 'serif'],
    },
    flex: {
      '0-0-auto': '0 0 auto',
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      inherit: 'inherit',
      none: 'none',
      2: '2 2 0%',
    },
    extend: {
      spacing: {
        7.5: '1.875rem',
      },
      colors: {
        primary: {
          50: '#e2f2ff',
          100: '#b7d6fb',
          200: '#8bbbf4',
          300: '#5ea0ee',
          400: '#3485e7',
          500: '#1e6ccf',
          600: '#1454a2',
          700: '#0b3c74',
          800: '#022448',
          900: '#000d1c',
        },
        accent: {
          25: '#fffceb',
          50: '#fffadb',
          100: '#fff0af',
          200: '#ffe67e',
          300: '#ffdc4d',
          400: '#ffd21e',
          500: '#e6b807',
          600: '#b38f00',
          700: '#806600',
          800: '#4d3d00',
          900: '#1d1400',
        },
      },
    },
  },
  variants: {
    extend: {
      translate: ['active', 'group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar': {
          '::webkitScrollbar': 'none',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
