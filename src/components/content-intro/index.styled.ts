import styled from "styled-components"
import { mediaMax } from "../../helpers/MediaQueries"

interface IStyledProps {
  objPosition?: string
}

export const Wrapper = styled.div<IStyledProps>`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #151515;
  ${mediaMax.phoneXL`
      height: 390px;
  `}
  .img {
    width: 100%;
    height: 100vh;
    ${mediaMax.phoneXL`
      height: 390px;
    `}
  }
  .gatsby-image-wrapper {
    height: 100%;
    img {
      height: 100%;
      object-fit: cover !important;
      object-position: 0 40% !important;
      ${mediaMax.phoneXL`
        object-position: center!important;
      `}
    }
  }
`
