import styled from "styled-components"

export const MobileWrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 9;
  padding: 0 24px;
`

export const MobileNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 58px;
`

export const MobileLogo = styled.img<{ isVisible: boolean }>`
  height: 72px;
  transition: 1s;
  transform: translateY(${props => (props.isVisible ? "0" : "-30vh")});
`

export const MobileBurger = styled.img`
  height: 15px;
  margin-top: 4px;
`

export const MobileMenu = styled.div<{ isVisible: boolean }>`
  width: 100%;
  height: 355px;
  background: #292929;
  padding: 0 24px;
  position: absolute;
  transition: 0.5s;
  top: 0;
  left: 0;
  z-index: 20;
  font-family: "TT Norms";
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transform: translateY(${props => (props.isVisible ? "0" : "-100%")});
`

export const MobileLinks = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  line-height: 28px;
  a {
    margin-top: 18px;
    &:nth-child(1) {
      margin-top: 32px;
    }
  }
`

export const SubLinks = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 17px;
  .flex {
    display: flex;
  }
  .contact {
    margin-left: 36px;
  }
`
