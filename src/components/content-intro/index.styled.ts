import styled from "styled-components"
import { mediaMax } from "../../helpers/MediaQueries"

<<<<<<< HEAD
export const Wrapper = styled.div<{ mobileFullScreen: boolean }>`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  ${mediaMax.phoneXL`
    height: 100%
  `}
=======
interface IStyledProps {
  objPosition?: string
}

export const Wrapper = styled.div<IStyledProps>`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #151515;
>>>>>>> a84f0f96dc9ed28ab30f0da7c5c254cbd9fa680b
  .img {
    width: 100%;
    height: 100vh;
    ${mediaMax.phoneXL`
      height: ${(props: any) => (props.mobileFullScreen ? "100vh" : "390px")};
    `}
  }
  .gatsby-image-wrapper {
    height: 100%;
    img {
      height: 100%;
      object-fit: cover !important;
<<<<<<< HEAD
      object-position: 0 40% !important;
      ${mediaMax.phoneXL`
        object-position: center!important;
      `}
=======
      object-position: ${props => props.objPosition ? props.objPosition : 'center 40% !important'};
>>>>>>> a84f0f96dc9ed28ab30f0da7c5c254cbd9fa680b
    }
  }
`
