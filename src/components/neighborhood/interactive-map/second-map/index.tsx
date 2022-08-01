import React, {useEffect, useRef, useState} from "react"
import {
  MapImage,
  MapLogoIcon,
  MapWrapper,
  Wrapper,
  MapImageContainer,
} from "../index.styled"
import mapImage from "../../../../assets/images/neighborhood/map-2.png"
import mapLogoIcon from "../../../../assets/images/neighborhood/map-icon.png"
import gsap from "gsap"
import animation from "../../../../static/lottie2rev1.json"
import {MapSubtitle, MapTextContainer, MapTitle} from "./index.styled"
import Lottie from "react-lottie-player"

const SecondMap = () => {
  const [animationFrame, setAnimationFrame] = useState(0)
  const MapWrapperRef = useRef(null)
  const WrapperRef = useRef(null)
  const MapTextContainerRef = useRef(null)
  const MapTextRef1 = useRef(null)
  const MapTextRef3 = useRef(null)
  const MapTextRef4 = useRef(null)
  const SecondPhaseRef = useRef(null)
  const ThirdPhaseRef = useRef(null)
  const FourthPhaseRef = useRef(null)
  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: WrapperRef.current,
        start: "top center",
        end: "top center",
        toggleActions: "restart none none reverse"
      },
    }).to(MapWrapperRef.current, {opacity: 1, visibility: "visible", duration: 1});

    gsap.timeline({
      scrollTrigger: {
        trigger: SecondPhaseRef.current || "",
        toggleActions: "restart none none reverse",
        start: "center-=25% bottom",
        end: "center+=25% bottom",
        scrub: true,
        onUpdate: self => {
          setAnimationFrame(self.progress * 30)
        },
      },
    })
      .fromTo(MapTextRef1.current || "",
        {
          opacity: 0, height: 0, duration: 1
        },
        {
          opacity: 1, height: 80, duration: 1
        }
      )

    gsap.timeline({
      scrollTrigger: {
        trigger: ThirdPhaseRef.current || "",
        toggleActions: "restart none none reverse",
        start: "center-=25% bottom",
        end: "center+=25% bottom",
        scrub: true,
        onUpdate: self => {
          setAnimationFrame(30 + self.progress * 30)
        },
      },
    }).fromTo(MapTextRef3.current || "",
      {
        opacity: 0, height: 0, duration: 1
      },
      {
        opacity: 1, height: 44, duration: 1
      }
    )

    gsap.timeline({
      scrollTrigger: {
        trigger: FourthPhaseRef.current || "",
        toggleActions: "restart none none reverse",
        start: "center-=25% bottom",
        end: "center+=25% bottom",
        scrub: true,
        onUpdate: self => {
          setAnimationFrame(60 + self.progress * 30)
        },
      },
    }).fromTo(MapTextRef4.current || "",
      {
        opacity: 0, height: 0, duration: 1
      },
      {
        opacity: 1, height: 36, duration: 1
      }
    )
    gsap.timeline({
      scrollTrigger: {
        trigger: FourthPhaseRef.current || "",
        toggleActions: "restart none none reverse",
        start: "bottom center",
        end: "bottom+=10 center"
      },
    }).fromTo(MapTextContainerRef.current || "",
      {
        opacity: 1, y: 0, duration: 1
      },
      {
        opacity: 0, y: -100, duration: 1
      }
    )

    gsap.timeline({
      scrollTrigger: {
        trigger: FourthPhaseRef.current || "",
        toggleActions: "restart none none reverse",
        start: "bottom-=1 top",
        end: "bottom top",
      },
    }).to(WrapperRef.current || "",
      {
        opacity: 0, visibility: "hidden", duration: .1
      }
    )

    setTimeout(() => setAnimationFrame(0), 0)
  }, [])

  return (
    <>
      <Wrapper className="panel" ref={WrapperRef}>
        <MapWrapper ref={MapWrapperRef}>
          <MapImageContainer>
            <MapImage src={mapImage} className={"absolute"}/>
            <Lottie
              animationData={animation}
              loop={false}
              className="lottie-element"
              goTo={animationFrame}
            />
            <MapLogoIcon src={mapLogoIcon}/>
          </MapImageContainer>
          <MapTextContainer ref={MapTextContainerRef}>
            <div ref={MapTextRef1}>
              <MapSubtitle>
                DIRECT ACCESS TO
              </MapSubtitle>
              <MapTitle>
                Dallas North Tollway
              </MapTitle>
            </div>
            <MapTitle ref={MapTextRef3}>
              Turtle Creek Blvd
            </MapTitle>
            <MapTitle ref={MapTextRef4}>
              North Central Expressway (NCX/75)
            </MapTitle>
          </MapTextContainer>
        </MapWrapper>
      </Wrapper>
      <Wrapper className="panel" ref={SecondPhaseRef}/>
      <Wrapper className="panel" ref={ThirdPhaseRef}/>
      <Wrapper className="panel" ref={FourthPhaseRef}/>
    </>
  )
}

export default SecondMap
