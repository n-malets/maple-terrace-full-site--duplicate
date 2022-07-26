import React, { FC, useEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"

import Image from "../image"
import { Wrapper } from "./index.styled"
import { sizes } from "../../helpers/MediaQueries"

interface IContentSlider {
  title: JSX.Element | string
  data: any[]
}

const ContentSlider: FC<IContentSlider> = ({ title, data }) => {
  const ContentWrapRef = useRef(null)

  useEffect(() => {
    if (window.screen.width < sizes.phoneXL) return

    gsap.registerPlugin(ScrollTrigger)
    const sections = gsap.utils.toArray(".slide")

    gsap.to(sections, {
      xPercent: -60 * (sections.length - 1),
      opacity: 1,
      ease: "ease",
      scrollTrigger: {
        trigger: ".within-walk",
        pin: true,
        scrub: 1,
        // snap: 1 / (sections.length - 1),
        start: "-=10%",
        end: "+=124%",
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
        // snap: 1 / (sections.length - 1),
        start: "-=10%",
        end: "+=124%",
      },
    })
  }, [])

  return (
    <Wrapper ref={ContentWrapRef} className="panel">
      <h2 className="h2 title">{title}</h2>
      <div className="slider-wrapper">
        {data.map((slide, index) => (
          <div className="slide" key={`slide_${index}`}>
            <div className="img">
              <Image imageName={slide.img} />
            </div>
            <p className="h3 number">{slide.number}</p>
            <div className="line" />
            <p className="h3i">{slide.title}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default ContentSlider
