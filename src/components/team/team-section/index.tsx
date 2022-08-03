import React, { FC, useEffect, useRef } from "react"
import {
  Wrapper,
  TeamInfo,
  TeamImgs,
  TeamQuotation,
  FixedWrapper,
} from "./index.styled"
import Image from "../../image"
import gsap from "gsap"

interface IContentTeam {
  teamData: {
    img1Src: string
    img1Top: string
    img1OnTop?: boolean | undefined
    img1Width: string
    img1MaxWidth?: string | undefined
    img2Src: string
    img2Top: string
    img2Width: string
    imgsWidth: string
    copiesWidth: string
    subHeading: string
    heading1: string | React.ReactElement
    copy: string | React.ReactElement
    quotation?: boolean | undefined
  }
  parentRef: any
}
gsap.defaults({ overwrite: true })
const TeamSection: FC<IContentTeam> = ({ teamData, parentRef }) => {
  const wrapperRef = useRef(null)
  const title1 = useRef(null)
  const title2 = useRef(null)
  const description = useRef(null)
  const image1 = useRef(null)
  const image1Overlap = useRef(null)
  const image2 = useRef(null)
  const devText = useRef(null)

  useEffect(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef?.current || "",
        scroller: parentRef?.current || "",
        horizontal: true,
        toggleActions: "restart none reverse none",
        start: "center+=10 center",
        scrub: 1,
      },
    })
    tl1
      .to(
        [title1?.current, title2?.current, image1?.current, image2?.current] || "",
        { x: "-10vw", opacity: 0 },
        "0"
      )
      .to(image1Overlap?.current || {}, { width: "100%" }, "0")
      .to(
        [description?.current, devText?.current] || {},
        { opacity: 0 },
        "0"
      )

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef?.current || "",
        scroller: parentRef?.current || "",
        horizontal: true,
        start: "+=10 center",
        end: "center-=10 center",
        scrub: 1,
        toggleActions: "restart none none reverse",
      },
    })
    tl2
      .to(
        [title1?.current, title2?.current, image1?.current, image2?.current] ||
          {},
        { x: 0, opacity: 1 },
        "0"
      )
      .to(image1Overlap?.current || {}, { width: "0" }, "0")
      .to(
        [description?.current, devText?.current] || {},
        { x: 0, opacity: 1 },
        "-=0.4"
      )
  }, [])

  return (
    <Wrapper ref={wrapperRef}>
      <FixedWrapper>
        <TeamImgs
          imgsWidth={teamData.imgsWidth}
          img1Top={teamData.img1Top}
          img2Top={teamData.img2Top}
          img1Width={teamData.img1Width}
          img2Width={teamData.img2Width}
          img1OnTop={teamData.img1OnTop}
          img1MaxWidth={teamData.img1MaxWidth}
        >
          <div className="animation-style img-tl" ref={image1}>
            <Image imageName={teamData.img1Src} />
            {!teamData.img1OnTop && (
              <div className="img-overlap" ref={image1Overlap} />
            )}
          </div>
          <div className="img-tr animation-style" ref={image2}>
            <Image imageName={teamData.img2Src} />
            {teamData.img1OnTop && (
              <div className="img-overlap" ref={image1Overlap} />
            )}
          </div>
        </TeamImgs>
        <TeamInfo>
          <h4 className={"h4 animation-style"} ref={title1}>
            {teamData.subHeading}
          </h4>
          <h2 className={"h1 animation-style"} ref={title2}>
            {teamData.heading1}
          </h2>
          <p className={"copy_t1 animation-style"} ref={description}>
            {teamData.copy}
          </p>
          {teamData.quotation && (
            <TeamQuotation ref={devText} className={"animation-style"}>
              <h4 className={"h4"}>OUR VISION</h4>
              <p className={"copy_t1"}>
                “Buildings have to have a personality. And when they have a
                personality, people want to locate in them because it gives them
                identity.”
              </p>
              <span>—GERALD D. HINES, FOUNDER</span>
            </TeamQuotation>
          )}
        </TeamInfo>
      </FixedWrapper>
    </Wrapper>
  )
}

export default TeamSection
