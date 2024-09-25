import { globalCss } from '@stitches/react'
import { theme } from '../stitches.config'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    fontFamily: "'Nunito', sans-serif",
    backgroundColor: theme.colors['gray-800'],
    color: theme.colors['gray-100'],
    '-webkit-font-smoothing': 'antialiased',
  },
})
