import React, {FC, useContext} from 'react';
import {ModalWrapper, HeaderLogo, FooterLogo, ContactInfo,ContactTitle, ContactItems} from "./index.styled"
import {Context} from "../../context/context"
import btn_close from "../../assets/images/button_close.svg"
import MTLogo from "../../assets/images/main_logo_1_dark.svg"
import HLogo from "../../assets/images/logo_hines.svg"
import CWLogo from "../../assets/images/logo_cushman_wakefield.svg"

const ContactModal:FC = () => {
  const {openContact ,setOpenContact, setOpenLegal} = useContext(Context);

  return (
    <ModalWrapper className={'fade'}>
      <HeaderLogo>
        <img src={MTLogo} alt="Maple Terrace Uptown Dallas"/>
        <img src={btn_close} alt="Close button" onClick={() => setOpenContact(false)}/>
      </HeaderLogo>

      <ContactInfo>
        <ContactTitle>
          <h2 className={'h1'}>We'll keep the</h2>
          <h2 className={'h1i'}>door open for you.</h2>
        </ContactTitle>
        <ContactItems>
          <div className="contact-item">
            <h4 className="h4">Matt Schendle</h4>
            <a href="mailto:matt.schendle@cushwake.com">matt.schendle@cushwake.com</a>
            <a href="tel:+19726639634">1.972.663.9634</a>
          </div>
          <div className="contact-item">
            <h4 className="h4">CARRIE HALBROOKS</h4>
            <a href="mailto:carrie.halbrooks@cushwake.com">carrie.halbrooks@cushwake.com</a>
            <a href="tel:+19726639887">1.972.663.9887</a>
          </div>
          <div className="contact-item">
            <a className={'tt-link'} href="mailto:INFO@MAPLETERRACEOFFICES.COM">INFO@MAPLETERRACEOFFICES.COM</a>
            <span className={'tt-link'} onClick={()=> {
              setOpenContact(false)
              setOpenLegal(true)
            }}>LEGAL</span>
          </div>
        </ContactItems>
      </ContactInfo>

      <FooterLogo>
        <a href="https://www.hines.com/" target={'_blank'}><img src={HLogo} alt="Hines"/></a>
        <a href="https://www.cushmanwakefield.com/"><img src={CWLogo} alt="Cushman Wakefield"/></a>
      </FooterLogo>
    </ModalWrapper>
  );
};

export default ContactModal;