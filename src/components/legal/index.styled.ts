import styled from "styled-components"

export const ModalWrapper = styled.div`
  padding: 36px 36px 48px 48px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  z-index: 100;
  overflow: auto;
  scroll-behavior: smooth;
`

export const HeaderLogo = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 93%;
  img:last-child {
    cursor: pointer;
  }
`
export const LegalContent = styled.div`
  display: flex;
  aside {
    position: fixed;
    display: flex;
    flex-direction: column;
    padding-right: 14px;
    padding-top: 9.25vh;
    a {
      font-family: "TT Norms", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #000000;
      opacity: 0.25;
      transition: 0.25s ease-out;
      padding-bottom: 36px;
      &:hover {
        opacity: 0.5;
      }
    }
  }
  section {
    color: #292929;
    width: 66%;
    margin-left: 25%;
    a,
    p {
      color: #292929;
    }
    p {
      padding-top: 10vh;
    }
  }
`
