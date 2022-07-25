import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  height: 200vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`
export const Items = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 10% 0;
  position: sticky;
  top: 0;
  left: 0;

  .c-line1 {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h4 {
      align-self: flex-end;
      min-width: 290px;
      letter-spacing: 0.1em;
    }
    img {
      width: 14.6%;
      min-width: 150px;
      margin-bottom: 48px;
    }
    img:last-child {
      width: 33%;
      min-width: 338px;
    }
  }
  .c-line2 {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    p {
      align-self: flex-start;
      padding-top: 34px;
    }
    img {
      width: 15.6%;
      min-width: 160px;
    }
  }
`
export const Milestones = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-x: hidden;
`
export const Heading = styled.div`
  padding-bottom: 30px;
  .h3 {
    font-weight: 300;
  }
`
export const TimeLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  .tl-item {
    position: relative;
    text-align: center;
    font-family: "TT Norms", sans-serif;
    font-style: normal;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    &:after {
      content: "";
      background-color: #fff;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      top: calc(50% - 21px);
      transform: translateX(-50%);
    }
    h6 {
      padding-bottom: 42px;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.1em;
    }
    p {
      padding-top: 42px;
      text-align: center;
      font-weight: 300;
      letter-spacing: 0.1em;
    }
  }
  .tl-line {
    width: 100vw;
    height: 1px;
    background-color: #fff;
    position: absolute;
    top: calc(50% - 9px);
    left: 0;
  }
`
