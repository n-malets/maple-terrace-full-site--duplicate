import styled from "styled-components"
import { mediaMax } from "../../helpers/MediaQueries"

export const Wrapper = styled.div`
  height: 100vh;
  ${mediaMax.phoneXL`
    height: auto;
    padding: 130px 0;
  `}
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
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
`
