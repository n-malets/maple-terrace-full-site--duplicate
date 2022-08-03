import styled from "styled-components"
import { mediaMax } from "../../helpers/MediaQueries"

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 10vh 10%;
  overflow: hidden;
  ${mediaMax.phoneXL`
    height: 100%;
    padding-top: 50px;
  `}
`

export const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  ${mediaMax.phoneXL`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  `}
`

export const GridRow = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 5vh;
  ${mediaMax.phoneXL`
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    img {
      width: 80%
    }
  `}
`

export const TitleRow = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 2px solid white;
  margin-bottom: 2vh;
  margin-top: 5vh;
  p {
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font-feature-settings: "liga" off;
    ${mediaMax.phoneXL`
      margin-bottom: 9px;
      font-weight: 300;
    `}
  }
  ${mediaMax.phoneXL`
    margin-top: 60px;
    margin-bottom: 40px;
  `}
`

export const Box = styled.div<{ alignBottom: boolean }>`
  display: flex;
  align-items: ${props => (props.alignBottom ? "flex-end" : "center")};
  justify-content: center;
`
