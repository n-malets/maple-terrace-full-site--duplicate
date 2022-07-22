import styled from "styled-components"

export const ImageWrapper = styled("div")`
  padding: ${(props: { padding: string | undefined }) =>
    props.padding ? props.padding : "0"};
  width: 100%;
  height: 100%;
`
