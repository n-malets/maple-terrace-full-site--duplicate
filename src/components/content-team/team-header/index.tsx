import React, {FC, useContext} from 'react';
import {TeamHeader} from "../index.styled";
import MTLogo from "../../../assets/images/main_logo_1.svg"
import close from "../../../assets/images/button_close_w.svg"
import {Context} from "../../../context/context";
import {ScrollTrigger} from "gsap/ScrollTrigger";


const TeamHeaderContent:FC = () => {
  const {setOpenTeam} = useContext(Context)
  return (
    <TeamHeader>
      <img src={MTLogo} alt="Maple Terrace Uptown Dallas"/>
      <img src={close} alt="Close Btn" onClick={() => {
        setOpenTeam(false);
        ScrollTrigger.getById("h-scroll")?.disable();
        ScrollTrigger.getById("v-scroll")?.enable();
        ScrollTrigger.getById("v-scroll")?.refresh();
      }}/>
    </TeamHeader>
  );
};

export default TeamHeaderContent;