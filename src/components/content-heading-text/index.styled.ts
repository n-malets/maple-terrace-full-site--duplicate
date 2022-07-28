import styled from "styled-components"

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: flex-end;
  padding: 20px 1.8% 19vh 10.2%;
  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`
export const Headings = styled.div`
  max-width: 45%;
  opacity: 0;

  h3 {
    font-weight: 300;
  }
`
export const Text = styled.div`
  width: 45%;
  opacity: 0;
  p {
    line-height: 38px;
    padding: 0 10px;
    max-width: 500px;
  }
`
