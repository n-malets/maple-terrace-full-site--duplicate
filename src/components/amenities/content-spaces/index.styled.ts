import styled from "styled-components"
import { mediaMax } from "../../../helpers/MediaQueries"

interface IStyleProps {
  img1Top?: string
  img1Width?: string
  img2Top?: string
  img2Width?: string
  reversed?: boolean
  imgsWidth?: string
  copiesWidth?: string
}
export const Wrapper = styled.div<IStyleProps>`
  width: 100%;
  height: 100vh;
  padding-left: ${props => (props.reversed ? "6.5%" : "10.3%")};
  display: flex;
  align-items: center;
  ${mediaMax.phoneXL`
    padding-left: 5%;
    padding-right: 5%;
  `}
  background-color: #151515;
  .gem-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${props => (props.reversed ? "row-reverse" : "row")};
    ${mediaMax.phoneXL`
     flex-direction: column-reverse;
     justify-content: center;
    `}
  }
`
export const Info = styled.div<IStyleProps>`
  width: ${props => props.copiesWidth};
  padding-left: ${props => (props.reversed ? "8%" : 0)};
  &.smallHeadings {
    text-align: center;
    padding-left: 0;
    padding-right: 8%;
    ${mediaMax.phoneXL`
      width: 100%;
      padding-left: 0;
      padding-right: 0;
    `}
    img {
      padding-bottom: 18px;
      ${mediaMax.phoneXL`
        width: 110px;
      `}
    }
    h3 {
      line-height: 30px;
      &.h3,
      &.h4 {
        letter-spacing: 0.05em;
        font-weight: 400;
        font-family: "TT Norms", serif;
      }
      ${mediaMax.phoneXL`
      line-height: 24px;
      padding: 0;
    `}
    }
  }
  p {
    padding-top: 33px;
  }
  h3 {
    line-height: 43px;
    font-weight: 300;
    padding: 5px 0;
  }
  h4 {
    padding-bottom: 32px;
    letter-spacing: 0.1em;
    font-weight: 300;
  }
  img {
    display: block;
    margin: 0 auto;
  }
`
export const Img = styled.div<IStyleProps>`
  width: ${props => props.imgsWidth};
  position: relative;
  height: 100%;
  ${mediaMax.phoneXL`
      width: 100%;
      height: 500px;
  `}
  img {
    display: block;
  }
  .img-l {
    width: ${props => props.img1Width};
    position: absolute;
    left: 0;
    top: ${props => props.img1Top};
    z-index: ${props => (props.reversed ? 0 : 1)};
    transform: translateY(-40%);
    ${mediaMax.phoneXL`
      width: 159px;
      height: 159px;
      z-index: 2;
      transform: translateY(-20%);
    `}
  }
  .img-r {
    width: ${props => props.img2Width};
    position: absolute;
    right: 0;
    top: ${props => props.img2Top};
    transform: translateY(-30%);
    overflow: hidden;
    ${mediaMax.phoneXL`
      width: 250px;
      height: 250px;
      z-index: 1;
    `}
    img {
      height: 100%;
    }
  }
`
