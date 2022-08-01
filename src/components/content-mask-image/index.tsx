import React, { FC, useRef, useEffect } from "react"
import Image from "../image"
import { Wrapper, Img, Mask, BlankSpace } from "./index.styled"
import gsap from "gsap"
import { sizes } from "../../helpers/MediaQueries"

interface IContentIntro {
  imgName: string
  mask: string
  shifted?: boolean | undefined
  darkMenu?: boolean | undefined
  maskMove?: boolean | undefined
}

const ContentMaskImage: FC<IContentIntro> = ({
  imgName,
  mask,
  shifted,
  darkMenu,
  maskMove,
}) => {
  const contentWrapRef = useRef<HTMLDivElement>(null)
  const maskRef = useRef<HTMLDivElement>(null)
  const maskTriggerRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: contentWrapRef.current,
          start: "top bottom",
          end: "top bottom-=15%",
          toggleActions: "restart none none reverse",
        },
      })
      .to(imgRef.current, { opacity: 1, visibility: "visible", top: "0" })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: contentWrapRef.current || "",
          start: "center top",
          end: "center top-=35%",
          toggleActions: "restart none none reverse",
        },
      })
      .to(maskRef.current || "", {
        opacity: 1,
        visibility: "visible",
        top: "0",
      })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: maskTriggerRef.current || "",
          start: "bottom top",
          end: "bottom top-=30%",
          toggleActions: "restart none none reverse",
        },
      })
      .to(imgRef.current || "", {
        overflow: "visible",
        visibility: "hidden",
        opacity: 0,
      })
      .to(maskRef.current || "", {
        overflow: "visible",
        visibility: "hidden",
        opacity: 0,
      })
  }, [])

  return (
    <>
      <Wrapper ref={contentWrapRef} className="panel">
        <Img ref={imgRef}>
          <Image imageName={imgName} />
          <Mask ref={maskRef}>
            <Image imageName={mask} />
          </Mask>
        </Img>
      </Wrapper>
      <BlankSpace className="panel" ref={maskTriggerRef} />
    </>
  )
}

export default ContentMaskImage
