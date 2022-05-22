import React, {FC, useContext} from 'react';
import {ModalWrapper, HeaderLogo, FooterLogo, ContactInfo} from "./index.styled"
import {Context} from "../../context/context"
import btn_close from "../../assets/images/button_close.svg"
import MTLogo from "../../assets/images/main_logo_1_dark.svg"
import HLogo from "../../assets/images/logo_hines.svg"
import CWLogo from "../../assets/images/logo_cushman_wakefield.svg"

const ContactModal:FC = () => {
  const {openContact ,setOpenContact} = useContext(Context);
  return (
    <ModalWrapper >
      <HeaderLogo>
        <img src={MTLogo} alt="Maple Terrace Uptown Dallas"/>
        <img src={btn_close} alt="Close button" onClick={() => setOpenContact(false)}/>
      </HeaderLogo>

      <ContactInfo>

      </ContactInfo>

      <FooterLogo>
        <img src={HLogo} alt="Hines"/>
        <img src={CWLogo} alt="Cushman Wakefield"/>
      </FooterLogo>
    </ModalWrapper>
  );
};

export default ContactModal;