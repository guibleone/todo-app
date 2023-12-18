import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bondi: {
          50: '#eefcfd',
          100: '#d3f8fa',
          200: '#adeef4',
          300: '#74e0ec',
          400: '#34c8dc',
          500: '#18abc2',
          600: '#1788a1',
          700: '#1a6e84',
          800: '#1e5b6c',
          900: '#1d4c5c',
          950: '#0d323f',
        },
      }
    },
  },
  plugins: [],
}
export default config
