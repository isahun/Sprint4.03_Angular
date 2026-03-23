import type { Config } from 'tailwindcss';
import PrimeUI from 'tailwindcss-primeui'

export default {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/primeng/**/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [PrimeUI],
} satisfies Config
