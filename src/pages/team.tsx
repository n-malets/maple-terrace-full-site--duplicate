import * as React from "react"
import { useEffect, useRef } from "react"
import gsap, { Linear } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styled, {createGlobalStyle} from "styled-components"
import { teamData } from "../data/team"
import TeamHeaderContent from "../components/team/team-header"
import TeamSection from "../components/team/team-section"

export const TeamSectionsContainer = styled.div`
  height: 100vh;
  display: inline-flex;
  background-color: #151515;
  overflow-y: hidden;
  overflow-x: scroll;
  width: 100vw;
`
export const TeamSectionWrapper = styled.section`
  height: 100vh;
  min-width: 100vw;
`

const TeamPageStyle = createGlobalStyle`
  html, body {
    overflow: hidden;
  }
  *::-webkit-scrollbar {
    width: 5px;
    height: 10px;
    border-radius: 36px;
  }
  *::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.25);
    border-radius: 36px;
  }
  *::-webkit-scrollbar-thumb {
    background-color: white;
    outline: none;
    border-radius: 36px;
    border: 2px solid transparent;
    background-clip: content-box;
  }
`

const TeamPage = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const pages = useRef<HTMLElement[]>([])
  const goToPage = (section: HTMLElement) => {
    gsap.timeline().to(containerRef.current, {
      scrollTo: { x: section },
      duration: 2,
      ease: Linear.easeNone,
    })
  }

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    const scrollTriggersArray: any = []
    pages.current.forEach((page: HTMLElement) => {
      scrollTriggersArray[scrollTriggersArray.length] = ScrollTrigger.create({
        trigger: page,
        horizontal: true,
        scroller: containerRef.current,
        onEnter: () => goToPage(page),
        onEnterBack: () => goToPage(page),
        preventOverlaps: true,
      })
    })
    return ()=>{
      document.body.style.overflowY = "auto";
      document.body.style.overflowX = "hidden";
      scrollTriggersArray.forEach((el: any) => el.kill())
    }
  }, [])

  const addPageToRefs = (el: HTMLElement) => {
    if (el && !pages.current.includes(el)) {
      pages.current.push(el)
    }
  }

  useEffect(() => {
    const scrollPage = (event: WheelEvent) => {
      event.preventDefault();
      if (event.deltaX !== 0 && Math.abs(event.deltaY) < 2) {
        containerRef.current!.scrollLeft += Number(event.deltaX);
      } else {
        containerRef.current!.scrollLeft += Number(event.deltaY);
      }
    };
    const scrollPageOnKey = (e: KeyboardEvent) => {
      if (e.keyCode === 39 || e.keyCode === 40) {
        containerRef.current!.scrollLeft += 100
      }
      if (e.keyCode === 38 || e.keyCode === 47) {
        containerRef.current!.scrollLeft -= 100
      }
    }
    document.addEventListener('keydown', scrollPageOnKey);
    document.addEventListener('wheel', scrollPage, { passive: false });
    return () => {
      document.removeEventListener('wheel', scrollPage);
      document.removeEventListener('keydown', scrollPageOnKey);
    }
  }, []);

  return (
    <>
      <TeamPageStyle/>
      <TeamHeaderContent />
      <TeamSectionsContainer ref={containerRef}>
        <TeamSectionWrapper className="h-panel page" ref={addPageToRefs}>
          <TeamSection teamData={teamData.team_1}  parentRef={containerRef}/>
        </TeamSectionWrapper>
        <TeamSectionWrapper className="h-panel page" ref={addPageToRefs}>
          <TeamSection teamData={teamData.team_2}  parentRef={containerRef}/>
        </TeamSectionWrapper>
        <TeamSectionWrapper className="h-panel page" ref={addPageToRefs}>
          <TeamSection teamData={teamData.team_3}  parentRef={containerRef}/>
        </TeamSectionWrapper>
        <TeamSectionWrapper className="h-panel page" ref={addPageToRefs}>
          <TeamSection teamData={teamData.team_4}  parentRef={containerRef}/>
        </TeamSectionWrapper>
        <TeamSectionWrapper className="h-panel page" ref={addPageToRefs}>
          <TeamSection teamData={teamData.team_5}  parentRef={containerRef}/>
        </TeamSectionWrapper>
        <TeamSectionWrapper className="h-panel page" ref={addPageToRefs}>
          <TeamSection teamData={teamData.team_6}  parentRef={containerRef}/>
        </TeamSectionWrapper>
        <TeamSectionWrapper className="h-panel page" ref={addPageToRefs}>
          <TeamSection teamData={teamData.team_7}  parentRef={containerRef}/>
        </TeamSectionWrapper>
      </TeamSectionsContainer>
    </>
  )
}

export default TeamPage
