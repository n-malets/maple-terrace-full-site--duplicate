import React, { FC, useEffect, useRef } from "react";
import { ContentWrap, RotateLogo } from "./styled.index";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import rotateIcon from "../../assets/images/rotate_icon.png"

const RotateScreen: FC = () => {
  const contentWrapRef = useRef(null);
  const articleRef = useRef(null);
  useEffect(() => {
    ScrollTrigger.create({
      trigger: contentWrapRef?.current || "",
      toggleActions: "play none none none",
      start: "top+=25% bottom",
      animation: gsap
        .timeline()
        .fromTo(
          articleRef?.current || null,
          0.75,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0 },
          "+=.1"
        ),
    });
  }, []);
  return (
    <ContentWrap ref={contentWrapRef}>
      <RotateLogo src={rotateIcon} alt="rotate"/>
      <h3>Please rotate your device for the best experience.</h3>
    </ContentWrap>
  );
};
export default RotateScreen;

