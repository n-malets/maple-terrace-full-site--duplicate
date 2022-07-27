import styled from "styled-components"
import { mediaMax } from "../../../helpers/MediaQueries"

export const FPWrapper = styled.div`
  width: 100%;
  height: 200vh;
  padding: 12vh 1.8% 5% 2.6%;
  display: flex;
  flex-direction: column;
  position: relative;
`
export const FloorPlan = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  width: 63%;
  min-height: 100vh;
  margin: 0 auto;
  padding-bottom: 14vh;
`
export const FloorPlanImg = styled.div`
  position: sticky;
  top: 12vh;
  padding-top: 0;
  z-index: 1;
  .fp_images_wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 3% 0 3%;
    position: absolute;
    img {
      position: absolute;
      max-width: 65%;
      transition: 1s ease-out;
    }
    .fp_image_thumb {
      opacity: 0;
      position: static;
    }
    .fp_image_1 {
      opacity: 1;
    }
    .fp_image_2 {
      opacity: 0;
    }
    .fp_image_3 {
      opacity: 0;
    }
    .label_top {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    .label_right {
      position: absolute;
      top: 50%;
      right: 13.5%;
      transform: translateY(-50%) rotate(90deg);
      ${mediaMax.desktop`
        right: 1%;
      `}
    }
    .label_bottom {
      position: absolute;
      bottom: 3%;
      left: 50%;
      transform: translateX(-50%);
    }
    .download_fit {
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translateX(-50%);
      svg {
        margin-right: 6px;
      }
    }
    .download_All {
      position: absolute;
      bottom: -15vh;
      right: -0%;
      transform: translateX(-50%);
      border: 1px solid #fff;
      padding: 8px 26px 6px;
      svg {
        margin-right: 6px;
      }
    }
    .level_labels {
      position: absolute;
      left: 0;
      bottom: -15vh;
      display: flex;
      flex-direction: column;
      font-family: 'TT Norms', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;
      font-feature-settings: 'liga' off;
      color: #FFFFFF;
      // ${mediaMax.desktop`    
      //   bottom: -150px;
      // `}
      a {
        padding: 6px 0;
        opacity: 0.25;
        &.active {
          opacity: 1;
        }
      }
}
 
`

export const FloorPlanInfo = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  min-height: 120px;
  p {
    padding-right: 10px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.1em;
    font-feature-settings: "liga" off;
    padding-bottom: 15px;
    display: flex;
    align-items: center;
    span {
      display: block;
      text-align: center;
      line-height: 24px;
      border-radius: 50%;
      margin-right: 11px;
      width: 24px;
      height: 24px;
      color: #292929;
      background-color: #fff;
      flex-shrink: 0;
    }
  }
`
