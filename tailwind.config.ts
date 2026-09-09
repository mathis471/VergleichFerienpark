import type { Config } from 'tailwindcss'
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: { extend: { colors: { brand: { 50:'#eef8ff',100:'#d9efff',500:'#0ea5e9',600:'#0284c7',700:'#0369a1',900:'#0c4a6e' } } },
  },
  plugins: [],
} satisfies Config
