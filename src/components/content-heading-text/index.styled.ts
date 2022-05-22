import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: flex-end;
  padding: 20px 1.8% 19vh 10.2%;
  .content {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
export const Headings = styled.div`
  margin-right: 5%;
  max-width: 50%;
  opacity: 0;

  h3 {
    padding: 0 10px;
  }
`;
export const Text = styled.div`
  margin-left: 5%;
  width: 50%;
  opacity: 0;
  p {
    line-height: 36px;
    padding: 0 10px;
    max-width: 500px;
  }
`;