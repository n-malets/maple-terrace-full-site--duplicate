import React, {FC, useEffect, useRef} from "react"
import gsap, {Linear} from "gsap"

import Image from "../image"
import {ContentContainer, Wrapper} from "./index.styled"
import {sizes} from "../../helpers/MediaQueries"

interface IContentSlider {
  title: JSX.Element | string
  data: any[]
}

const ContentSlider: FC<IContentSlider> = ({title, data}) => {
  const ContentWrapRef = useRef(null)
  const SliderRef = useRef(null)
  const ContentContainerRef = useRef(null)
  const FirstSceneRef = useRef(null)

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
        end: "bottom bottom",
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
      xPercent: -51 * (sections.length - 1),
      opacity: (self) => (sections.length - self + 1) / 2,
      ease: Linear.easeNone,
      scrollTrigger: {
        trigger: FirstSceneRef.current,
        scrub: 1,
        start: "top bottom",
        end: "bottom+=100% bottom",
      },
    })
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
                </div>
                <p className="h3 number">{slide.number}</p>
                <div className="line"/>
                <p className="h3i">{slide.title}</p>
              </div>
            ))}
          </div>
        </ContentContainer>
      </Wrapper>
      <Wrapper className={"panel"} ref={FirstSceneRef}/>
      <Wrapper className={"panel"}/>
    </>
  )
}

export default ContentSlider