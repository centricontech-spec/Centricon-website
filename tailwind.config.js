/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A2540',
          deep: '#071A2E',
          light: '#0E2E4F',
        },
        ink: {
          DEFAULT: '#1E2937',
          light: '#273345',
        },
        cyan: {
          DEFAULT: '#22D3EE',
          soft: '#67E8F9',
          deep: '#0891B2',
        },
        brand: {
          blue: '#3B82F6',
          bluedark: '#2563EB',
        },
        surface: {
          DEFAULT: '#F8FAFC',
          muted: '#EEF2F7',
        },
        text: {
          dark: '#0F172A',
          muted: '#64748B',
        },
        primary: {
          DEFAULT: '#22D3EE',
          dark: '#0891B2',
          light: '#67E8F9',
        },
        dark: {
          DEFAULT: '#0A2540',
          lighter: '#0E2E4F',
          deep: '#071A2E',
          card: '#0F2A49',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-fade': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34,211,238,0.12), transparent 60%)',
        'hero-glow': 'radial-gradient(circle at 20% 30%, rgba(34,211,238,0.18), transparent 40%), radial-gradient(circle at 80% 70%, rgba(59,130,246,0.18), transparent 40%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 40px -10px rgba(34,211,238,0.45)',
        'glow-blue': '0 0 40px -10px rgba(59,130,246,0.45)',
        'soft': '0 10px 30px -10px rgba(2, 8, 23, 0.6)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}
