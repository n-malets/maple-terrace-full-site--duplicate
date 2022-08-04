import React, {FC, useEffect, useRef} from "react"
import gsap, {Linear} from "gsap"

import Image from "../image"
import {ContentContainer, HideOverlay, Wrapper} from "./index.styled"
import {sizes} from "../../helpers/MediaQueries"

interface IContentSlider {
  title: JSX.Element | string
  data: any[]
}

const ContentSlider: FC<IContentSlider> = ({title, data}) => {
  const ContentWrapRef = useRef(null)
  const SliderRef = useRef<HTMLDivElement>(null)
  const ContentContainerRef = useRef(null)
  const FirstSceneRef = useRef(null)
  const SecondSceneRef = useRef(null)

  useEffect(() => {
    if (window.screen.width < sizes.phoneXL) return
    const sections = gsap.utils.toArray(".slide")

    gsap.timeline({
      scrollTrigger: {
        trigger: ContentWrapRef.current,
        start: "top-=10 top",
        end: "bottom+=201% bottom",
        pin: ContentContainerRef.current,
        scrub: 1,
        toggleActions: "restart none none reverse",
      },
    })
    gsap.timeline({
      scrollTrigger: {
        trigger: ContentWrapRef.current,
        start: "top-=10 bottom",
        end: "bottom-=10 bottom",
        scrub: 1,
        toggleActions: "restart none none reverse",
      },
    })
      .to(ContentContainerRef.current, {opacity: 1, duration: 1})
      .fromTo(
        SliderRef.current,
        {x: 150, duration: 1},
        {x: 0, duration: 1},
        0
      );

    gsap.to(sections, {
      opacity: (self) => (sections.length - self + 1) / 2,
      ease: Linear.easeNone,
      scrollTrigger: {
        trigger: FirstSceneRef.current,
        scrub: 1,
        start: "top bottom",
        end: "bottom+=100% bottom",
      },
    })

    gsap.timeline({
      scrollTrigger: {
        trigger: FirstSceneRef.current,
        scrub: 1,
        start: "top bottom",
        end: "bottom+=100% bottom",
      },
    }).fromTo(SliderRef.current || "",
      {
        x: 0,
        ease: Linear.easeNone
      },
      {
        x: SliderRef?.current && (window.innerWidth - SliderRef.current.clientWidth - 20) || 0,
        ease: Linear.easeNone
      }
    )

    gsap.timeline({
      scrollTrigger: {
        trigger: SecondSceneRef.current || "",
        toggleActions: "restart none none reverse",
        start: "top top",
        end: "bottom top",
        scrub: 1
      },
    }).to(Array.from({length: sections.length}, (_, i) => `.text-${i}`) || "",
      {
        opacity: 0
      }
    ).to(Array.from({length: sections.length}, (_, i) => `.image-${i}`) || "",
      {
        height: "100%"
      },
      "0"
    )
  }, [])

  return (
    <>
      <Wrapper ref={ContentWrapRef} className="panel">
        <ContentContainer ref={ContentContainerRef}>
          <h2 className="h2 title">{title}</h2>
          <div className="slider-wrapper" ref={SliderRef}>
            {data.map((slide, index) => (
              <div className="slide" key={`slide_${index}`}>
                <div className="img">
                  <Image imageName={slide.img}/>
                  <HideOverlay className={`image-${index}`}/>
                </div>
                <div className={`text-${index}`}>
                  <p className="h3 number">{slide.number}</p>
                  <div className="line"/>
                  <p className="h3i">{slide.title}</p>
                </div>
              </div>
            ))}
          </div>
        </ContentContainer>
      </Wrapper>
      <Wrapper className={"panel"} ref={FirstSceneRef}/>
      <Wrapper className={"panel"} ref={SecondSceneRef}/>
    </>
  )
}

export default ContentSlider