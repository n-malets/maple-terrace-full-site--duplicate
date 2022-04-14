import { css } from "styled-components"

export const cssLock = ({
  minSize = 1,
  maxSize = 1.4,
  minWidth = 20,
  maxWidth = 100,
  property = "font-size",
  unit = "px",
}) => css`
  ${property}: ${maxSize}${unit};
  ${property}: calc(${minSize}${unit} + (${maxSize} - ${minSize}) * ((100vw - ${minWidth}${unit}) / (${maxWidth} - ${minWidth})));

  @media (max-width: ${minWidth}px) {
    ${property}: ${minSize}${unit};
  }
  @media (min-width: ${maxWidth}px) {
    ${property}: ${maxSize}${unit};
  } ;
`
