import React, {FC, useEffect, useRef} from 'react'
import {Wrapper, Info, Img} from "./index.styled";
import img1 from '../../../assets/images/building/building_2.jpg';
import img2 from '../../../assets/images/building/building_3.jpg';
import gsap from "gsap";

const ContentGem:FC = () => {
  const wrapperRef = useRef(null);
  const infoRef = useRef(null);
  const imgLRef = useRef(null);
  const imgRRef = useRef(null);

  useEffect(()=>{
    gsap
      .timeline({
        scrollTrigger: {
          trigger: wrapperRef.current || '',
          start: "center bottom",
          end: "center center+=1%",
          scrub: 4,
          toggleActions: "play none none reverse"
        },
        defaults: { duration: 3 },
      })
      .fromTo(
        infoRef.current || "",
        3,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 },
        '0'
      )
      .fromTo(
        ".img-l",
        { opacity: 0, y: 150 },
        { opacity: 1, y: 0 },
        '0'
      )
      .fromTo(
        ".img-r",
        { maxHeight: "0" },
        { maxHeight: "600px" },
        '0'
      )
    gsap
      .timeline({
        scrollTrigger: {
          trigger: wrapperRef.current || '',
          start: "center center-=1%",
          end: "center top+=5%",
          toggleActions: "play none none reverse",
          scrub: 4
        },
        defaults: { duration: 3 },
      })
      .fromTo(
        infoRef.current || "",
        2,
        { opacity: 1, y: 0 },
        { opacity: 0, y: 0 },
        "0"
      )
      .fromTo(
        ".img-l",
        { opacity: 1, y: 0 },
        { opacity: 0, y: 0 },
        "0"
      )
      .fromTo(
        ".img-r",
        { maxHeight: "600px" },
        { maxHeight: "0" },
        "0"
      )

  }, [])
  return (
    <Wrapper>
      <div className={'gem-wrap'} ref={wrapperRef}>
        <Info ref={infoRef}>
          <h3 className="h2">A 1925 architectural gem reimagined</h3>
          <h3 className="h2i">as a 21st century workplace.</h3>
        </Info>
        <Img>
          <div className="img-l">
            <img src={img1} alt="Maple Terrace Uptown Dallas" ref={imgLRef}/>
          </div>
          <div className="img-r">
            <img src={img2} alt="Maple Terrace Uptown Dallas" ref={imgRRef}/>
          </div>
        </Img>
      </div>
    </Wrapper>
  );
};

export default ContentGem;