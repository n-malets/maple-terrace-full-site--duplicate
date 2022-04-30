import React, {FC, useEffect, useRef} from 'react'
import {Wrapper, Info, Img} from "./index.styled";
import Image from "../image";

interface IContentImgText {
  data: {
    img: string;
    title: string | React.ReactElement;
    text: string;
    withPadding?: boolean | undefined;
    reversed?: boolean | undefined;
  }
}

const ContentImgText:FC<IContentImgText> = ({data}) => {
  const WrapperRef = useRef(null);

  return (
    <Wrapper withPadding={data.withPadding} reversed={data.reversed} ref={WrapperRef}>
      <Img withPadding={data.withPadding}>
        <Image imageName={data.img} />
      </Img>
      <Info reversed={data.reversed}>
        <h4 className="h4">{data.title}</h4>
        <p className="copy_t1">{data.text}</p>
      </Info>
    </Wrapper>
  );
};

export default ContentImgText;