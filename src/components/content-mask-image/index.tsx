import React, { FC, useRef, useEffect } from "react"
import Image from "../image"
import { Wrapper, Img, Mask, BlankSpace } from "./index.styled"
import gsap from "gsap"
<<<<<<< HEAD
import { sizes } from "../../helpers/MediaQueries"
import { ScrollTrigger } from "gsap/ScrollTrigger"
=======
>>>>>>> a84f0f96dc9ed28ab30f0da7c5c254cbd9fa680b

interface IContentIntro {
  imgName: string
  mask: string
  shifted?: boolean | undefined
  darkMenu?: boolean | undefined
  maskMove?: boolean | undefined
}

<<<<<<< HEAD
const ContentMaskImage: FC<IContentIntro> = ({
  imgName,
  mask,
  shifted,
  darkMenu,
}) => {
=======
const ContentMaskImage: FC<IContentIntro> = ({ imgName, mask, shifted, darkMenu, maskMove }) => {
>>>>>>> a84f0f96dc9ed28ab30f0da7c5c254cbd9fa680b
  const contentWrapRef = useRef<HTMLDivElement>(null)
  const maskRef = useRef<HTMLDivElement>(null)
  const maskTriggerRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
<<<<<<< HEAD
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
=======
    gsap.timeline({
      scrollTrigger: {
        trigger: contentWrapRef.current,
        start: "top bottom",
        end: "top bottom-=15%",
        toggleActions: "restart none none reverse",
      },
    }).to(imgRef.current, {opacity: 1, visibility: "visible",  top: '0'})
>>>>>>> a84f0f96dc9ed28ab30f0da7c5c254cbd9fa680b

    gsap.timeline({
      scrollTrigger: {
        trigger: contentWrapRef.current || "",
        start: "center top",
        end: "center top-=35%",
        toggleActions: "restart none none reverse",
      },
    })
      .to(maskRef.current || "",  { opacity: 1, visibility: 'visible', top: '0' })

<<<<<<< HEAD
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
=======
    gsap.timeline({
      scrollTrigger: {
        trigger: maskTriggerRef.current || "",
        start: "bottom top",
        end: "bottom top-=30%",
        toggleActions: "restart none none reverse",
      },
    })
      .to(
        imgRef.current || "",
        { overflow: "visible", visibility: "hidden", opacity: 0 },
      )
      .to(
        maskRef.current || "",
        { overflow: "visible", visibility: "hidden", opacity: 0 },
      )
>>>>>>> a84f0f96dc9ed28ab30f0da7c5c254cbd9fa680b
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

export default ContentMaskImage
