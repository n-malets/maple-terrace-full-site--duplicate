import React, { FC, useContext, useEffect, useRef } from "react"
import Image from "../image"
import { Wrapper } from "./index.styled"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import { Context } from "../../context/context"
import { sizes } from "../../helpers/MediaQueries"

interface IContentIntro {
  imgName: string
  objPosition?: string
  mobileFullScreen?: boolean
}

const ContentIntro: FC<IContentIntro> = ({
  imgName,
  objPosition,
  mobileFullScreen,
}) => {
  const contentWrapRef = useRef(null)
  const introImgRef = useRef(null)
  const { setIsMenuDark } = useContext(Context)

  useEffect(() => {
    if (window.screen.width < sizes.phoneXL) return
    if (
      location.pathname === "/neighborhood" ||
      location.pathname === "/neighborhood/"
    ) {
      ScrollTrigger.create({
        trigger: contentWrapRef?.current || "",
        toggleActions: "play none none reverse",
        start: "top top",
        end: "top+=30% top",
        scrub: 3,
        onLeave: () => {
          setIsMenuDark(false)
        },
        onEnterBack: () => {
          setIsMenuDark(true)
        },
      })
    }
    ScrollTrigger.create({
      trigger: contentWrapRef?.current || "",
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
    <Wrapper
      ref={contentWrapRef}
      objPosition={objPosition}
      mobileFullScreen={mobileFullScreen}
    >
      <div className="intro-img" ref={introImgRef}>
        <div className="img">
          <Image imageName={imgName} />
        </div>
      </div>
    </Wrapper>
  )
}

export default ContentIntro
