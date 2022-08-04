import styled from "styled-components"
import { mediaMax } from "../../helpers/MediaQueries"

export const Wrapper = styled.section`
  will-change: unset;
  height: 100vh;
`

export const HideOverlay = styled.div`
  position: absolute;
  bottom: -1px;
  right: -1px;
  left: -1px;
  background: #151515;
  height: 0;
`

export const ContentContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
<<<<<<< HEAD
  padding-top: 3vh;
=======
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  opacity: 0;
>>>>>>> a84f0f96dc9ed28ab30f0da7c5c254cbd9fa680b
  ${mediaMax.phoneXL`
    padding-left: 5%;
    padding-right: 5%;
  `}
  h2 {
<<<<<<< HEAD
    margin-left: 25%;
=======
    margin-left: 20%;
>>>>>>> a84f0f96dc9ed28ab30f0da7c5c254cbd9fa680b
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
    padding-left: 20%;
    margin-top: 24px;
    ${mediaMax.phoneXL`
      grid-template-columns: repeat(2, 1fr);
      margin: 0
    `}
  }
<<<<<<< HEAD
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
=======
  .slide:nth-child(n + 2) {
    opacity: 0;
    ${mediaMax.phoneXL`
     opacity: 1;
    `}
  }
  .img {
    width: 50vh;
    height: 50vh;
    position: relative;
>>>>>>> a84f0f96dc9ed28ab30f0da7c5c254cbd9fa680b
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

