import styled from "styled-components"

<<<<<<< HEAD
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
=======
export const Wrapper = styled.section`
  height: 100vh;
  &.panel {
    will-change: unset;
  }
>>>>>>> a84f0f96dc9ed28ab30f0da7c5c254cbd9fa680b
  .gatsby-image-wrapper {
    height: 100vh;
    img {
      object-position: center 65% !important;
    }
  }
`
export const Img = styled.section`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  z-index: -1;
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
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  visibility: hidden;
  z-index: 0;
`
export const BlankSpace = styled.section`
  height: 100vh;

  &.panel {
    will-change: unset;
  }
`
