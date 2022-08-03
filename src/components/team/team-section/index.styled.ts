import styled from "styled-components"

interface IStyleProps {
  img1Top?: string
  img1Width?: string
  img2Top?: string
  img2Width?: string
  imgsWidth?: string
  copiesWidth?: string
  img1OnTop?: boolean | undefined
  img1MaxWidth?: string | undefined
}

export const Wrapper = styled.div<IStyleProps>`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`

export const FixedWrapper = styled.div<IStyleProps>`
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 13vh 9% 5vh 6.6%;
  position: relative;

  .animation-style {
    opacity: 0;
    transform: translate(20vw, 0px);
    will-change: transform, opacity;
  }
`

export const TeamImgs = styled.div<IStyleProps>`
  width: ${props => props.imgsWidth};
  position: relative;

  .img-tl {
    position: absolute;
    top: ${props => props.img1Top};
    left: 0;
    width: ${props => props.img1Width};
    max-width: ${props => props.img1MaxWidth};
    z-index: ${props => (props.img1OnTop ? 1 : 0)};
  }

  .img-overlap {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    background-color: #151515;
  }

  .img-tr {
    position: absolute;
    top: ${props => props.img2Top};
    right: 0;
    width: ${props => props.img2Width};
  }
`

export const TeamInfo = styled.div`
  width: 36.5%;
  align-self: center;

  p {
    line-height: 22px;
  }

  h2 {
    padding: 24px 0;
  }
`
export const TeamQuotation = styled.div`
  padding-top: 13%;

  h4 {
    font-weight: 300;
  }

  p {
    font-style: italic;
    font-size: 24px;
    line-height: 29px;
    padding: 24px 0;
  }

  span {
    font-family: "TT Norms", sans-serif;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0.1em;
  }
`
