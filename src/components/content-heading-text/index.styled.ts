import styled from "styled-components"
import { mediaMax } from "../../helpers/MediaQueries"

export const Wrapper = styled.div`
  height: 100vh;
  ${mediaMax.phoneXL`
    height: auto;
  `}
  display: flex;
  align-items: flex-end;
  padding: 20px 1.8% 19vh 10.2%;
  ${mediaMax.phoneXL`
    padding: 0 5%;
  `}
  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    ${mediaMax.phoneXL`
      flex-direction: column;
    `}
  }
`
export const Headings = styled.div`
  max-width: 45%;
  opacity: 0;
  font-feature-settings: "liga" off;
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
  }
`
export const Text = styled.div`
  width: 45%;
  opacity: 0;
  ${mediaMax.phoneXL`
    opacity: 1;
    width: 100%;
  `}
  p {
    line-height: 38px;
    padding: 0 10px;
    max-width: 500px;
    ${mediaMax.phoneXL`
      padding: 0;
      line-height: 18px;
      font-size: 14px;
    `}
  }
`
