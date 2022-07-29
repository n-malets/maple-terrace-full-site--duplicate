import styled from "styled-components"
import { mediaMax } from "../../../helpers/MediaQueries"

export const FPWrapper = styled.div`
  width: 100%;
  height: 300vh;
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
  height: 100vh;
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
    padding: 1% 0 3%;
    position: absolute;

    .fp_images_subwrapper {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      position: relative;
      &::after {
        font-family: "TT Norms", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 2vh;
        line-height: 1.19;
        letter-spacing: 0.1em;
        font-feature-settings: "liga" off;
        content: "WOLF STREET";
        position: absolute;
        top: 50%;
        right: -9%;
        transform: translateY(-50%) rotate(90deg);
      }
    }
    img {
      position: absolute;
      max-height: 55vh;
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
    .label_bottom {
      position: absolute;
      bottom: 3%;
      left: 50%;
      transform: translateX(-50%);
    }
    .download_fit {
      position: absolute;
      bottom: -5vh;
      right: 0;
      svg {
        margin-right: 6px;
      }
    }
    .level_all {
      position: absolute;
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0 2%;
      ${mediaMax.desktopLarge`
       bottom: -20vh;
      `}
      ${mediaMax.desktop`
       bottom: -21vh;
      `}
    }
    .download_All {
      height: max-content;
      font-size: 12px;
      letter-spacing: 0.1em;
      font-feature-settings: "liga" off;
      transform: translateX(-50%);
      border: 1px solid #fff;
      padding: 8px 26px 6px;
      ${mediaMax.desktopLarge`
       bottom: -11vh;
      `}
      svg {
        margin-right: 6px;
      }
    }
    .level_labels {
      display: flex;
      flex-direction: column;
      font-family: "TT Norms", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;
      font-feature-settings: "liga" off;
      color: #ffffff;
      ${mediaMax.desktopLarge`
       bottom: -20vh;
      `}
      ${mediaMax.desktop`
       bottom: -21vh;
      `}
      a {
        padding: 6px 0;
        opacity: 0.25;
        &.active {
          opacity: 1;
        }
      }
    }
  }
`

export const FloorPlanInfo = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  p {
    width: 25%;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-feature-settings: "liga" off;
    padding-bottom: 15px;
    &:first-child {
      font-weight: 700;
    }
  }
`
