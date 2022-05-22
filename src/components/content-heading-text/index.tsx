import React, {FC, useEffect, useRef} from 'react';
import {Wrapper, Text, Headings} from "./index.styled";
import gsap from "gsap";

interface IContentHeadingText {
  heading: {
    line1: string;
    line2: string;
  };
  text: string[];
}
const ContentHeadingText:FC<IContentHeadingText>= ({heading, text}) => {
  const wrapperRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useEffect(()=> {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: wrapperRef.current || '',
          start: "top bottom",
          end: "top top",
          scrub: 3,
          toggleActions: "play none none reverse"
        },
        defaults: { duration: 3 },
      })

      .fromTo(
        headingRef.current || '',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0 },
        '1'
      )
      .fromTo(
        textRef.current || '',
        { opacity: 0, y: 200 },
        { opacity: 1, y: 0 },
        '1'
      )

  })

  return (
    <Wrapper ref={wrapperRef}>
      <div className="content">
        <Headings ref={headingRef}>
          <h3 className={'h3'}>{heading.line1}</h3>
          <h3 className={'h3i'}>{heading.line2}</h3>
        </Headings>
        <Text ref={textRef}>
          {text.map((item, i)=> (
            <p className="copy_t1" key={`id-${i}`}>{item}</p>
          ))}
        </Text>
      </div>
    </Wrapper>
  );
};

export default ContentHeadingText;