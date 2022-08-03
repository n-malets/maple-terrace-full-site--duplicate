import React, { FC, useEffect, useRef } from "react"
import { Wrapper, NextBtn, Headings } from "./index.styled"
import gsap from "gsap"
import { PrevButton } from "../amenities/content-amenities-next/index.styled"
import { sizes } from "../../helpers/MediaQueries"

interface IContentNextSection {
  data: {
    num: string
    title: string
    next: string
  }
  prevBtn?: boolean | undefined
}
const ContentNextSection: FC<IContentNextSection> = ({ data, prevBtn }) => {
  const wrapperRef = useRef(null)
  const headingTRef = useRef(null)
  const headingBRef = useRef(null)
  const nextBtnRef = useRef(null)
  const prevButtonRef = useRef(null)

  useEffect(() => {
    if (window.screen.width < sizes.phoneXL) return
    gsap
      .timeline({
        scrollTrigger: {
          trigger: wrapperRef.current || "",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 4,
          toggleActions: "play none none reverse",
          id: "in",
        },
        defaults: { duration: 3 },
      })
      .fromTo(
        headingTRef.current || "",
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0 },
        "0"
      )
      .fromTo(
        headingBRef.current || "",
        { opacity: 0, y: 175 },
        { opacity: 1, y: 0 },
        "0"
      )
      .fromTo(
        nextBtnRef.current || "",
        { opacity: 0, y: 250 },
        { opacity: 1, y: 0 },
        "0"
      )

    gsap
      .timeline({
        scrollTrigger: {
          trigger: wrapperRef.current || "",
          start: "bottom center",
          end: "bottom top",
          scrub: 4,
          toggleActions: "play none none reverse",
        },
        defaults: { duration: 3 },
      })
      .to(wrapperRef.current || "", { y: -55 }, "0")

    gsap
      .timeline({
        scrollTrigger: {
          trigger: wrapperRef.current || "",
          start: "bottom center",
          end: "bottom top",
          scrub: 4,
          toggleActions: "play none none reverse",
        },
        defaults: { duration: 3 },
      })
      .fromTo(
        prevButtonRef.current || ".n-prev-btn",
        { y: 100, opacity: 0 },
        { y: "-6vh", opacity: 1 }
      )
  }, [])
  return (
    <Wrapper ref={wrapperRef}>
      <Headings>
        <p ref={headingTRef} className={"h3"}>
          {data.num}
        </p>
        <h2 ref={headingBRef} className={"h1i"}>
          {data.title}
        </h2>
      </Headings>
      <NextBtn to={data.next} className={"copy_t2"} ref={nextBtnRef}>
        NEXT SECTION
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 7L0 14V0L14 7Z" fill="white" />
        </svg>
      </NextBtn>
      {prevBtn && (
        <PrevButton to={"/"} ref={prevButtonRef} id={"n-prev-btn"}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.11959e-07 7L14 0L14 14L6.11959e-07 7Z" fill="white" />
          </svg>
          <p>
            PREVIOUS SECTION <br />
            <span>BUILDING</span>
          </p>
        </PrevButton>
      )}
    </Wrapper>
  )
}

export default ContentNextSection
