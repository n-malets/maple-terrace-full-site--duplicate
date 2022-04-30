import React, {FC} from 'react';
import Image from "../image";
import {Wrapper} from "./index.styled";

interface IContentIntro {
  imgName: string
}

const ContentIntro:FC<IContentIntro> = ({imgName}) => {
  return (
    <Wrapper>
      <Image imageName={imgName} />
    </Wrapper>
  );
};

export default ContentIntro;