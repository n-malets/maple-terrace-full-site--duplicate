import React, {FC, useRef, useEffect} from 'react';
import Image from "../image";
import {Wrapper, Img,  Mask} from "./index.styled";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";

interface IContentIntro {
  imgName: string;
  mask: string;
}

const ContentMaskImage:FC<IContentIntro> = ({imgName, mask}) => {
  const ContentWrapRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: maskRef?.current || "",
      toggleActions: "play none none reverse",
      start: "top+=25% bottom",
      end: "top+=25% top+=50%",
      markers: true,
      animation: gsap
        .timeline()
        .fromTo(
          bgRef?.current || null,
          1,
          { opacity: 0 },
          { opacity: 1},
          "-=.1"
        )
        .fromTo(
          maskRef?.current || null,
          1,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0},
          "-=.4"
        ),
    });
  }, [])
  return (
    <Wrapper ref={ContentWrapRef}>
      <Img  className="panel">
        <Image imageName={imgName} />
        <div className={'bg'} ref={bgRef}></div>
      </Img>
      <Mask ref={maskRef} className="panel">
        <Image imageName={mask} />
      </Mask>
    </Wrapper>
  );
};

export default ContentMaskImage;