import { css } from "styled-components"

const sizes: any = {
  phoneSmall: 340,
  phone: 376,
  phoneLarge: 414,
  phoneL: 400,
  phoneXL: 576,
  tablet: 769,
  tabletLandscape: 1025,
  desktopSmall: 1250,
  desktop: 1440,
  desktopLarge: 1920,
  desktopXLarge: 2048,
}

export const mediaMax = Object.keys(sizes).reduce((acc: any, label: string) => {
  acc[label] = (...args: any) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${
        // @ts-ignore
        css(...args)
      }
    }
  `

  return acc
}, {})
export const mediaMin = Object.keys(sizes).reduce((acc: any, label: string) => {
  acc[label] = (...args: any) => css`
    @media (min-width: ${(sizes[label] + 1) / 16}em) {
      ${
        // @ts-ignore
        css(...args)
      }
    }
  `

  return acc
}, {})

export const mediaMaxTablet = Object.keys(sizes).reduce(
  (acc: any, label: string) => {
    acc[label] = (...args: any) => css`
      @media (max-width: ${sizes[label] / 16}em) and (min-width: ${769 /
        16}em) and (orientation: portrait) {
        ${
          // @ts-ignore
          css(...args)
        }
      }
    `

    return acc
  },
  {}
)
