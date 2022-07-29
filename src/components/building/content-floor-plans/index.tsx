import React, { useEffect, useRef } from "react"
import {
  FPWrapper,
  FloorPlan,
  FloorPlanImg,
  FloorPlanInfo,
} from "./index.styled"
import { FloorPlansData } from "../../../data/floor-plans"
import gsap from "gsap"

const ContentFloorPlans = () => {
  const floorPlanImgRef = useRef<HTMLDivElement>(null)
  const levelLabelsRef = useRef<HTMLDivElement>(null)
  const fp1InfoRef = useRef<HTMLDivElement>(null)
  const fp2InfoRef = useRef<HTMLDivElement>(null)
  const fp3InfoRef = useRef<HTMLDivElement>(null)
  const fpImg1Ref = useRef<HTMLImageElement>(null)
  const fpImg2Ref = useRef<HTMLImageElement>(null)
  const fpImg3Ref = useRef<HTMLImageElement>(null)
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: fp1InfoRef.current || "",
          start: "bottom bottom",
          end: "bottom bottom-=5%",
          scrub: 3,
          onEnter: () => {
            levelLabelsRef.current?.childNodes.forEach((el: any) =>
              el.classList.remove("active")
            )
              if(levelLabelsRef.current) levelLabelsRef.current.children[0].classList.add("active")
              if(fpImg1Ref.current) fpImg1Ref.current.style.opacity = "1"
              if(fpImg2Ref.current) fpImg2Ref.current.style.opacity = "0"
          },
          onEnterBack: () => {
            levelLabelsRef.current?.childNodes.forEach((el: any) =>
              el.classList.remove("active")
            )
            if(levelLabelsRef.current) levelLabelsRef.current.children[0].classList.add("active")
            if(fpImg1Ref.current) fpImg1Ref.current.style.opacity = "1"
            if(fpImg2Ref.current) fpImg2Ref.current.style.opacity = "0"
          },
          toggleActions: "play none none reverse",
        },
        defaults: { duration: 3 },
      })
      .to(fp1InfoRef.current || "", { opacity: 1 })
    gsap
      .timeline({
        scrollTrigger: {
          trigger: fp1InfoRef.current || "",
          start: "top bottom-=25%",
          end: "top bottom-=35%",
          scrub: 3,
          toggleActions: "play none none reverse",
        },
        defaults: { duration: 3 },
      })
      .to(fp1InfoRef.current || "", { opacity: 0 })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: fp2InfoRef.current || "",
          start: "bottom bottom",
          end: "bottom bottom-=5%",
          scrub: 3,
          onEnter: () => {
            levelLabelsRef.current?.childNodes.forEach((el: any) =>
              el.classList.remove("active")
            )
            if(levelLabelsRef.current) levelLabelsRef.current.children[1].classList.add("active")
            if(fpImg1Ref.current) fpImg1Ref.current.style.opacity = "0"
            if(fpImg2Ref.current) fpImg2Ref.current.style.opacity = "1"
          },
          onEnterBack: () => {
            levelLabelsRef.current?.childNodes.forEach((el: any) =>
              el.classList.remove("active")
            )
            if(levelLabelsRef.current) levelLabelsRef.current.children[1].classList.add("active")
            if(fpImg3Ref.current) fpImg3Ref.current.style.opacity = "0"
            if(fpImg2Ref.current) fpImg2Ref.current.style.opacity = "1"
          },
          toggleActions: "play none none reverse",
        },
        defaults: { duration: 3 },
      })
      .to(fp2InfoRef.current || "", { opacity: 1 })
    gsap
      .timeline({
        scrollTrigger: {
          trigger: fp2InfoRef.current || "",
          start: "top bottom-=25%",
          end: "top bottom-=35%",
          scrub: 3,
          toggleActions: "play none none reverse",
        },
        defaults: { duration: 3 },
      })
      .to(fp2InfoRef.current || "", { opacity: 0 })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: fp3InfoRef.current || "",
          start: "bottom bottom",
          end: "bottom bottom-=5%",
          scrub: 3,
          onEnter: () => {
            levelLabelsRef.current?.childNodes.forEach((el: any) =>
              el.classList.remove("active")
            )
            if(levelLabelsRef.current) levelLabelsRef.current.children[2].classList.add("active")
            if(fpImg3Ref.current) fpImg3Ref.current.style.opacity = "1"
            if(fpImg2Ref.current) fpImg2Ref.current.style.opacity = "0"
          },
          onEnterBack: () => {
            levelLabelsRef.current?.childNodes.forEach((el: any) =>
              el.classList.remove("active")
            )
           if(levelLabelsRef.current) levelLabelsRef.current.children[2].classList.add("active")
           if(fpImg3Ref.current) fpImg3Ref.current.style.opacity = "1"
           if(fpImg2Ref.current) fpImg2Ref.current.style.opacity = "0"
          },
          toggleActions: "play none none reverse",
        },
        defaults: { duration: 3 },
      })
      .to(fp3InfoRef.current || "", { opacity: 1 })
    gsap
      .timeline({
        scrollTrigger: {
          trigger: fp3InfoRef.current || "",
          start: "top bottom-=25%",
          end: "top bottom-=35%",
          scrub: 3,
          toggleActions: "play none none reverse",
        },
        defaults: { duration: 3 },
      })
      .to(fp3InfoRef.current || "", { opacity: 0 })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: fp3InfoRef.current || "",
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
          <div className="fp_images_subwrapper">
            <img
              className={"fp_image_thumb"}
              src={FloorPlansData.floorPlan1.img}
              alt="Hines Maple-Terrace Floor-Plan L4"
            />
            <img
              ref={fpImg1Ref}
              className={"fp_image_1"}
              src={FloorPlansData.floorPlan1.img}
              alt="Hines Maple-Terrace Floor-Plan L4"
            />
            <img
              ref={fpImg2Ref}
              className={"fp_image_2"}
              src={FloorPlansData.floorPlan2.img}
              alt="Hines Maple-Terrace Floor-Plan L4"
            />
            <img
              ref={fpImg3Ref}
              className={"fp_image_3"}
              src={FloorPlansData.floorPlan3.img}
              alt="Hines Maple-Terrace Floor-Plan L4"
            />

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
              DOWNLOAD TEST FIT
            </a>
          </div>
          <div className="label label_top">MAPLE AVENUE</div>
          <div className="label label_bottom">SECRET GARDEN</div>
          <div className="level_all">
            <div className="level_labels" ref={levelLabelsRef}>
              <a className={"active"}>Level 4</a>
              <a>Level 5</a>
              <a>Level 6</a>
            </div>
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
        </div>
      </FloorPlanImg>
      <FloorPlan className="panel">
        <FloorPlanInfo ref={fp1InfoRef}>
          {FloorPlansData.floorPlan1.info.map((item, i) => (
            <p className={"caption_t1"} key={`idf-${i}`}>
              {item}
            </p>
          ))}
        </FloorPlanInfo>
      </FloorPlan>
      <FloorPlan className="panel">
        <FloorPlanInfo ref={fp2InfoRef}>
          {FloorPlansData.floorPlan2.info.map((item, i) => (
            <p className={"caption_t1"} key={`ids-${i}`}>
              {item}
            </p>
          ))}
        </FloorPlanInfo>
      </FloorPlan>
      <FloorPlan className="panel">
        <FloorPlanInfo ref={fp3InfoRef}>
          {FloorPlansData.floorPlan3.info.map((item, i) => (
            <p className={"caption_t1"} key={`idt-${i}`}>
              {item}
            </p>
          ))}
        </FloorPlanInfo>
      </FloorPlan>
    </FPWrapper>
  )
}

export default ContentFloorPlans
