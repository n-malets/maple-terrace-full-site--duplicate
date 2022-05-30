import React, {FC, useEffect, useRef} from 'react'
import {Wrapper, QuoteHeadings, PrevButton} from "./index.styled";
import {NextBtn} from "../../content-next/index.styled";
import QuoteIcon from "../../../assets/images/quote.svg"
import gsap from "gsap";

interface IContentAmNext {
  quote: {
    line1 : string
    line2 : string
  }
}

const ContentAmNext:FC<IContentAmNext> = ({quote}) => {
  const wrapperRef = useRef(null);
  const quoteRef = useRef(null);
  const quoteHeadingsRef = useRef(null);
  const nextBtnRef = useRef(null);
  const prevBtnRef = useRef(null);
  useEffect(()=>{
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
          trigger: wrapperRef.current || '',
          start: "bottom center",
          end: "bottom top",
          scrub: 4,
          toggleActions: "play none none reverse"
        },
        defaults: { duration: 3 },
      })
      .to(
        wrapperRef.current || '',
        { y: -105 },
        '0'
      )
      .fromTo(
        nextBtnRef.current || '',
        {y:100},
        { y: 0, opacity: 1 },
        '0'
      )
      .fromTo(
        prevBtnRef.current || '',
        {y: 100},
        { y: 0, opacity: 1 },
        '0'
      )
  }, [])
  return (
    <Wrapper ref={wrapperRef} className={'panel'}>
      <img src={QuoteIcon} alt="Quote Icon" />
      <QuoteHeadings ref={quoteHeadingsRef}>
        <h2 className={'h1 white-text-0'} ref={quoteRef}>{quote.line1}</h2>
        <h1 className={'h1i white-text-1'} ref={quoteRef}>{quote.line2}</h1>
        <NextBtn to={'/'} className={'copy_t2'} ref={nextBtnRef}>
          HOME
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 7L0 14V0L14 7Z" fill="white"/>
          </svg>
        </NextBtn>
      </QuoteHeadings>
      <PrevButton to={'/neighborhood'} ref={prevBtnRef}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.11959e-07 7L14 0L14 14L6.11959e-07 7Z" fill="white"/>
        </svg>
        <p>PREVIOUS SECTION <br/><span>NEIGHBORHOOD</span></p>
      </PrevButton>

    </Wrapper>
  );
};

export default ContentAmNext;