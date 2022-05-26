import React, {FC, useEffect, useRef} from 'react'
import {Wrapper, QuoteHeadings} from "./index.styled";
import QuoteIcon from "../../assets/images/quote.svg"
import gsap from "gsap";

interface IContentQuote {
  quote: {
    line1 : string
    line2 : string
  }
}

const ContentQuote:FC<IContentQuote> = ({quote}) => {
  const wrapperRef = useRef(null);
  const quoteRef = useRef(null);
  const quoteHeadingsRef = useRef(null);
  useEffect(()=>{
    gsap
      .timeline({
        scrollTrigger: {
          trigger: wrapperRef.current || '',
          start: "bottom top+=40%",
          end: "bottom top",
          scrub: 3,
          toggleActions: "play none none reverse"
        },
        defaults: { duration: 3 },
      })
      .to(
        '#headerLogo',
        {top: "-15vh", ease: "ease-out"},
        0
      )
      .to(
        '#hFooter',
        {right: "-15%", ease: "ease-out"},
        0
      )

    gsap
      .timeline({
        scrollTrigger: {
          trigger: quoteHeadingsRef.current || '',
          start: "top bottom",
          end: "top top+=48%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
        defaults: { duration: 3 },
      })
      .fromTo(".white-text-0", { opacity: 0, x: "-50%" }, { opacity: 1, x: "0" }, 0)
      .fromTo(".white-text-1", { opacity: 0, x: "50%" }, { opacity: 1, x: "0" }, 0)
    gsap
      .timeline({
        scrollTrigger: {
          trigger: quoteHeadingsRef.current || '',
          start: "top top+=40%",
          end: "top top",
          toggleActions: "play none none reverse",
          scrub: 1
        },
        defaults: { duration: 2 },
      })
      .fromTo(".white-text-0", { opacity: 1, x: "0" }, {opacity: 0, x: "50%" }, 0)
      .fromTo(".white-text-1", { opacity: 1, x: "0" }, {opacity: 0, x: "-50%" }, 0)
  }, [])
  return (
    <Wrapper ref={wrapperRef}>
      <img src={QuoteIcon} alt="Quote Icon" />
      <QuoteHeadings ref={quoteHeadingsRef}>
        <h2 className={'h1 white-text-0'} ref={quoteRef}>{quote.line1}</h2>
        <h1 className={'h1i white-text-1'} ref={quoteRef}>{quote.line2}</h1>
      </QuoteHeadings>
    </Wrapper>
  );
};

export default ContentQuote;