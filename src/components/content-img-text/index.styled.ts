import styled from "styled-components"
import { mediaMax } from "../../helpers/MediaQueries"

interface IStyleProps {
  withPadding?: boolean
  reversed?: boolean
  infoWidth?: string
  infoPadding?: boolean
  imgHeight?: string
}
export const Wrapper = styled.div<IStyleProps>`
  width: 100%;
  height: 100vh;
  ${mediaMax.phoneXL`
    height: auto;
  `}
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => (props.withPadding ? "9% 10.2% 3% 10.2%" : 0)};
  flex-direction: ${props => (props.reversed ? "row-reverse" : "row")};
  ${mediaMax.phoneXL`
    flex-direction: column;
    justify-content: flex-start;
  `}
`
export const Info = styled.div<IStyleProps>`
  width: 42%;
  display: flex;
  align-items: ${props => (props.reversed ? "flex-start" : "center")};
  justify-content: center;
  flex-direction: column;
  padding-left: ${props => (props.infoPadding ? "10.2%" : 0)};
  ${mediaMax.phoneXL`
    padding: 0;
  `}
  h4,
  p {
    min-width: 290px;
    width: ${props => props.infoWidth || "290px"};
  }
  h4 {
    letter-spacing: 0.1em;
  }
  p {
    padding-top: 4vh;
  }
  .title {
    min-width: auto;
    width: 200px;
    ${mediaMax.phoneXL`
      width: 290px;
    `}
  }
`
export const Img = styled.div<IStyleProps>`
  overflow: hidden;
  width: ${props => (props.withPadding ? "52.5%" : "57.2%")};
  position: relative;
  ${mediaMax.phoneXL`
      width: 100%;
  `}
  .gatsby-image-wrapper {
    height: ${props => (props.imgHeight ? props.imgHeight : "75vh")};
    ${mediaMax.phoneXL`
      height: auto;
    `}
    object-fit: cover;
    object-position: top;
  }
`
