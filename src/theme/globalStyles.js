import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
      font-family: 'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    h1 {
      font-weight: 400;
    }

    .container {
      width: 100%;
      max-width: 1200px;
      margin: 0px auto;
      padding: 0px 60px;
    }

`;

export default GlobalStyle