import { css } from 'styled-components'

const sizes = {
  small: 1023,
}

const queries = {
  small: `(max-width: ${sizes.small}px)`,
  large: `(min-width: ${sizes.small + 1}px)`,
}

// Iterate through the sizes and create a media template
const media = {
  small: (...args) => css`
    @media ${queries.small} {
      ${css(...args)}
    }
  `,
  large: (...args) => css`
    @media ${queries.large} {
      ${css(...args)}
    }
  `,
}

export default media
