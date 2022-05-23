import * as React from "react"
import {teamData} from '../data/team';
import TeamHeaderContent from "../components/content-team/team-header";
import ContentTeam from "../components/content-team";
import {useEffect} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import styled from "styled-components";

export const TeamWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  z-index: 101;
  background-color: #151515;
`;

const Team = () => {

  useEffect(()=> {
    ScrollTrigger.getById("h-scroll")?.refresh();
    const hSections = gsap.utils.toArray(".h-panel");
    const sectionIncrement = 2.5 / (hSections.length - 1);
    const tl = gsap.timeline({
      scrollTrigger: {
        id: 'h-scroll',
        trigger: ".hor-container",
        pin: true,
        scrub: 1,
        snap: 1 / (hSections.length - 1),
        start: "top top",
        end: "+=5000"
      }
    });

    tl.to(hSections, {
      xPercent: -100 * (hSections.length - 1),
      duration: 1.5,
      ease: 'none'
    });

  }, [])

  return (
    <TeamWrapper>
      <TeamHeaderContent/>
      <div className={"hor-container"}>
        <section className="h-panel">
          <ContentTeam teamData={teamData.team_1}/>
        </section>
        <section className="h-panel">
          <ContentTeam teamData={teamData.team_2}/>
        </section>
        <section className="h-panel">
          <ContentTeam teamData={teamData.team_3}/>
        </section>
        <section className="h-panel">
          <ContentTeam teamData={teamData.team_4}/>
        </section>
        <section className="h-panel">
          <ContentTeam teamData={teamData.team_5}/>
        </section>
        <section className="h-panel">
          <ContentTeam teamData={teamData.team_6}/>
        </section>
        <section className="h-panel">
          <ContentTeam teamData={teamData.team_7}/>
        </section>
      </div>
    </TeamWrapper>
  )
}

export default Team
