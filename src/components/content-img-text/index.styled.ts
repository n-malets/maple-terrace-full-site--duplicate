import styled from "styled-components";
interface IStyleProps {
  withPadding?: boolean;
  reversed?: boolean;
  infoWidth?: string;
  infoPadding?: boolean;
}
export const Wrapper = styled.div<IStyleProps>`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.withPadding ? "9% 10.2% 3% 10.2%" : 0};
  flex-direction: ${props => props.reversed ? "row-reverse" : 'row'};
`;
export const Info = styled.div<IStyleProps>`
  width: 42%;
  display: flex;
  align-items: ${props => props.reversed ? "flex-start" : "center"};
  justify-content: center;
  flex-direction: column;
  padding-left: ${props => props.infoPadding? '10.2%' : 0 };
  h4, p {
    min-width: 290px;
    width: ${props => props.infoWidth || "53%"};
  }
  p {
    padding-top: 24px;
  }
`;
export const Img = styled.div<IStyleProps>`
  overflow: hidden;
  width: ${props => props.withPadding ? "52.5%" : "57.2%"};
  position: relative;
  .gatsby-image-wrapper {
    max-height: 100vh;
    object-fit: cover;
    object-position: top;
  }
`;