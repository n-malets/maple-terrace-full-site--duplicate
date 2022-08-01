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
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 100vw !important;
  height: 200vh !important;
  min-height: 100vh;
  min-width: 177.77vh;
  
  
  &.hidden, .hidden {
    opacity: 0;
  }
  .lottie-element {
    position: absolute;
    width: 100%;
    height: 100%;
    
    &.first-map {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50.6%);
    }
  }
`
export const MapImage = styled.img`
  width: 100%;
  
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
  width: 5.1vw;
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