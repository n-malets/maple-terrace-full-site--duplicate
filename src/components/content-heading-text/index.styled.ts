import styled from "styled-components"
import { mediaMax } from "../../helpers/MediaQueries"

interface IStyledProps {
  headingWidth?: string | undefined
  textWidth?: string | undefined
  textHeight?: string | undefined
}
export const Wrapper = styled.div`
  height: 100vh;
  padding-top: 15vh;
  .content {
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: space-between;
    padding: 0 5%;
    ${mediaMax.phoneXL`
    padding: 0 5%;
  `}
    ${mediaMax.phoneXL`
      flex-direction: column;
      padding: 0 5%;
    `}
  }
  .img {
    width: 100%;
    margin-top: 10vh;
  }
`
export const Headings = styled.div<IStyledProps>`
  width: 50%;
  opacity: 1;
  font-feature-settings: "liga" off;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mediaMax.phoneXL`
    opacity: 1;
    max-width: 100%;
  `}
  h3 {
    font-weight: 300;
    ${mediaMax.phoneXL`
      font-size: 30px;
      line-height: 36px;
    `}
    max-width: ${props => (props.headingWidth ? props.headingWidth : "500px")};
  }
`
export const Text = styled.div<IStyledProps>`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  ${mediaMax.phoneXL`
    opacity: 1;
    width: 100%;
  `}
  p {
    line-height: ${props => (props.textHeight ? props.textHeight : "38px")};
    padding: 0 10px;
    max-width: ${props => (props.textWidth ? props.textWidth : "500px")};
    ${mediaMax.phoneXL`
      padding: 0;
      line-height: 18px;
      font-size: 14px;
    `}
  }
`
