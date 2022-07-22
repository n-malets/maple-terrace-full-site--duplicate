import React, { FC, useEffect, useRef } from "react"
import Image from "../image"
import { Wrapper } from "./index.styled"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"

interface IContentIntro {
  imgName: string
}

const ContentIntro: FC<IContentIntro> = ({ imgName }) => {
  const ContentWrapRef = useRef(null)
  const introImgRef = useRef(null)

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ContentWrapRef?.current || "",
      toggleActions: "play none none reverse",
      start: "top top",
      end: "bottom top",
      scrub: 3,
      animation: gsap
        .timeline()
        .fromTo(
          introImgRef.current || "",
          { height: "100%", overflow: "hidden" },
          { height: "0", overflow: "hidden" }
        ),
    })
  }, [])
  return (
    <Wrapper ref={ContentWrapRef}>
      <div className="intro-img" ref={introImgRef}>
        <div className="img">
          <Image imageName={imgName} />
        </div>
      </div>
    </Wrapper>
  )
}

export default ContentIntro
