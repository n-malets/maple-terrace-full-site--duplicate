import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 10%;
  overflow: hidden;
`

export const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`

export const GridRow = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 5vh;
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
  }
`

export const Box = styled.div<{ alignBottom: boolean }>`
  display: flex;
  align-items: ${props => (props.alignBottom ? "flex-end" : "center")};
  justify-content: center;
`
