import styled from "styled-components";

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
`;

export const HeaderLogo = styled.div`
  display: flex;
  justify-content: space-between;
  img:last-child {
    cursor: pointer;
  }
`;
export const FooterLogo = styled.div`
  img {
    margin-right: 36px;
  }
`;
export const ContactInfo = styled.div``;