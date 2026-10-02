/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'baloo': ['"Baloo 2"', 'ui-rounded', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
      animation: {
        'bounce-in': 'bounceIn 0.5s ease-out',
        'shake': 'shake 0.4s ease-in-out',
        'pulse-glow': 'pulseGlow 1.5s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'star-pop': 'starPop 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.4s ease-out',
        'wiggle': 'wiggle 0.3s ease-in-out',
        'spin-once': 'spin 0.5s ease-out',
      },
      keyframes: {
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.1)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-8px)' },
          '40%': { transform: 'translateX(8px)' },
          '60%': { transform: 'translateX(-6px)' },
          '80%': { transform: 'translateX(6px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(168,85,247,0.4)' },
          '50%': { boxShadow: '0 0 35px rgba(168,85,247,0.8), 0 0 60px rgba(168,85,247,0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        starPop: {
          '0%': { transform: 'scale(0) rotate(-180deg)', opacity: '0' },
          '80%': { transform: 'scale(1.2) rotate(10deg)', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '33%': { transform: 'rotate(-5deg)' },
          '66%': { transform: 'rotate(5deg)' },
        },
      },
    },
  },
  plugins: [],
}
