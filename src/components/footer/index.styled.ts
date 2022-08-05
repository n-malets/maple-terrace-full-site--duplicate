import { mediaMax } from "../../helpers/MediaQueries"
import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  z-index: 11;
  pointer-events: none;
  ${mediaMax.phoneXL`
    height: auto;
    margin-top: 150px;
  `}
`
export const FooterContent = styled.div`
  width: 100%;
  height: 20vh;
  background-color: #fff;
  padding: 21px 24px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  pointer-events: all;
  ${mediaMax.phoneXL`
     max-width: 100vw;
     overflow: hidden;
  `}
  .col {
    width: 33.33%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    letter-spacing: 0.1em;

    a,
    p,
    span {
      color: #292929;
      font-size: 12px;
      line-height: 18px;
      font-family: "TT Norms", sans-serif;
      font-weight: 400;
    }
    a {
      padding-right: 8px;
    }
    span {
      font-weight: 500;
    }
    .footerLogos {
      a {
        display: inline-block;
        padding: 0;
        margin-right: 24px;
        &:first-child {
          width: 80px;
        }
        &:last-child {
          width: 115px;
        }
      }
    }
    .mtLogo {
      width: 49px;
      margin: 0 auto;
    }
    .copyrights {
      text-align: center;
    }
    .socials {
      margin-left: auto;
      img {
        margin-left: 26px;
        cursor: pointer;
      }
    }
    .legalBtn {
      text-align: right;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
`
