import styled from "styled-components"
import { Link } from "gatsby"
import { mediaMax } from "../../../helpers/MediaQueries"

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  position: sticky;
  top: 0;
  left: 0;
  ${mediaMax.phoneXL`
    height: auto;
  `}
  img {
    margin-bottom: 36px;
  }
  h1 {
    position: relative;
    text-align: center;
    &:after {
      content: "";
      position: absolute;
      bottom: -36px;
      left: 50%;
      transform: translateX(-50%);
      width: 72px;
      height: 1px;
      background-color: #fff;
    }
  }
`

export const QuoteHeadings = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  a {
    position: absolute;
    bottom: -116px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
  }
`

export const PrevButton = styled(Link)`
  position: absolute;
  bottom: 12vh;
  left: 36px;
  font-family: "TT Norms", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 1.5vh;
  line-height: 1.17;
  letter-spacing: 0.1em;
  color: #ffffff;
  display: flex;
  align-items: center;
  opacity: 0;
  ${mediaMax.phoneXL`
    bottom: 30px;
    opacity: 1;
    left: 5%;
  `}
  svg {
    margin-right: 9px;
  }
  span {
    font-weight: 700;
  }
`
