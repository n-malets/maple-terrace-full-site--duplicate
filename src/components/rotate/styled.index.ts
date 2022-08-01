import styled from "styled-components";

export const ContentWrap = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 99999;
  background-color: #151515;
  h3 {
    font-family: 'TT Norms', serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #FFFFFF;
    text-align: center;
    padding: 0 20px;
  }
`;

export const RotateLogo = styled(`img`)`
  width: 120px;
  margin-bottom: 42px;
`;