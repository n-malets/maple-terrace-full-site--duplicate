import styled from "styled-components"
import { mediaMax } from "../../helpers/MediaQueries"

interface IStyledProps {
  objPosition?: string
  mobileFullScreen?: boolean
}

export const Wrapper = styled.div<IStyledProps>`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #151515;
  ${mediaMax.phoneXL`
      height: ${(props: IStyledProps) =>
        props.mobileFullScreen ? "100vh" : "390px"};
  `}
  .img {
    width: 100%;
    height: 100vh;
    ${mediaMax.phoneXL`
      height: ${(props: IStyledProps) =>
        props.mobileFullScreen ? "100vh" : "390px"};
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
