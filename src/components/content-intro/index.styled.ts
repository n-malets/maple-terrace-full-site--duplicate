import styled from "styled-components"

interface IStyledProps {
  objPosition?: string
}

export const Wrapper = styled.div<IStyledProps>`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .img {
    width: 100%;
    height: 100vh;
  }
  .gatsby-image-wrapper {
    height: 100%;
    img {
      height: 100%;
      object-fit: cover !important;
      object-position: ${props => props.objPosition ? props.objPosition : 'center 40% !important'};
    }
  }
`
