import React, { FC, useEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"

import Image from "../image"
import { Wrapper } from "./index.styled"

interface IContentSlider {
  title: JSX.Element | string
  data: any[]
}

const ContentSlider: FC<IContentSlider> = ({ title, data }) => {
  const ContentWrapRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    let sections = gsap.utils.toArray(".slide")

    gsap.to(sections, {
      xPercent: -60 * (sections.length - 1),
      opacity: 1,
      ease: "ease",
      scrollTrigger: {
        trigger: ".within-walk",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: "+=2500",
      },
    })

    gsap.to(".title", {
      xPercent: 5 * (sections.length - 1),
      opacity: 1,
      ease: "ease",
      scrollTrigger: {
        trigger: ".within-walk",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: "+=2500",
      },
    })
  }, [])

  return (
    <Wrapper ref={ContentWrapRef}>
      <h2 className="h2 title">{title}</h2>
      <div className="slider-wrapper">
        {data.map((slide, index) => (
          <div className="slide" key={`slide_${index}`}>
            <div className="img">
              <Image imageName={slide.img} />
            </div>
            <p className="h3 number">{slide.number}</p>
            <div className="line"></div>
            <p className="h3i">{slide.title}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default ContentSlider
