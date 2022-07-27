import styled from "styled-components";

export const Wrapper = styled.section`
  height: 100vh;
  
  &.panel {
    will-change: unset;
  }
`
export const MapWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  opacity: 0;
  visibility: hidden;
  .copy {
    text-align: center;
    color: black;
    font-family: 'TT Norms', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 2px;
  }
`
export const MapImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &.hidden, .hidden {
    opacity: 0;
  }
`
export const MapImage = styled.img`
  width: 100%;
  //height: 100%;
  //object-fit: cover;
  
  &.absolute {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
export const MapLogoText = styled.div`
  position: absolute;
  top: 50%;
  left: 58%;
  transform: translate(-50%, -50%);
`
export const MapLogoIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const MapAirportGreen = styled.div`
  position: absolute;
  top: 15.1%;
  left: 10.3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 185px;
  img {
    margin-bottom: 12px;
    width: 48px;
    height: 48px;
  }
`
export const MapAirportYellow = styled.div`
  position: absolute;
  top: 28%;
  left: 38%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 185px;
  img {
    margin-bottom: 12px;
    width: 48px;
    height: 48px;
  }
`
export const AdditionalLocation = styled.div`
  position: absolute;
  top: 39%;
  left: 51%;
`
export const MapTitle = styled.div`
  position: absolute;
  bottom: 7%;
  right: 2%;
  color: black;
  font-family: 'TT Norms', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  max-width: 450px;
  span {
    font-family: 'Adobe-Caslon-Pro', sans-serif;
    font-style: italic;
    color: black;
  }
`