import styled from "styled-components";
import Link from "gatsby-link";
export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 2%;
`;
export const Headings = styled.div`
  position: relative;
  text-align: center;
  padding-bottom: 36px;
  margin-bottom: 48px;
  &:after {
    content: '';
    width: 72px;
    height: 1px;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    left: calc( 50% - 36px );
  }
  p {
    padding-bottom: 16px;
  }
`;
export const NextBtn = styled(Link)`
  font-weight: 700;
  display: flex;
  align-items: center;
  svg {
    margin-left: 6px;
  }
`;