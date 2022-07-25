import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 14.15vh 6% 0;
`
export const Heading = styled.div`
  padding-bottom: 6vh;
  .h3 {
    font-weight: 300;
  }
`
export const Items = styled.div`
  width: 100%;
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .why-item {
    width: 21%;
    padding-bottom: 7.75vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    text-align: center;
    img {
      padding-bottom: 20px;
    }
    p{
      letter-spacing: 0.05em;
    }
  }
`
