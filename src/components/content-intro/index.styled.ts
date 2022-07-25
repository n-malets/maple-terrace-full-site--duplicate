import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .img {
    width: 100%;
    height: 100vh;
  }
  .gatsby-image-wrapper {
    height: 100%;
    img {
      height: 100%;
      object-fit: cover !important;
      object-position: 0 40% !important;
    }
  }
`
