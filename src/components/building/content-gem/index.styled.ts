import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-left: 10.3%;
  display: flex;
  align-items: center;
  .trigger {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const Info = styled.div`
  width: 43.2%;
`;
export const Img = styled.div`
  width: 54.6%;
  position: relative;
  height: 100%;
  img {
    display: block;
  }
  .img-l {
    width: 46.3%;
    position: absolute;
    left: 0;
    top: 40%;
    transform: translateY(-40%);
    z-index: 1;
  }
  .img-r {
    width: 67.3%;
    position: absolute;
    right: 0;
    top: 60%;
    transform: translateY(-30%);
    overflow: hidden;
    img {
      height: 100%;
    }
  }
`;