import styled from "styled-components"
import Link from "gatsby-link"
import { mediaMax } from "../../helpers/MediaQueries"

export const Wrapper = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 2%;
  position: sticky;
  top: 0;
  z-index: 10;
  ${mediaMax.phoneXL`
    height: auto;
    padding: 120px 5%;
  `}
`
export const Headings = styled.div`
  position: relative;
  text-align: center;
  padding-bottom: 36px;
  margin-bottom: 48px;
  &:after {
    content: "";
    width: 72px;
    height: 1px;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    left: calc(50% - 36px);
  }
  p {
    padding-bottom: 16px;
  }
`
export const NextBtn = styled(Link)`
  font-weight: 700;
  display: flex;
  align-items: center;
  svg {
    margin-left: 6px;
  }
`
