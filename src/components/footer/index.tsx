import React, { useContext } from "react"
import { Wrapper, FooterContent } from "./index.styled"
import { Context } from "../../context/context"
import hLogo from "../../assets/images/logo_hines.svg"
import cwLogo from "../../assets/images/logo_cushman_wakefield.svg"
import fMTLogo from "../../assets/images/logo_MT_Emblem.svg"
import iconFB from "../../assets/images/icon_fb.svg"
import iconInsta from "../../assets/images/icon_insta.svg"
import iconTw from "../../assets/images/icon_twitter.svg"
import iconIn from "../../assets/images/icon_in.svg"
const Footer = () => {
  const { setOpenLegal } = useContext(Context)
  return (
    <Wrapper>
      <FooterContent>
        <div className="col">
          <p>
            <span>MAPLE TERRACE</span> <br />
            3001 Maple Ave, Dallas, TX 75201
          </p>
          <div>
            <a href="mailto:info@mapleterraceoffices.com">
              INFO@MAPLETERRACEOFFICES.COM
            </a>
            <a href="tel:19726639634">1.972.663.9634</a>
          </div>
          <div className={"footerLogos"}>
            <a href="https://www.hines.com/" target={"_blank"}>
              <img src={hLogo} alt="Hines" />
            </a>
            <a href="https://www.cushmanwakefield.com/" target={"_blank"}>
              <img src={cwLogo} alt="Cushman & Wakefield" />
            </a>
          </div>
        </div>
        <div className="col">
          <img
            className={"mtLogo"}
            src={fMTLogo}
            alt="Maple Terrace Uptown Dallas"
          />
          <p className={"copyrights"}>©2021 HINES. ALL RIGHTS RESERVED.</p>
        </div>
        <div className="col">
          <div className="socials">
            <a href="#" target={"_blank"}>
              <img src={iconFB} alt="facebook icon" />
            </a>
            <a href="#" target={"_blank"}>
              <img src={iconInsta} alt="instagram icon" />
            </a>
            <a href="#" target={"_blank"}>
              <img src={iconTw} alt="twitter icon" />
            </a>
            <a href="#" target={"_blank"}>
              <img src={iconIn} alt="linkedIn icon" />
            </a>
          </div>
          <span className={"legalBtn"} onClick={() => setOpenLegal(true)}>
            Legal
          </span>
        </div>
      </FooterContent>
    </Wrapper>
  )
}

export default Footer
