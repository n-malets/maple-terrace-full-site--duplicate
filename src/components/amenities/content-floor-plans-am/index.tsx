import React, { useEffect, useRef } from "react"
import {
  FPWrapper,
  FloorPlan,
  FloorPlanImg,
  FloorPlanInfo,
} from "./index.styled"
import { FloorPlansData } from "../../../data/floor-plans"
import gsap from "gsap"
import { sizes } from "../../../helpers/MediaQueries"

const ContentFloorPlansAm = () => {
  const floorPlanImgRef = useRef<HTMLDivElement>(null)
  const levelLabelsRef = useRef<HTMLDivElement>(null)
  const fp4InfoRef = useRef<HTMLDivElement>(null)
  const fp5InfoRef = useRef<HTMLDivElement>(null)
  const fpImg4Ref = useRef<HTMLImageElement>(null)
  const fpImg5Ref = useRef<HTMLImageElement>(null)
  useEffect(() => {
    if (window.screen.width < sizes.phoneXL) return
    gsap
      .timeline({
        scrollTrigger: {
          trigger: fp4InfoRef.current || "",
          start: "bottom bottom",
          end: "bottom bottom-=5%",
          scrub: 3,
          onEnter: () => {
            levelLabelsRef.current!.childNodes.forEach((el: any) =>
              el.classList.remove("active")
            )
            levelLabelsRef.current!.children[0].classList.add("active")
            fpImg4Ref.current!.style.opacity = "1"
            fpImg5Ref.current!.style.opacity = "0"
          },
          onEnterBack: () => {
            levelLabelsRef.current!.childNodes.forEach((el: any) =>
              el.classList.remove("active")
            )
            levelLabelsRef.current!.children[0].classList.add("active")
            fpImg4Ref.current!.style.opacity = "1"
            fpImg5Ref.current!.style.opacity = "0"
          },
          toggleActions: "play none none reverse",
        },
        defaults: { duration: 3 },
      })
      .to(fp4InfoRef.current || "", { opacity: 1 })
    gsap
      .timeline({
        scrollTrigger: {
          trigger: fp4InfoRef.current || "",
          start: "top bottom-=25%",
          end: "top bottom-=35%",
          scrub: 3,
          toggleActions: "play none none reverse",
        },
        defaults: { duration: 3 },
      })
      .to(fp4InfoRef.current || "", { opacity: 0 })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: fp5InfoRef.current || "",
          start: "bottom bottom",
          end: "bottom bottom-=5%",
          scrub: 3,
          onEnter: () => {
            levelLabelsRef.current!.childNodes.forEach((el: any) =>
              el.classList.remove("active")
            )
            levelLabelsRef.current!.children[1].classList.add("active")
            fpImg4Ref.current!.style.opacity = "0"
            fpImg5Ref.current!.style.opacity = "1"
          },
          onEnterBack: () => {
            levelLabelsRef.current!.childNodes.forEach((el: any) =>
              el.classList.remove("active")
            )
            levelLabelsRef.current!.children[1].classList.add("active")
            // fpImg3Ref.current!.style.opacity = '0';
            fpImg5Ref.current!.style.opacity = "1"
          },
          toggleActions: "play none none reverse",
        },
        defaults: { duration: 3 },
      })
      .to(fp5InfoRef.current || "", { opacity: 1 })
    gsap
      .timeline({
        scrollTrigger: {
          trigger: fp5InfoRef.current || "",
          start: "top bottom-=25%",
          end: "top bottom-=35%",
          scrub: 3,
          toggleActions: "play none none reverse",
        },
        defaults: { duration: 3 },
      })
      .to(fp5InfoRef.current || "", { opacity: 0 })
    gsap
      .timeline({
        scrollTrigger: {
          trigger: fp5InfoRef.current || "",
          start: "bottom bottom-=20%",
          end: "center top",
          scrub: 2,
          toggleActions: "play none none reverse",
        },
        defaults: { duration: 4 },
      })
      .fromTo(
        floorPlanImgRef.current || "",
        { top: "12vh" },
        { top: "-88vh", ease: "Power1.easeOut" }
      )
  }, [])

  return (
    <FPWrapper>
      <FloorPlanImg ref={floorPlanImgRef}>
        <div className={"fp_images_wrapper"}>
          <img
            className={"fp_image_thumb"}
            src={FloorPlansData.floorPlan1.img}
            alt="Hines Maple-Terrace Floor-Plan L4"
          />
          <img
            ref={fpImg4Ref}
            className={"fp_image_1"}
            src={FloorPlansData.floorPlan4.img}
            alt="Hines Maple-Terrace Floor-Plan L4"
          />
          <img
            ref={fpImg5Ref}
            className={"fp_image_2"}
            src={FloorPlansData.floorPlan5.img}
            alt="Hines Maple-Terrace Floor-Plan L4"
          />
          <div className="level_labels" ref={levelLabelsRef}>
            <a className={"active"}>Ground Level</a>
            <a>Level 8</a>
          </div>
          <a href={"#"} className="download_fit">
            <svg
              width="9"
              height="12"
              viewBox="0 0 9 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 5.64829H2.58621V0H6.36207V5.68966H8.79311L4.38622 10.7793L0 5.64829Z"
                fill="white"
              />
              <path
                d="M8.82422 12V11.369H7.53403e-05V12H8.82422Z"
                fill="white"
              />
            </svg>
            DOWNLOAD AMENITY PLAN
          </a>
          <a href={"#"} className="download_All">
            <svg
              width="9"
              height="12"
              viewBox="0 0 9 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 5.64829H2.58621V0H6.36207V5.68966H8.79311L4.38622 10.7793L0 5.64829Z"
                fill="white"
              />
              <path
                d="M8.82422 12V11.369H7.53403e-05V12H8.82422Z"
                fill="white"
              />
            </svg>
            DOWNLOAD ALL
          </a>
        </div>
      </FloorPlanImg>
      <FloorPlan className="panel">
        <FloorPlanInfo ref={fp4InfoRef}>
          <div>
            {FloorPlansData.floorPlan4.info[0].map((item, i) => (
              <p className={"caption_t1"} key={`idf-${i}`}>
                {item}
              </p>
            ))}
          </div>
          <div>
            {FloorPlansData.floorPlan4.info[1].map((item, i) => (
              <p className={"caption_t1"} key={`idf-${i}`}>
                {item}
              </p>
            ))}
          </div>
          <div>
            {FloorPlansData.floorPlan4.info[2].map((item, i) => (
              <p className={"caption_t1"} key={`idf-${i}`}>
                {item}
              </p>
            ))}
          </div>
        </FloorPlanInfo>
      </FloorPlan>
      <FloorPlan className="panel">
        <FloorPlanInfo className={"top-align"} ref={fp5InfoRef}>
          <div>
            {FloorPlansData.floorPlan5.info[0].map((item, i) => (
              <p className={"caption_t1"} key={`ids-${i}`}>
                {item}
              </p>
            ))}
          </div>
        </FloorPlanInfo>
      </FloorPlan>
    </FPWrapper>
  )
}

export default ContentFloorPlansAm
