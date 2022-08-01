import React, { FC, useEffect, useRef } from "react"
import { Wrapper, Heading, Items } from "./index.styled"
import { WhyMP } from "../../../data/why-mp"
import gsap from "gsap"
import { sizes } from "../../../helpers/MediaQueries"

const ContentWhy: FC = () => {
  const wrapperRef = useRef(null)
  const headingsRef = useRef(null)

  useEffect(() => {
    if (window.screen.width < sizes.phoneXL) return
    gsap
      .timeline({
        scrollTrigger: {
          trigger: wrapperRef.current || "",
          start: "top bottom",
          end: "top top+=10%",
          scrub: 3,
          toggleActions: "play none none reverse",
        },
        defaults: { duration: 3 },
      })
      .fromTo(
        headingsRef.current || "",
        { opacity: 0, y: 75 },
        { opacity: 1, y: 0 },
        "-=1"
      )
      .fromTo(".line1", { opacity: 0, y: 150 }, { opacity: 1, y: 0 }, "-=2")
      .fromTo(".line2", { opacity: 0, y: 225 }, { opacity: 1, y: 0 }, "-=3")
    gsap
      .timeline({
        scrollTrigger: {
          trigger: wrapperRef.current || "",
          start: "bottom bottom",
          end: "bottom top",
          toggleActions: "play none none reverse",
          scrub: 4,
        },
        defaults: { duration: 3 },
      })
      .to(headingsRef.current || "", { opacity: 0, y: -75 }, "0")
      .to(".line1", { opacity: 0, y: -150 }, "-=1")
      .to(".line2", { opacity: 0, y: -225 }, "-=2")
  }, [])

  return (
    <Wrapper ref={wrapperRef}>
      <Heading ref={headingsRef}>
        <h3 className={"h3"}>Why</h3>
        <h3 className={"h3i"}>Maple Terrace?</h3>
      </Heading>
      <Items>
        <div className="line1">
          {WhyMP.line1.map((item: any, i) => (
            <div className="why-item" key={item.title + i}>
              <img src={item.icon} alt={item.title} />
              <p className={"caption_t2"}>{item.title}</p>
            </div>
          ))}
        </div>
        <div className="line2">
          {WhyMP.line2.map((item: any, i) => (
            <div className="why-item" key={item.title + i}>
              <img src={item.icon} alt={item.title} />
              <p className={"caption_t2"}>{item.title}</p>
            </div>
          ))}
        </div>
      </Items>
    </Wrapper>
  )
}

export default ContentWhy
