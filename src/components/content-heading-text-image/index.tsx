import React, {FC, useEffect, useRef} from "react"
import {Wrapper, Text, Headings} from "./index.styled"
import gsap from "gsap"
import {sizes} from "../../helpers/MediaQueries"
import Image from "../image"

interface IContentHeadingTextImage {
  heading: {
    line1: string
    line2: string
  }
  headingWidth?: string
  text: string[]
  textWidth?: string
  textHeight?: string
  image: string
}

const ContentHeadingTextImage: FC<IContentHeadingTextImage> = ({
                                                                 heading,
                                                                 text,
                                                                 textWidth,
                                                                 headingWidth,
                                                                 textHeight,
                                                                 image,
                                                               }) => {
  const wrapperRef = useRef(null)
  const headingRef = useRef(null)
  const textRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    if (window.screen.width < sizes.phoneXL) return
    gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current || "",
        start: "top bottom",
        end: "top top",
        scrub: 3,
        toggleActions: "play none none reverse",
      },
      defaults: {duration: 3},
    })
      .fromTo(
        [headingRef.current, textRef.current] || "",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0 },
        "1"
      )
  })

  return (
    <Wrapper ref={wrapperRef}>
      <div className="content">
        <Headings ref={headingRef} headingWidth={headingWidth}>
          <h3 className={"h3"}>{heading.line1}</h3>
          <h3 className={"h3i"}>{heading.line2}</h3>
        </Headings>
        <Text ref={textRef} textWidth={textWidth} textHeight={textHeight}>
          {text.map((item, i) => (
            <p className="copy_t1" key={`id-${i}`}>
              {item}
            </p>
          ))}
        </Text>
      </div>
      <div className="img" ref={imageRef}>
        <Image imageName={image}/>
      </div>
    </Wrapper>
  )
}

export default ContentHeadingTextImage