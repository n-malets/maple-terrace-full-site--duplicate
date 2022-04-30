import React, {FC, useEffect, useRef} from 'react'
import {Wrapper} from "./index.styled";
import QuoteIcon from "../../assets/images/quote.svg"
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";

interface IContentQuote {
  quote: {
    line1 : string
    line2 : string
  }
}

const ContentQuote:FC<IContentQuote> = ({quote}) => {
  const WrapperRef = useRef(null);
  const quoteRef = useRef(null);
  // useEffect(()=>{
  //   gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: WrapperRef.current || "",
  //         start: "top 90%",
  //         end: "top 40%",
  //         toggleActions: "play none none reverse",
  //         scrub: true,
  //         markers: true
  //       },
  //       defaults: { duration: 2 },
  //     })
  //     .fromTo(".white-text-0", { left: "-50%" }, { left: "0" }, 0)
  //     .fromTo(".white-text-1", { left: "50%" }, { left: "0" }, 0)
  //   gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: WrapperRef.current || "",
  //         start: "top 10%",
  //         end: "center top",
  //         toggleActions: "play none none reverse",
  //         scrub: true,
  //         markers: true
  //       },
  //       defaults: { duration: 2 },
  //     })
  //     .fromTo(".white-text-0", { left: "0" }, { left: "50%" }, 0)
  //     .fromTo(".white-text-1", { left: "0" }, { left: "-50%" }, 0)
  // }, [])
  return (
    <Wrapper ref={WrapperRef}>
      <img src={QuoteIcon} alt="Quote Icon"/>
      <h2 className={'h1 white-text-0'} ref={quoteRef}>{quote.line1}</h2>
      <h1 className={'h1i white-text-1'} ref={quoteRef}>{quote.line2}</h1>
    </Wrapper>
  );
};

export default ContentQuote;