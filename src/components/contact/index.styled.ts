import styled from "styled-components"

export const ModalWrapper = styled.div`
  padding: 36px 36px 48px 48px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 100;
`

export const HeaderLogo = styled.div`
  display: flex;
  justify-content: space-between;
  img:last-child {
    cursor: pointer;
  }
`
export const FooterLogo = styled.div`
  img {
    margin-right: 36px;
  }
`
export const ContactInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`
export const ContactTitle = styled.div`
  margin-right: 18.5%;
  h2 {
    color: #0467ae;
  }
`
export const ContactItems = styled.div`
  .contact-item {
    display: flex;
    flex-direction: column;
    padding-bottom: 36px;
    h4 {
      color: #000;
      padding-bottom: 10px;
      text-transform: uppercase;
    }
    a,
    span {
      font-family: "Adobe Caslon Pro", sans-serif;
      color: #000;
      transition: 0.25s ease-out;
      cursor: pointer;
      font-size: 18px;
      line-height: 22px;
    }
    a:hover,
    span:hover {
      opacity: 0.75;
    }
    .tt-link {
      font-family: "TT Norms", sans-serif;
      padding-bottom: 36px;
      font-weight: 300;
      letter-spacing: 0.1em;
    }
  }
`
