import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding-top: 10vh;
  h2 {
    margin-left: 25%;
  }
  .slider-wrapper {
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    margin-left: 25%;
    margin-top: 24px;
  }
  .slide:nth-child(3) {
    opacity: 0.7;
  }
  .slide:nth-child(4) {
    opacity: 0.3;
  }
  .img {
    width: 30vw;
    height: 30vw;
  }
  .number {
    margin-top: 24px;
    font-weight: 300;
  }
  .line {
    width: 5vw;
    height: 1px;
    background: white;
    margin: 14px 0;
  }
  .h3i {
    font-weight: 300;
  }
`
