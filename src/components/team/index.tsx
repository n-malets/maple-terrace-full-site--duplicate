import * as React from "react"
import { teamData } from "../../data/team"
import TeamHeaderContent from "./team-header"
import TeamSection from "./team-section"
import { useEffect, useRef } from "react"
import gsap, { Linear } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styled from "styled-components"

export const TeamWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: #151515;
  overflow-y: auto;
`
export const TeamSectionsContainer = styled.div`
  width: 100%;
`
export const TeamSectionWrapper = styled.section`
  width: 100%;
  height: 100vh;
  pointer-events: none;
`

const Team = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const pages = useRef<HTMLElement[]>([])
  const goToPage = (section: HTMLElement) => {
    gsap.timeline().to(wrapperRef.current, {
      scrollTo: { y: section },
      duration: 2,
      ease: Linear.easeNone,
    })
  }

  useEffect(() => {
    document.body.style.overflow = "hidden"
    pages.current.forEach((page: HTMLElement) => {
      ScrollTrigger.create({
        trigger: page,
        scroller: wrapperRef.current,
        onEnter: () => goToPage(page),
        onEnterBack: () => goToPage(page),
        preventOverlaps: true,
      })
    })
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  const addPageToRefs = (el: HTMLElement) => {
    if (el && !pages.current.includes(el)) {
      pages.current.push(el)
    }
  }

  return (
    <TeamWrapper ref={wrapperRef}>
      <TeamHeaderContent />
      <TeamSectionsContainer ref={containerRef}>
        <TeamSectionWrapper className="h-panel page" ref={addPageToRefs}>
          <TeamSection teamData={teamData.team_1} parentRef={wrapperRef} />
        </TeamSectionWrapper>
        <TeamSectionWrapper className="h-panel page" ref={addPageToRefs}>
          <TeamSection teamData={teamData.team_2} parentRef={wrapperRef} />
        </TeamSectionWrapper>
        <TeamSectionWrapper className="h-panel page" ref={addPageToRefs}>
          <TeamSection teamData={teamData.team_3} parentRef={wrapperRef} />
        </TeamSectionWrapper>
        <TeamSectionWrapper className="h-panel page" ref={addPageToRefs}>
          <TeamSection teamData={teamData.team_4} parentRef={wrapperRef} />
        </TeamSectionWrapper>
        <TeamSectionWrapper className="h-panel page" ref={addPageToRefs}>
          <TeamSection teamData={teamData.team_5} parentRef={wrapperRef} />
        </TeamSectionWrapper>
        <TeamSectionWrapper className="h-panel page" ref={addPageToRefs}>
          <TeamSection teamData={teamData.team_6} parentRef={wrapperRef} />
        </TeamSectionWrapper>
        <TeamSectionWrapper className="h-panel page" ref={addPageToRefs}>
          <TeamSection teamData={teamData.team_7} parentRef={wrapperRef} />
        </TeamSectionWrapper>
      </TeamSectionsContainer>
    </TeamWrapper>
  )
}

export default Team
