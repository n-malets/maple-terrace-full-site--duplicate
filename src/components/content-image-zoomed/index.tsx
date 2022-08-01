import React, { FC, useEffect, useRef } from "react"
import { Wrapper } from "./index.styled"
import Image from "../image"
import gsap from "gsap"
import { sizes } from "../../helpers/MediaQueries"

interface IContentImageZoomed {
  imageName: string
}
const ContentImageZoomed: FC<IContentImageZoomed> = ({ imageName }) => {
  const wrapperRef = useRef(null)
  const imgZoomedRef = useRef(null)
  const contrastRef = useRef(null)

  useEffect(() => {
    if (window.screen.width < sizes.phoneXL) return
    gsap
      .timeline({
        scrollTrigger: {
          trigger: wrapperRef.current || "",
          start: "top bottom",
          end: "top top",
          scrub: 4,
          toggleActions: "play none none reverse",
        },
        defaults: { duration: 2 },
      })

      .fromTo(
        ".img-zoomed",
        { height: "0", overflow: "hidden" },
        { height: "100%", overflow: "hidden" },
        "0"
      )
      .fromTo(
        ".img-zoomed .gatsby-image-wrapper",
        { width: "200%" },
        { width: "100%" },
        "0"
      )
      .fromTo(contrastRef.current || "", { opacity: 0 }, { opacity: 1 }, "+=1")
    gsap
      .timeline({
        scrollTrigger: {
          trigger: wrapperRef.current || "",
          start: "bottom bottom",
          end: "bottom top",
          toggleActions: "play none none reverse",
          scrub: true,
        },
        defaults: { duration: 2.5, ease: "easeIn" },
      })

      .fromTo(
        imgZoomedRef.current || "",
        { overflow: "hidden", y: 0 },
        { overflow: "visible", y: "50vh" },
        "0"
      )
      .fromTo(
        wrapperRef.current || "",
        { overflow: "hidden" },
        { overflow: "visible" },
        "0"
      )
  }, [])
  return (
    <Wrapper ref={wrapperRef}>
      <div className="topContrast" ref={contrastRef} />
      <div className="img-zoomed" ref={imgZoomedRef}>
        <Image imageName={imageName} />
      </div>
    </Wrapper>
  )
}

export default ContentImageZoomed
