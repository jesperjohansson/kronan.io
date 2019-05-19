import reset from 'reset-css'
import { createGlobalStyle } from 'styled-components'

const fonts = {
  primary:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
}

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 10px;
  }

  body {
    font-family: ${fonts.primary};
    font-size: 1.6rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: 1.25em;
  }
`

export default GlobalStyle
