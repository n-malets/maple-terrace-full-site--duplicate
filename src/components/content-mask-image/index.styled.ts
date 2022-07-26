import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  .gatsby-image-wrapper {
    height: 100vh;
    img {
      object-position: 0 70% !important;
    }
  }
`
export const Img = styled.section`
  height: 100vh;
  width: 100%;
  position: sticky;
  top: 0;
  .bg {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 0;
    left: 0;
  }
`
export const Mask = styled.section`
  height: 100vh;
  width: 100%;
  position: absolute;
  bottom: 0;
  opacity: 0;
`
