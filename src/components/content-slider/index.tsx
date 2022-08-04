import React, {FC, useEffect, useRef} from "react"
import gsap, {Linear} from "gsap"

import Image from "../image"
<<<<<<< HEAD
import { Wrapper } from "./index.styled"
import { sizes } from "../../helpers/MediaQueries"
=======
import {ContentContainer, HideOverlay, Wrapper} from "./index.styled"
import {sizes} from "../../helpers/MediaQueries"
>>>>>>> a84f0f96dc9ed28ab30f0da7c5c254cbd9fa680b

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
<<<<<<< HEAD

    gsap.registerPlugin(ScrollTrigger)
=======
>>>>>>> a84f0f96dc9ed28ab30f0da7c5c254cbd9fa680b
    const sections = gsap.utils.toArray(".slide")

    gsap.timeline({
      scrollTrigger: {
        trigger: ContentWrapRef.current,
        start: "top-=10 top",
        end: "bottom+=201% bottom",
        pin: ContentContainerRef.current,
        scrub: 1,
<<<<<<< HEAD
        // snap: 1 / (sections.length - 1),
        start: "-=10%",
        end: "+=124%",
=======
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
>>>>>>> a84f0f96dc9ed28ab30f0da7c5c254cbd9fa680b
      },
    })

    gsap.timeline({
      scrollTrigger: {
        trigger: FirstSceneRef.current,
        scrub: 1,
<<<<<<< HEAD
        // snap: 1 / (sections.length - 1),
        start: "-=10%",
        end: "+=124%",
=======
        start: "top bottom",
        end: "bottom+=100% bottom",
>>>>>>> a84f0f96dc9ed28ab30f0da7c5c254cbd9fa680b
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
<<<<<<< HEAD
    <Wrapper ref={ContentWrapRef} className="panel">
      <h2 className="h2 title">{title}</h2>
      <div className="slider-wrapper">
        {data.map((slide, index) => (
          <div className="slide" key={`slide_${index}`}>
            <div className="img">
              <Image imageName={slide.img} />
            </div>
            <p className="h3 number">{slide.number}</p>
            <div className="line" />
            <p className="h3i">{slide.title}</p>
=======
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
>>>>>>> a84f0f96dc9ed28ab30f0da7c5c254cbd9fa680b
          </div>
        </ContentContainer>
      </Wrapper>
      <Wrapper className={"panel"} ref={FirstSceneRef}/>
      <Wrapper className={"panel"} ref={SecondSceneRef}/>
    </>
  )
}

export default ContentSlider