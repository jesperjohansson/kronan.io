import { createGlobalStyle } from 'styled-components'

const fonts = {
  primary:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
}

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }

  body {
    font-family: ${fonts.primary};
    font-size: 1.6rem;
  }
`

export default GlobalStyle
