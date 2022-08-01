import styled from "styled-components"
import { mediaMax } from "../../helpers/MediaQueries"

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
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
