import React, {FC, useEffect, useRef} from 'react'
import {Wrapper, Info, Img} from "./index.styled";
import Image from "../image";
import gsap from "gsap";

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
  const wrapperRef = useRef(null);
  const imgWrapperRef = useRef(null);
  const infoWrapperRef = useRef(null);

  useEffect(()=>{
    gsap
      .timeline({
        scrollTrigger: {
          trigger: wrapperRef.current || '',
          start: "top bottom",
          end: "bottom bottom",
          scrub: 4,
          toggleActions: "play none none reverse",
          id: 'in',
        },
        defaults: { duration: 3 },
      })
      .fromTo(
        imgWrapperRef.current || "",
        { y: 750,  opacity: 0 },
        { y: 0, opacity: 1},
        '+=.5'
      )
      .fromTo(
        infoWrapperRef.current || '',
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0 },

        '0'
      )
    gsap
      .timeline({
        scrollTrigger: {
          trigger: wrapperRef.current || '',
          start: "bottom bottom +=5%",
          end: "bottom top",
          toggleActions: "play none none reverse",
          scrub: 4,
          id: 'out',
        },
        defaults: { duration: 3 },
      })
      .fromTo(
        infoWrapperRef.current || "",
        2,
        { opacity: 1, y: 0 },
        { opacity: 0, y: 0 },
        "0"
      )

      .fromTo(
        imgWrapperRef.current || '',
        { opacity: 1, maxHeight: "100vh" },
        { opacity: 0, maxHeight: 0 },
        "0"
      )

  }, [])

  return (
    <Wrapper withPadding={data.withPadding} reversed={data.reversed} ref={wrapperRef}>
      <Img withPadding={data.withPadding} ref={imgWrapperRef}>
        <Image imageName={data.img}/>
      </Img>
      <Info reversed={data.reversed} ref={infoWrapperRef}>
        <h4 className="h4">{data.title}</h4>
        <p className="copy_t1">{data.text}</p>
      </Info>
    </Wrapper>
  );
};

export default ContentImgText;