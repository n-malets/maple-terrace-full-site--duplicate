import React, {useEffect, useRef} from "react"
import {
  MapAirportYellow,
  MapAirportGreen,
  MapImage,
  MapLogoIcon,
  MapWrapper,
  Wrapper,
  MapImageContainer,
  AdditionalLocation,
  MapTitle, MapLogoText
} from "./index.styled"
import mapImage from "../../../assets/images/neighborhood/map-1.png"
import mapImage2 from "../../../assets/images/neighborhood/map-2.png"
import mapImage2_2 from "../../../assets/images/neighborhood/map-2-2.png"
import mapImage2_3 from "../../../assets/images/neighborhood/map-2-3.png"
import mapImage2_4 from "../../../assets/images/neighborhood/map-2-4.png"
import mapLogoIcon from "../../../assets/images/neighborhood/map-icon.png"
import mapAirportGreen from "../../../assets/images/neighborhood/map-airport-green.png"
import mapAirportYellow from "../../../assets/images/neighborhood/map-airport-yellow.png"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

const InteractiveMap = () => {
  const mapWrapperRef = useRef(null)
  const wrapperRef = useRef(null)
  const firstSceneSecondPhaseRef = useRef(null)
  const airportIcon1Ref = useRef(null)
  const airportIcon2Ref = useRef(null)
  const airportText1Ref = useRef(null)
  const airportText2Ref = useRef(null)
  const logoTextRef = useRef(null)
  const additionalLocationRef = useRef(null)
  const mapTitleRef = useRef(null)


  const secondSceneFirstPhaseRef = useRef(null)
  const secondSceneSecondPhaseRef = useRef(null)
  const secondSceneThirdPhaseRef = useRef(null)
  const secondSceneFourthPhaseRef = useRef(null)
  const secondMapSceneRef = useRef(null)
  const mapImage22Ref = useRef(null)
  const mapImage23Ref = useRef(null)
  const mapImage24Ref = useRef(null)


  useEffect(() => {
    /*gsap.to(mapWrapperRef.current || "", {
      scrollTrigger: {
        trigger: wrapperRef.current || "",
        markers: true,
        start: "top top",
        end: "+=4000",
        pin: mapWrapperRef.current || "",
        scrub: 1,
      },
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: secondSceneRef.current,
        start: "top center",
        end: "top center",
        toggleActions: "play none none reverse",
        markers: true,
      },
    })*/
    gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top center",
        end: "top center",
        toggleActions: "restart none none reverse",

      },
    }).to(mapWrapperRef.current, {opacity: 1, visibility: "visible", duration: 1});


    ScrollTrigger.create({
      trigger: secondSceneFirstPhaseRef.current || "",
      toggleActions: "restart none none reverse",
      start: "top center",
      end: "top center",
      animation: gsap.timeline()
        .to(secondMapSceneRef.current, {opacity: 1, visibility: "visible", duration: 1})
        .to([airportIcon1Ref.current,
            airportIcon2Ref.current,
            airportText1Ref.current,
            airportText2Ref.current,
            logoTextRef.current,
            additionalLocationRef.current,
            mapTitleRef.current],
          {
            opacity: 0, visibility: "hidden", y: -150, duration: 1
          },
          "-=1"
        )
    })

    ScrollTrigger.create({
      trigger: firstSceneSecondPhaseRef.current || "",
      toggleActions: "restart none none reverse",
      start: "top center",
      end: "top+=10 center",
      animation: gsap.timeline()
        .fromTo([airportIcon1Ref.current, airportIcon2Ref.current],
          {
            opacity: 0, visibility: "hidden", y: 100, duration: 1
          },
          {
            opacity: 1, visibility: "visible", y: 0, duration: 1
          })
        .fromTo([airportText1Ref.current, airportText2Ref.current, logoTextRef.current, additionalLocationRef.current, mapTitleRef.current],
          {
            opacity: 0, visibility: "hidden", y: 150, duration: 1
          },
          {
            opacity: 1, visibility: "visible", y: 0, duration: 1
          },
          "-=1"
        )
    })
    ScrollTrigger.create({
      trigger: secondSceneSecondPhaseRef.current || "",
      toggleActions: "restart none none reverse",
      start: "top center",
      end: "top center",
      animation: gsap.timeline()
        .to(mapImage22Ref.current, {opacity: 1, visibility: "visible", duration: 1})
    })
    ScrollTrigger.create({
      trigger: secondSceneThirdPhaseRef.current || "",
      toggleActions: "restart none none reverse",
      start: "top center",
      end: "top center",
      animation: gsap.timeline()
        .to(mapImage23Ref.current, {opacity: 1, visibility: "visible", duration: 1})
    })
    ScrollTrigger.create({
      trigger: secondSceneFourthPhaseRef.current || "",
      toggleActions: "restart none none reverse",
      start: "top center",
      end: "top center",
      animation: gsap.timeline()
        .to(mapImage24Ref.current, {opacity: 1, visibility: "visible", duration: 1})
    })

  }, [])

  return (
    <>
      <Wrapper className="panel" ref={wrapperRef}>
        <MapWrapper ref={mapWrapperRef}>
          {/*First Map scenes*/}
          <MapImageContainer>
            <MapImage src={mapImage}/>
            <MapLogoIcon src={mapLogoIcon}/>
            <MapLogoText className={"copy"} ref={logoTextRef}>MAPLE TERRACE</MapLogoText>
            <MapAirportGreen>
              <img src={mapAirportGreen} alt="" ref={airportIcon1Ref}/>
              <div className={"copy"} ref={airportText1Ref}>
                DALLAS FORT-WORTH
                INTERNATIONAL AIRPORT
                <br/>
                <br/>
                25 MINUTES
              </div>
            </MapAirportGreen>
            <MapAirportYellow>
              <img src={mapAirportYellow} alt="" ref={airportIcon2Ref}/>
              <div className={"copy"} ref={airportText2Ref}>
                LOVE FIELD AIRPORT
                <br/>
                12 MINUTES
              </div>
            </MapAirportYellow>
            <AdditionalLocation className={"copy"} ref={additionalLocationRef}>
              PARK CITIES
              <br/>
              10 MINUTES
            </AdditionalLocation>
            <MapTitle ref={mapTitleRef}>
              Maple Terrace makes arrivals and departures easy
              <br/>
              <span>
                because minutes matter.
              </span>
            </MapTitle>
          </MapImageContainer>

          <MapImageContainer className={"hidden"} ref={secondMapSceneRef}>
            <MapImage className={"absolute"} src={mapImage2}/>
            <MapImage className={"absolute hidden"} src={mapImage2_2} ref={mapImage22Ref}/>
            <MapImage className={"absolute hidden"} src={mapImage2_3} ref={mapImage23Ref}/>
            <MapImage className={"absolute hidden"} src={mapImage2_4} ref={mapImage24Ref}/>
            <MapLogoIcon src={mapLogoIcon}/>
          </MapImageContainer>

        </MapWrapper>
      </Wrapper>
      <Wrapper className="panel" ref={firstSceneSecondPhaseRef}/>
      <Wrapper className="panel" ref={secondSceneFirstPhaseRef}/>
      <Wrapper className="panel" ref={secondSceneSecondPhaseRef}/>
      <Wrapper className="panel" ref={secondSceneThirdPhaseRef}/>
      <Wrapper className="panel" ref={secondSceneFourthPhaseRef}/>
      <Wrapper className="panel"/>
      <Wrapper className="panel"/>
    </>
  )
}

export default InteractiveMap
