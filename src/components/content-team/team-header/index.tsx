import React, {FC} from 'react';
import {Link} from "gatsby";
import {TeamHeader} from "../index.styled";
import MTLogo from "../../../assets/images/main_logo_1.svg"
import close from "../../../assets/images/button_close_w.svg"


const TeamHeaderContent:FC = () => {
  return (
    <TeamHeader>
      <img src={MTLogo} alt="Maple Terrace Uptown Dallas"/>
      <Link to={'/'}><img src={close} alt="Close Btn"/></Link>
    </TeamHeader>
  );
};

export default TeamHeaderContent;