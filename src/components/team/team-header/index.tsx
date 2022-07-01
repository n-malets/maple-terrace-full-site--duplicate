import React, {FC, useContext} from 'react';
import MTLogo from "../../../assets/images/main_logo_1.svg"
import close from "../../../assets/images/button_close_w.svg"
import {Context} from "../../../context/context";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import styled from "styled-components";

export const TeamHeader = styled.div`
  position: fixed;
  top: 38px;
  left: 48px;
  width: 93%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 100;
  a {
    cursor: pointer;
  }
`;

const TeamHeaderContent:FC = () => {
  const {setOpenTeam} = useContext(Context)
  return (
    <TeamHeader>
      <img src={MTLogo} alt="Maple Terrace Uptown Dallas"/>
      <img src={close} alt="Close Btn" onClick={() => {
        setOpenTeam(false);
        ScrollTrigger.getById("v-scroll")?.enable();
        ScrollTrigger.getById("v-scroll")?.refresh();
      }}/>
    </TeamHeader>
  );
};

export default TeamHeaderContent;