import React, {useEffect, useRef} from 'react';
import {Wrapper, Logo, ScrollBtn} from "./index.styled";
import logo from '../../../assets/images/main_logo_2.svg';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";

const ContentIntro = () => {
  const ContentWrapRef = useRef(null);

  useEffect(()=>{
    ScrollTrigger.create({
      trigger: "#mainLogo",
      toggleActions: 'play none none reverse',
      start: "bottom center",
      end: "bottom top",
      scrub: 0.1,
      animation: gsap
        .timeline()
        .fromTo(
        '#mainLogo',
        {top: "50%", transform: "translate(-50%, -50%) scale(1)",  ease: "ease-out"},
        {top: "-52px", transform: "translate(-50%, 0) scale(.25)", ease: "ease-out"},
      )
    });
  }, [])

  return (
    <Wrapper ref={ContentWrapRef}>
      <Logo src={logo} alt={'Maple Terrace Uptown Dallas'} id={'mainLogo'} />
      <ScrollBtn>SCROLL TO ENTER</ScrollBtn>
    </Wrapper>
  );
};

export default ContentIntro;