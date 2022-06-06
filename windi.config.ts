import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  darkMode: 'class',
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: true,
  safelist: ['accent-[#34B1AA]', 'accent-[#FFAF00]', 'accent-[#F95F53]', 'accent-[#34B1AA]', 'bg-[#FCA130]', 'bg-[#F93E3E]', 'bg-[#49CC90]', 'bg-[#61AFFE]', 'bg-[#6B7280]', 'bg-[#9061F9]', 'bg-[#C27803]', 'bg-[#E74694]', 'before:w-[10%]', 'before:w-[29%]', 'before:w-[51%]', 'before:w-[75%]', 'before:w-[99%]'].join(' '),
  plugins: [
    typography(),
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              'color': 'inherit',
              'opacity': 0.75,
              'fontWeight': '500',
              'textDecoration': 'underline',
              '&:hover': {
                opacity: 1,
                color: colors.teal[600],
              },
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' },
          },
        },
      },
    },
  },
})
