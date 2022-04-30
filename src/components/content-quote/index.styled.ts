import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    margin-bottom: 36px;
  }
  h1 {
    position: relative;
    text-align: center;
    &:after {
      content: '';
      position: absolute;
      bottom: -36px;
      left: 50%;
      transform: translateX(-50%);
      width: 72px;
      height: 1px;
      background-color: #fff;
    }
  }
`;