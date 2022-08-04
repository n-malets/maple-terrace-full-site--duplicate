import styled from "styled-components"

export const Wrapper = styled.section`
  margin-top: 34px;
`

export const Img = styled.img`
  width: 390px;
  height: 390px;
`

export const Content = styled.div`
  width: 100%;
  height: 230px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  &.slide_1 {
    padding: 57px 24px;
    h3 {
      font-family: "TT Norms";
      font-style: normal;
      font-weight: 300;
      color: #292929;
      font-size: 24px;
      line-height: 30px;
      text-align: left;
    }
    h3.subtitle {
      font-family: "Adobe Caslon Pro";
      font-style: italic;
      font-feature-settings: "liga" off;
    }
  }
  &.slide_2 {
    padding: 24px;
    h4 {
      color: #292929;
      font-family: "TT Norms";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.1em;
      font-feature-settings: "liga" off;
      margin-bottom: 15px;
    }
    h3 {
      font-family: "Adobe Caslon Pro";
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 30px;
      font-feature-settings: "liga" off;
      color: #292929;
      margin-top: 9px;
    }
  }
  &.slide_3 {
    padding: 24px;
    h3 {
      font-family: "TT Norms";
      font-style: normal;
      font-weight: 300;
      color: #292929;
      font-size: 24px;
      line-height: 30px;
      text-align: left;
    }
    h3.subtitle {
      font-family: "Adobe Caslon Pro";
      font-style: italic;
      font-feature-settings: "liga" off;
      margin-bottom: 8px;
    }
  }
`

export const Marker = styled.div`
  font-family: "TT Norms", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  color: #292929;
  margin-top: 12px;
  letter-spacing: 0.1em;
  font-feature-settings: "liga" off;

  span {
    width: 14px;
    height: 14px;
    margin-right: 6px;
    display: inline-block;
    border-radius: 50%;

    &.orange {
      background: #faa71e;
    }

    &.blue {
      background: #0e6c79;
    }
  }
`
