import * as React from "react"
import {teamData} from '../data/team';
import TeamHeaderContent from "../components/content-team/team-header";
import ContentTeam from "../components/content-team";
import {useEffect} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const Team = () => {
  return (
    <>
      <TeamHeaderContent/>
        <div className={"hor-container"}>
          <section className="hor-panel">
            <ContentTeam teamData={teamData.team_1}/>
          </section>
          <section className="hor-panel">
            <ContentTeam teamData={teamData.team_2}/>
          </section>
          <section className="hor-panel">
            <ContentTeam teamData={teamData.team_3}/>
          </section>
          <section className="hor-panel">
            <ContentTeam teamData={teamData.team_4}/>
          </section>
          <section className="hor-panel">
            <ContentTeam teamData={teamData.team_5}/>
          </section>
          <section className="hor-panel">
            <ContentTeam teamData={teamData.team_6}/>
          </section>
          <section className="hor-panel">
            <ContentTeam teamData={teamData.team_7}/>
          </section>
        </div>
    </>
  )
}

export default Team
