import React, {FC} from "react"
import MTLogo from "../../../assets/images/main_logo_1.svg"
import close from "../../../assets/images/button_close_w.svg"
import styled from "styled-components"
import {navigate} from "gatsby";

export const TeamHeader = styled.div`
  position: fixed;
  top: 38px;
  left: 48px;
  width: 93%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 100;

  a,
  img {
    cursor: pointer;
  }
`

const TeamHeaderContent: FC = () => {
  const handleNavigate = () => {
      navigate("/")
  }
  return (
    <TeamHeader>
      <img src={MTLogo} alt="Maple Terrace Uptown Dallas"/>
      <img
        src={close}
        alt="Close Btn"
        onClick={() => navigate("/")}
      />
    </TeamHeader>
  )
}

export default TeamHeaderContent
