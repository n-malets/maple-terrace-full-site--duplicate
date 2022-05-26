import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
`;
export const FooterContent = styled.div`
  width: 100%;
  height: 20vh;
  background-color: #fff;
  padding: 21px 24px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  .col {
    width: 33.33%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    a, p, span {
      color: #292929;
      font-size: 12px;
      line-height: 18px;
      font-family: "TT Norms", sans-serif;
      font-weight: 400;
    }
    span {
      font-weight: 500;
    }
    .footerLogos {
      img {
        margin-right: 24px;
        &:first-child {
          width: 80px;
        }
        &:last-child {
          width: 115px;
        }
      }
    }
    .mtLogo {
      width: 49px;
      margin: 0 auto;
    }
    .copyrights {
      text-align: center;
    }
    .socials {
      margin-left: auto;
      img {
        margin-left: 26px;
      }
    }
    .legalBtn {
      text-align: right;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
`;