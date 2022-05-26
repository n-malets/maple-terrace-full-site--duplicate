import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  display: block;
  width: 36%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1002;
`;
export const ScrollBtn = styled.p`
  position: absolute;
  bottom: 36px;
  font-family: 'TT Norms', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;
