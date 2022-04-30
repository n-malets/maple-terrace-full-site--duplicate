import styled from "styled-components";

export const HeaderWrap = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 36px 18px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  a {
    padding: 0 18px;
    opacity: .25;
    transition: .4s ease-out;
    letter-spacing: 0.1em;
    &:hover {
      opacity: .75;
    }
  }
`;
export const Logo = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Nav = styled.nav`
  font-size: 14px;
  font-family: "TT Norms", serif;
  &.prim {
    font-weight: 700;
  }
  &.sec {
    font-weight: 500;
  }
`;
