import React, { FC, useRef, useEffect } from "react"
import Image from "../image"
import { Wrapper, Img, Mask, BlankSpace } from "./index.styled"
import gsap from "gsap"

interface IContentIntro {
  imgName: string
  mask: string
  maskMove?: boolean | undefined
}

const ContentMaskImageShifted: FC<IContentIntro> = ({ imgName, mask, maskMove }) => {
  const contentWrapRef = useRef<HTMLDivElement>(null)
  const maskRef = useRef<HTMLDivElement>(null)
  const maskTriggerRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: contentWrapRef.current,
        start: "top bottom",
        end: "top bottom-=15%",
        toggleActions: "restart none none reverse",
      },
    }).to(imgRef.current, {opacity: 1, visibility: "visible",  top: '0'})

    gsap.timeline({
      scrollTrigger: {
        trigger: contentWrapRef.current || "",
        start: "center top",
        end: "center top-=35%",
        toggleActions: "restart none none reverse",
      },
    })
    .to(maskRef.current || "",  { opacity: 1, visibility: 'visible', top: '0' })

    gsap.timeline({
      scrollTrigger: {
        trigger: maskTriggerRef.current || "",
        start: "bottom bottom",
        end: "bottom top",
        scrub: true,
        toggleActions: "restart none none reverse",
      },
    })
      .to(
        imgRef.current || "",
        { overflow: "visible", top: "-70vh" },
        "0"
      )

    gsap.timeline({
      scrollTrigger: {
        trigger: maskTriggerRef.current || "",
        start: "bottom top",
        end: "bottom top-=50%",
        scrub: true,
        toggleActions: "restart none none reverse",
      },
    })
      .to(
        imgRef.current || "",
        { overflow: "visible", top: "-100vh" },
      )
  }, [])

  return (
    <>
      <Wrapper ref={contentWrapRef}  className="panel">
        <Img ref={imgRef}>
          <Image imageName={imgName} />
          <Mask ref={maskRef}>
            <Image imageName={mask} />
          </Mask>
        </Img>
      </Wrapper>
      <BlankSpace className="panel" ref={maskTriggerRef}/>
    </>
  )
}

export default ContentMaskImageShifted
