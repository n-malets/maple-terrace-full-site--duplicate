import styled from "styled-components";

export const FPWrapper = styled.div`
  width: 100%;
  height: 300vh;
  padding: 0 1.8% 5% 2.6%;
  margin-top: 8%;
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const FloorPlan = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  width: 63%;
  margin: 0 auto;
`;
export const FloorPlanImg = styled.div`
  position: sticky;
  top: 8%;
  .fp_images_wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 1% 0 3%;
    position: absolute;
    img {
      position: absolute;
      max-width: 84%;
      max-height: 55vh;
    }
    .fp_image_thumb {
      opacity: 0;
      position: static;
    }
    .fp_image_1 {
      opacity: 1;
    }
    .fp_image_2 {
      opacity: 1;
    }
    .fp_image_3 {
      opacity: 1;
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
      right: 1%;
      transform: translateY(-50%) rotate(90deg);
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
      right: 1%;
      transform: translateX(-50%);
      svg {
        margin-right: 6px;
      }
    }
    .download_All {
      position: absolute;
      bottom: -15%;
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
      bottom: -30%;
      display: flex;
      flex-direction: column;
      font-family: 'TT Norms', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;
      font-feature-settings: 'liga' off;
      color: #FFFFFF;
      a {
        padding: 6px 0;
        opacity: 0.25;
        &.active {
          opacity: 1;
        }
      }
}
 
`;

export const FloorPlanInfo = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  p {
    width: 25%;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-feature-settings: 'liga' off;
    padding-bottom: 15px;
    &:first-child {
      font-weight: 700;
    }
  }
`;