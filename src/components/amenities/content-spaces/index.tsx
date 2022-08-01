import React, { FC, useEffect, useRef } from "react"
import { Wrapper, Info, Img } from "./index.styled"
import gsap from "gsap"
import { sizes } from "../../../helpers/MediaQueries"

interface IContentSpaces {
  spaces: {
    img1Src: string
    img1Top: string
    img1Width: string
    img2Src: string
    img2Top: string
    img2Width: string
    imgsWidth: string
    copiesWidth: string
    subHeading: string
    heading1: string | React.ReactElement
    heading2: string | React.ReactElement
    copy: string | React.ReactElement
    reversed: boolean
    nbIcon?: string
    smallHeadings?: boolean
  }
}

const ContentSpaces: FC<IContentSpaces> = ({ spaces }) => {
  const wrapperRef = useRef(null)
  const infoRef = useRef(null)
  const imgLRef = useRef(null)
  const imgRRef = useRef(null)

  useEffect(() => {
    if (window.screen.width < sizes.phoneXL) return
    gsap
      .timeline({
        scrollTrigger: {
          trigger: wrapperRef.current || "",
          toggleActions: "play none none reverse",
          start: "top bottom+=10%",
          end: "center center+=1%",
          scrub: 4,
        },
        defaults: { duration: 3 },
      })
      .fromTo(
        infoRef.current || "",
        3,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 },
        "0"
      )
      .fromTo(
        imgLRef.current || "",
        { opacity: 0, y: 150 },
        { opacity: 1, y: 0 },
        "0"
      )
      .fromTo(
        imgRRef.current || "",
        { maxHeight: "0" },
        { maxHeight: "600px" },
        "0"
      )
    gsap
      .timeline({
        scrollTrigger: {
          trigger: wrapperRef.current || "",
          toggleActions: "play none none reverse",
          start: "bottom top+=15%",
          end: "center bottom-=5%",
          scrub: 4,
        },
        defaults: { duration: 3 },
      })
      .fromTo(
        infoRef.current || "",
        2,
        { opacity: 1, y: 0 },
        { opacity: 0, y: 0 },
        "0"
      )
      .fromTo(
        imgLRef.current || "",
        { opacity: 1, y: 0 },
        { opacity: 0, y: 0 },
        "0"
      )
      .fromTo(
        imgRRef.current || "",
        { maxHeight: "600px" },
        { maxHeight: "0" },
        "0"
      )
  }, [])
  return (
    <Wrapper reversed={spaces.reversed}>
      <div className={"gem-wrap"} ref={wrapperRef}>
        <Info
          ref={infoRef}
          reversed={spaces.reversed}
          copiesWidth={spaces.copiesWidth}
          className={spaces.smallHeadings ? "smallHeadings" : ""}
        >
          {spaces.subHeading && <h4 className={"h4"}>{spaces.subHeading}</h4>}
          {spaces.nbIcon && <img src={spaces.nbIcon} alt="" />}
          <h3 className={spaces.smallHeadings ? "h4" : "h3"}>
            {spaces.heading1}
          </h3>
          <h3 className={spaces.smallHeadings ? "h4i" : "h3i"}>
            {spaces.heading2}
          </h3>
          <p className={"copy_t1"}>{spaces.copy}</p>
        </Info>
        <Img
          imgsWidth={spaces.imgsWidth}
          img1Top={spaces.img1Top}
          img2Top={spaces.img2Top}
          reversed={spaces.reversed}
          img1Width={spaces.img1Width}
          img2Width={spaces.img2Width}
        >
          <div className="img-l" ref={imgLRef}>
            <img
              src={spaces.img1Src}
              alt="Maple Terrace Uptown Dallas"
              ref={imgLRef}
            />
          </div>
          <div className="img-r" ref={imgRRef}>
            <img
              src={spaces.img2Src}
              alt="Maple Terrace Uptown Dallas"
              ref={imgRRef}
            />
          </div>
        </Img>
      </div>
    </Wrapper>
  )
}

export default ContentSpaces
