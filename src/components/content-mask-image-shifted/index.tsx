import React, { FC, useRef, useEffect } from "react"
import Image from "../image"
import { Wrapper, Img, Mask, BlankSpace } from "./index.styled"
import gsap, {Power0} from "gsap"

interface IContentIntro {
  imgName: string
  mask: string
  maskMove?: boolean | undefined
}

const ContentMaskImageShifted: FC<IContentIntro> = ({ imgName, mask, maskMove }) => {
  const contentWrapRef = useRef<HTMLDivElement>(null)
  const maskRef = useRef<HTMLDivElement>(null)
  const maskTriggerRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: contentWrapRef.current,
        start: "top bottom",
        end: "top bottom-=15%",
        onEnter: self => self.refresh(),
        onLeave: self => self.refresh(),
        toggleActions: "restart none none reverse",
      },
    }).to(imgRef.current, {opacity: 1, visibility: "visible", duration: 1})

    gsap.timeline({
      scrollTrigger: {
        trigger: contentWrapRef.current || "",
        start: "center top+=50%",
        end: "center top",
        scrub: true,
        onEnter: self => self.refresh(),
        onLeave: self => self.refresh(),
        toggleActions: "restart none none reverse",
      },
      defaults: { duration: 2 },
    })
    .fromTo(bgRef.current || "", { opacity: 0 }, { opacity: 0.7 }, "-=2")

    gsap.timeline({
      scrollTrigger: {
        trigger: contentWrapRef.current || "",
        start: "center top",
        end: "center top-=50%",
        scrub: true,
        onEnter: self => self.refresh(),
        onLeave: self => self.refresh(),
        toggleActions: "restart none none reverse",
      },
      defaults: { duration: 1.5 },
    })
    .fromTo(maskRef.current || "", { opacity: 0, visibility: 'hidden', y: maskMove? '80' : '0' }, { opacity: 0.7, visibility: 'visible', y: maskMove? '0' : '0' }, "+=2")

    gsap.timeline({
      scrollTrigger: {
        trigger: maskTriggerRef.current || "",
        start: "bottom bottom",
        end: "bottom top",
        toggleActions: "restart none none reverse",
        scrub: true,
        onEnter: self => self.refresh(),
        onLeave: self => self.refresh(),
      },
      defaults: { duration: 2.5, ease: Power0.easeIn },
    })
      .to(
        imgRef.current || "",
        { overflow: "visible", top: "-70vh" },
        "0"
      )
      .to(
        maskRef.current || "",
        { overflow: "visible", top: "-70vh" },
        "0"
      )
    gsap.timeline({
      scrollTrigger: {
        trigger: maskTriggerRef.current || "",
        start: "bottom top",
        end: "bottom top-=30%",
        scrub: true,
        onEnter: self => self.refresh(),
        onLeave: self => self.refresh(),
        toggleActions: "restart none none reverse",
      },
    })
      .to(
        imgRef.current || "",
        { overflow: "visible", top: "-100vh" },
        -1
      )
      .to(
        maskRef.current || "",
        { overflow: "visible", top: "-100vh" },
        -1
      )
      .to(
        imgRef.current || "",
        { overflow: "visible", visibility: "hidden", opacity: 0 },
        1
      )
      .to(
        maskRef.current || "",
        { overflow: "visible", visibility: "hidden", opacity: 0 },
        1
      )
  }, [])

  return (
    <>
      <Wrapper ref={contentWrapRef}>
        <Img className="panel" ref={imgRef}>
          <Image imageName={imgName} />
          <div className={"bg"} ref={bgRef} />
        </Img>
        <Mask ref={maskRef}>
          <Image imageName={mask} />
        </Mask>
      </Wrapper>
      <BlankSpace className="panel" ref={maskTriggerRef}/>
    </>
  )
}

export default ContentMaskImageShifted
