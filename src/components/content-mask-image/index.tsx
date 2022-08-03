import React, { FC, useRef, useEffect } from "react"
import Image from "../image"
import { Wrapper, Img, Mask } from "./index.styled"
import gsap from "gsap"
import { sizes } from "../../helpers/MediaQueries"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface IContentIntro {
  imgName: string
  mask: string
  shifted?: boolean | undefined
  darkMenu?: boolean | undefined
}

const ContentMaskImage: FC<IContentIntro> = ({
  imgName,
  mask,
  shifted,
  darkMenu,
}) => {
  const contentWrapRef = useRef<HTMLDivElement>(null)
  const maskRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.screen.width < sizes.phoneXL) return
    gsap
      .timeline({
        scrollTrigger: {
          trigger: contentWrapRef.current || "",
          start: "center top+=70%",
          end: "center top",
          scrub: true,
          onEnter: () => {
            console.log("enter")
          },
          toggleActions: "play none none reverse",
        },
        defaults: { duration: 2 },
      })
      .fromTo(bgRef.current || "", { opacity: 0 }, { opacity: 0.7 }, "-=2")
    gsap
      .timeline({
        scrollTrigger: {
          trigger: contentWrapRef.current || "",
          start: "center top+=100%",
          end: "center top",
          scrub: true,
          toggleActions: "play none none reverse",
        },
        defaults: { duration: 0.5 },
      })
      .fromTo(maskRef.current || "", { opacity: 0 }, { opacity: 0.7 }, "+=2")

    if (shifted) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: contentWrapRef.current || "",
            start: "bottom bottom",
            end: "bottom top",
            toggleActions: "play none none reverse",
            scrub: true,
          },
          defaults: { duration: 2.5, ease: "easeIn" },
        })

        .to(
          contentWrapRef.current || "",
          { overflow: "visible", y: "30vh" },
          "0"
        )
        .to(contentWrapRef.current || "", { overflow: "visible" }, "0")
    }
    if (!shifted) {
      ScrollTrigger.create({
        trigger: maskRef?.current || "",
        toggleActions: "play none none reverse",
        start: "top top",
        end: "bottom top",
        scrub: true,
        animation: gsap
          .timeline()
          .fromTo(
            imgRef.current || "",
            { maxHeight: "100%", position: "sticky", overflow: "hidden" },
            { maxHeight: "0", position: "fixed", overflow: "hidden" }
          ),
      })
    }
  }, [])

  return (
    <Wrapper ref={contentWrapRef}>
      <Img className="panel" ref={imgRef}>
        <Image imageName={imgName} />
        <div className={"bg"} ref={bgRef} />
      </Img>
      <Mask ref={maskRef} className="panel">
        <Image imageName={mask} />
      </Mask>
    </Wrapper>
  )
}

export default ContentMaskImage
