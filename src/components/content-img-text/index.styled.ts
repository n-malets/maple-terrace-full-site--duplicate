import styled from "styled-components";
interface IStyleProps {
  withPadding?: boolean;
  reversed?: boolean;
}
export const Wrapper = styled.div<IStyleProps>`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.withPadding ? "9% 10.2% 3% 10.2%" : 0};
  flex-direction: ${props => props.reversed ? "row-reverse" : 'row'};
`;
export const Info = styled.div<IStyleProps>`
  width: 42%;
  display: flex;
  align-items: ${props => props.reversed ? "flex-start" : "center"};
  justify-content: center;
  flex-direction: column;
  h4, p {
    min-width: 290px;
    width: 53%;
    padding-bottom: 24px;
  }
`;
export const Img = styled.div<IStyleProps>`
  width: ${props => props.withPadding ? "52.5%" : "57.2%"};
  position: relative;
  .gatsby-image-wrapper {
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`;