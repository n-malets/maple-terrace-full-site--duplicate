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

  // useEffect(() => {
  //   ScrollTrigger.create({
  //     trigger: maskRef?.current || "",
  //     toggleActions: "play none none reverse",
  //     start: "top+=25% bottom",
  //     end: "top+=25% top+=50%",
  //     // markers: true,
  //     animation: gsap
  //       .timeline()
  //       .fromTo(
  //         bgRef?.current || null,
  //         { opacity: 0 },
  //         { opacity: 1},
  //         "-=1"
  //       )
  //       .fromTo(
  //         maskRef?.current || null,
  //         { opacity: 0, y: 0 },
  //         { opacity: 1, y: 0},
  //         "-=2"
  //       ),
  //   });
  // }, [])
  useEffect(()=>{
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ContentWrapRef.current || '',
          start: "center top+=70%",
          end: "center top",
          scrub: true,
          toggleActions: "play none none reverse",
          // markers: true,
        },
        defaults: { duration: 2 },
      })
      .fromTo(
        bgRef.current || "",
        { opacity: 0 },
        { opacity: 1},
        '-=2'
      )
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ContentWrapRef.current || '',
          start: "center top+=10%",
          end: "center top",
          scrub: true,
          toggleActions: "play none none reverse",
          // markers: true,
        },
        defaults: { duration: 2 },
      })
      .fromTo(
        maskRef.current || '',
        { opacity: 0},
        { opacity: 1},
        '+=1'
      )
    // gsap
    //   .timeline({
    //     scrollTrigger: {
    //       trigger: ContentWrapRef.current || '',
    //       start: "center+=5% top",
    //       end: "center top-=5%",
    //       scrub: 4,
    //       toggleActions: "play none none play",
    //       markers: true
    //     },
    //     defaults: { duration: 1 },
    //   })
    //   .to(
    //     bgRef.current || "",
    //     { opacity: 0},
    //     '0'
    //   )
    //   .to(
    //     maskRef.current || '',
    //     { opacity: 0},
    //     '0'
    //   )

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