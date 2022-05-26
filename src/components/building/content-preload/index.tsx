import React, {useEffect, useRef} from 'react';
import {Wrapper, Logo, ScrollBtn} from "./index.styled";
import logo from '../../../assets/images/main_logo_2.svg';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";

const ContentPreload = () => {
  const contentWrapRef = useRef(null);
  const scrollBtnRefRef = useRef(null);

  useEffect(()=>{
    ScrollTrigger.create({
      trigger: contentWrapRef.current || '',
      toggleActions: 'play none none reverse',
      start: "bottom bottom",
      end: "bottom center+=20%",
      scrub: 3,
      id: 'introScroll',
      animation: gsap
        .timeline()
        .fromTo(
        scrollBtnRefRef.current || '',
        {opacity: 1},
        {opacity: 0},
        )
        .fromTo(
        '#hNav',
        {y: '-100px'},
        {y: 0},
        '0'
        )
        .fromTo(
        '#sNav',
        {y: '-100px'},
        {y: 0},
        '0'
        )
        .fromTo(
        '#hFooter',
        {top: '110vh'},
        {top: '93vh'},
        '0'
        )
    });
  }, [])

  return (
    <Wrapper ref={contentWrapRef} id={'preload-wrap'}>
      <ScrollBtn ref={scrollBtnRefRef}>SCROLL TO ENTER</ScrollBtn>
    </Wrapper>
  );
};

export default ContentPreload;