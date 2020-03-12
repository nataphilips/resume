import { createGlobalStyle } from 'styled-components'
import typography from './typography'

export default createGlobalStyle`
  body {
    margin: 0;
    ${typography.regular};
  }

  a {
    text-decoration: none;

    ${typography.regular};

    &:visited {
      ${typography.regular};
    }

    &:hover {
      opacity: 0.7;
    }
  }
`
