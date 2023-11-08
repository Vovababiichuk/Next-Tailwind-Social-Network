import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        TW_white_color: '#efeff3',
        TW_border_color: 'rgba(255, 255, 255, 0.12)',
      },
      padding: {
        TW_padding_layout: '1.25rem'
      }
    },
  },
  plugins: [],
}
export default config
