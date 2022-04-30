import React, {FC, useEffect, useRef} from 'react'
import {Wrapper, Info, Img} from "./index.styled";
import img1 from '../../../assets/images/building/building_2.jpg';
import img2 from '../../../assets/images/building/building_3.jpg';

const ContentGem:FC = () => {
  const WrapperRef = useRef(null);

  return (
    <Wrapper ref={WrapperRef}>
      <Info>
        <h3 className="h2">A 1925 architectural gem reimagined</h3>
        <h3 className="h2i">as a 21st century workplace.</h3>
      </Info>
      <Img>
        <img src={img1} alt="Maple Terrace Uptown Dallas"/>
        <img src={img2} alt="Maple Terrace Uptown Dallas"/>
      </Img>
    </Wrapper>
  );
};

export default ContentGem;