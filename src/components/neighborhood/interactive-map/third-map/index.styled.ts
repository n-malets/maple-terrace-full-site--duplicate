import styled from "styled-components";

export const MapSidePanel = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 45%;
  background: #151515;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const SidePanelText = styled.div`
  font-family: 'TT Norms', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  margin: 0 3vw;
  
  span {
    font-family: 'Adobe-Caslon-Pro', sans-serif;
    font-style: italic;
  }
`

export const MarkersContainer = styled.div`
  position: absolute;
  bottom: 3%;
  left: 6%;
`
export const Marker = styled.div`
  font-family: 'TT Norms', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 36px;
  display: flex;
  align-items: center;

  span {
    width: 24px;
    height: 24px;
    margin-right: 12px;    
    display: inline-block;
    border-radius: 50%;

    &.orange {
      background: #FAA71E;
    }

    &.blue {
      background: #0E6C79;
    }
  }
`
