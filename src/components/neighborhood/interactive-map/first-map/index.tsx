import React, {useEffect, useRef, useState} from "react"
import {
  MapImage,
  MapLogoIcon,
  MapWrapper,
  Wrapper,
  MapImageContainer,
  MapTitle
} from "../index.styled"
import mapImage from "../../../../assets/images/neighborhood/map-1.png"
import mapLogoIcon from "../../../../assets/images/neighborhood/map-icon.png"
import gsap from "gsap"
import animation from "../../../../static/lottie1rev1.json"
import Lottie from "react-lottie-player"

const FirstMap = () => {
  const [animationFrame, setAnimationFrame] = useState(0)
  const mapWrapperRef = useRef(null)
  const wrapperRef = useRef(null)
  const firstSceneSecondPhaseRef = useRef(null)
  const mapTitleRef = useRef(null)
  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top center",
        end: "top center",
        toggleActions: "restart none none reverse",
      },
    }).to(mapWrapperRef.current, {opacity: 1, visibility: "visible", duration: 1});


    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: firstSceneSecondPhaseRef.current || "",
        toggleActions: "restart none none reverse",
        start: "center-=25% bottom",
        end: "center+=25% bottom",
        scrub: true,
        onUpdate: self => {
          setAnimationFrame(self.progress * 50)
        },
      }
    })
    tl1.fromTo(mapTitleRef.current || "",
      {
        opacity: 0, visibility: "hidden", y: 150, duration: 1
      },
      {
        opacity: 1, visibility: "visible", y: 0, duration: 1
      }
    )

    gsap.timeline({
      scrollTrigger: {
        trigger: firstSceneSecondPhaseRef.current || "",
        toggleActions: "restart none none reverse",
        start: "bottom-=1 top",
        end: "bottom top",
      },
    }).to(wrapperRef.current || "",
      {
        opacity: 0, visibility: "hidden", duration: .1
      }
    )
    setTimeout(() => setAnimationFrame(0), 0)
  }, [])

  return (
    <>
      <Wrapper className="panel" ref={wrapperRef}>
        <MapWrapper ref={mapWrapperRef}>
          <MapImageContainer>
            <MapImage src={mapImage} className={"absolute"}/>
            <Lottie
              animationData={animation}
              loop={false}
              className="lottie-element first-map"
              goTo={animationFrame}
            />
            <MapLogoIcon src={mapLogoIcon}/>
          </MapImageContainer>
          <MapTitle ref={mapTitleRef}>
            Maple Terrace makes arrivals and departures easy
            <br/>
            <span>because minutes matter.</span>
          </MapTitle>
        </MapWrapper>
      </Wrapper>
      <Wrapper className="panel" ref={firstSceneSecondPhaseRef}/>
    </>
  )
}

export default FirstMap
