import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'gr-pink': '#dc0090',
        'gr-purple': '#691a76',
        'gr-dark-purple': '#7a24cd',
        'gr-light-blue': '#009aa',
        'gr-light-pink': '#c487f8',
        'gr-dark-blue': '#15355e'
      },
    },
  },
  plugins: [],
}
export default config
