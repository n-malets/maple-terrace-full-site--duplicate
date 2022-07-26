import styled from "styled-components"
interface IStyleProps {
  isMenuDark?: boolean | undefined
}
export const HeaderWrap = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 2.84%;
  display: flex;
  justify-content: space-between;
  z-index: 11;
  a,
  span {
    padding: 0 18px;
    opacity: 0.25;
    transition: 0.4s ease-out;
    letter-spacing: 0.1em;
    cursor: pointer;
    &:hover {
      opacity: 0.75;
    }
  }
`
export const Logo = styled.img`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 45vh);
`

export const Nav = styled.nav<IStyleProps>`
  font-size: 14px;
  font-family: "TT Norms", serif;
  a,
  span {
    color: ${props => (props.isMenuDark ? "black" : "white")};
  }
  a.active {
    opacity: 1;
  }
  &.prim {
    font-weight: 700;
  }
  &.sec {
    font-weight: 400;
    span {
      opacity: 1;
    }
  }
`

export const FooterNav = styled.nav`
  position: absolute;
  top: 93vh;
  right: 36px;
  font-family: "TT Norms", sans-serif;
  font-style: normal;
  h5 {
    padding-bottom: 4px;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.19em;
    cursor: pointer;
  }
  p {
    font-weight: 300;
    font-size: 8px;
    line-height: 9px;
    text-transform: capitalize;
  }
`
