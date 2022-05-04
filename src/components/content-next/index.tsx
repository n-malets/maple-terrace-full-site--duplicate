import React, {FC, useEffect, useRef} from 'react';
import {Wrapper, NextBtn, Headings} from "./index.styled";
import gsap from "gsap";

interface IContentNextSection {
  data: {
    num: string;
    title: string;
    next: string;
  }
}
const ContentNextSection:FC<IContentNextSection>= ({data}) => {
  const wrapperRef = useRef(null);
  const headingTRef = useRef(null);
  const headingBRef = useRef(null);
  const nextBtnRef = useRef(null);

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
        headingTRef.current || "",
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0},
        '0'
      )
      .fromTo(
        headingBRef.current || '',
        { opacity: 0, y: 175 },
        { opacity: 1, y: 0 },
        '0'
      )
      .fromTo(
        nextBtnRef.current || '',
        { opacity: 0, y: 250 },
        { opacity: 1, y: 0 },
        '0'
      )
  }, [])
  return (
    <Wrapper ref={wrapperRef}>
      <Headings>
        <p ref={headingTRef} className={'h3'}>{data.num}</p>
        <h2 ref={headingBRef} className={'h1i'}>{data.title}</h2>
      </Headings>
      <NextBtn to={data.next} className={'copy_t2'} ref={nextBtnRef}>
        NEXT SECTION
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 7L0 14V0L14 7Z" fill="white"/>
        </svg>
      </NextBtn>
    </Wrapper>
  );
};

export default ContentNextSection;