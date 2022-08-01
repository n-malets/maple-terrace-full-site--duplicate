import styled from "styled-components"

interface IStyledProps{
  headingWidth?: string | undefined
  textWidth?: string | undefined
  textHeight?: string | undefined
}
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
export const Headings = styled.div<IStyledProps>`
  max-width: 50%;
  opacity: 0;

  h3 {
    font-weight: 300;
    max-width: ${props => props.headingWidth? props.headingWidth : '500px'};
  }
`
export const Text = styled.div<IStyledProps>`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  p {
    line-height: ${props => props.textHeight? props.textHeight : '38px'};
    padding: 0 10px;
    max-width: ${props => props.textWidth? props.textWidth : '500px'};
  }
`
