import React, {useEffect, useRef, useState} from "react"
import {
  MapImage,
  MapLogoIcon,
  MapWrapper,
  Wrapper,
  MapImageContainer
} from "../index.styled"
import mapImage from "../../../../assets/images/neighborhood/map-3.png"
import mapLogoIcon from "../../../../assets/images/neighborhood/map-icon.png"
import gsap, {Linear} from "gsap"
import animation from "../../../../static/lottie3rev1.json"
import {MapSidePanel, Marker, MarkersContainer, SidePanelText} from "./index.styled"
import Lottie from "react-lottie-player"

const ThirdMap = () => {
  const [animationFrame, setAnimationFrame] = useState(0)
  const MapWrapperRef = useRef(null)
  const WrapperRef = useRef(null)
  const SecondPhaseRef = useRef(null)
  const ThirdPhaseRef = useRef(null)
  const FourthPhaseRef = useRef(null)
  const MapSidePanelRef = useRef(null)
  const SidePanelTextRef = useRef(null)
  const MarkersContainerRef = useRef(null)
  const MarkerRef1 = useRef(null)
  const MarkerRef2 = useRef(null)

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: WrapperRef.current,
        start: "top center",
        end: "top center",
        toggleActions: "restart none none reverse"
      },
    }).to(MapWrapperRef.current, {opacity: 1, visibility: "visible", duration: 1, ease: Linear.easeNone});

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
    }).fromTo(MapSidePanelRef.current || "",
      {
        left: "-45%", duration: 1, ease: Linear.easeNone
      },
      {
        left: 0, duration: 1, ease: Linear.easeNone
      }
    ).fromTo(MapWrapperRef.current || "",
      {
        width: "100%", duration: 1, ease: Linear.easeNone
      },
      {
        width: "55%", duration: 1, ease: Linear.easeNone
      },
      "-=1"
    ).fromTo(SidePanelTextRef.current || "",
      {
        x: -1000, duration: 1, ease: Linear.easeNone
      },
      {
        x: 0, duration: 1, ease: Linear.easeNone
      },
      "-=1"
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
    }).fromTo(MarkerRef1.current || "",
      {
        opacity: 0, height: 0, duration: 1, ease: Linear.easeNone
      },
      {
        opacity: 1, height: 44, duration: 1, ease: Linear.easeNone
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
    }).fromTo(MarkerRef2.current || "",
      {
        opacity: 0, height: 0, duration: 1, ease: Linear.easeNone
      },
      {
        opacity: 1, height: 44, duration: 1, ease: Linear.easeNone
      }
    )

    gsap.timeline({
      scrollTrigger: {
        trigger: FourthPhaseRef.current || "",
        toggleActions: "restart none none reverse",
        start: "center-=25% top",
        end: "center+=25% top",
        scrub: true
      },
    }).to(MapSidePanelRef.current || "",
      {
        y: "-100vh", duration: 1.5, ease: Linear.easeNone
      }
    ).to(MapWrapperRef.current || "",
      { right: "-100%", width: "100%", duration: 1.5, ease: Linear.easeNone
      },
      "-=1.5"
    )
    setTimeout(() => setAnimationFrame(0), 0)
  }, [])

  return (
    <>
      <Wrapper className="panel" ref={WrapperRef}>
        <MapSidePanel ref={MapSidePanelRef}>
          <SidePanelText ref={SidePanelTextRef}>
            Enjoy Uptown’s walkable amenities and Turtle Creek’s
            <br/>
            <span>
                Verdant Landscape.
            </span>
          </SidePanelText>

          <MarkersContainer ref={MarkersContainerRef}>
            <Marker ref={MarkerRef1}>
              <span className={"orange"}/>
              RESTAURANTS
            </Marker>
            <Marker ref={MarkerRef2}>
              <span className={"blue"}/>
              MUSEUMS & ENTERTAINMENT
            </Marker>
          </MarkersContainer>
        </MapSidePanel>
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
        </MapWrapper>
      </Wrapper>
      <Wrapper className="panel" ref={SecondPhaseRef}/>
      <Wrapper className="panel" ref={ThirdPhaseRef}/>
      <Wrapper className="panel" ref={FourthPhaseRef}/>
    </>
  )
}

export default ThirdMap
