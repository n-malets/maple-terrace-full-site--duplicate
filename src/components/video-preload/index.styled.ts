import styled from "styled-components";

export const VideoWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  background-color: #151515;
  transition: opacity 2.5s;
`;
export const VideoStyled = styled.video`
  object-fit: cover;
  height: 100%;
  width: 100%;
  object-position: center center;
`;
