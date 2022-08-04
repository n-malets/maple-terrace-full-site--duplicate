import styled from "styled-components"
import { mediaMax } from "../../helpers/MediaQueries"

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding-top: 3vh;
  ${mediaMax.phoneXL`
    padding-left: 5%;
    padding-right: 5%;
    height: 90vh;
  `}
  h2 {
    margin-left: 25%;
    ${mediaMax.phoneXL`
      margin-left: 0;
      margin-bottom: 25px;
    `}
  }
  .slider-wrapper {
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    margin-left: 25%;
    margin-top: 24px;
    ${mediaMax.phoneXL`
      grid-template-columns: repeat(2, 1fr);
      margin: 0
    `}
  }
  .slide:nth-child(3) {
    opacity: 0.7;
    ${mediaMax.phoneXL`
     opacity: 1;
    `}
  }
  .slide:nth-child(4) {
    opacity: 0.3;
    ${mediaMax.phoneXL`
      opacity: 1;
    `}
  }
  .img {
    width: 30vw;
    height: 30vw;
    ${mediaMax.phoneXL`
      width: 100%;
      height: auto;
    `}
  }
  .number {
    margin-top: 24px;
    font-weight: 300;
    ${mediaMax.phoneXL`
      margin-top: 10px;
      font-size: 36px;
    `}
  }
  .line {
    width: 5vw;
    height: 1px;
    background: white;
    margin: 14px 0;
    ${mediaMax.phoneXL`
      margin: 8px 0;
      width: 40px;
    `}
  }
  .h3i {
    font-weight: 300;
    ${mediaMax.phoneXL`
      font-size: 18px;
    `}
  }
`
