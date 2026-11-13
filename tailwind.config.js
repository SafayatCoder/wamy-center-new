/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          deep: '#063F32',
          DEFAULT: '#087454',
          dark: '#042820',
          light: '#0D946D',
          hover: '#053429'
        },
        gold: {
          antique: '#C5A365',
          DEFAULT: '#C5A365',
          light: '#E2C889',
          pale: '#F4ECE0',
          dark: '#A68446'
        },
        ivory: {
          warm: '#FAF8F3',
          DEFAULT: '#FAF8F3',
          light: '#FCFBF8'
        },
        charcoal: {
          DEFAULT: '#1C2926',
          muted: '#3A4B46',
          light: '#62736E'
        },
        sage: {
          soft: '#ECF3ED',
          DEFAULT: '#ECF3ED',
          border: '#D8E5DA'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', '"Manrope"', '"Hind Siliguri"', 'sans-serif'],
        bengali: ['"Hind Siliguri"', '"Noto Sans Bengali"', 'sans-serif']
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(6, 63, 50, 0.06)',
        'card': '0 10px 30px -4px rgba(6, 63, 50, 0.08)',
        'card-hover': '0 20px 40px -4px rgba(6, 63, 50, 0.14)',
        'gold-glow': '0 0 25px rgba(197, 163, 101, 0.25)',
        'emerald-glow': '0 0 30px rgba(8, 116, 84, 0.3)'
      },
      borderRadius: {
        'arch': '120px 120px 16px 16px',
        'arch-sm': '60px 60px 12px 12px'
      }
    },
  },
  plugins: [],
}
