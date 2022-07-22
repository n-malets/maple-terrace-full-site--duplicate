import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;

  .img-zoomed {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
  }
  .gatsby-image-wrapper {
    height: 100%;
    img {
      height: 100%;
      object-fit: cover !important;
      object-position: left bottom !important;
    }
  }
`
