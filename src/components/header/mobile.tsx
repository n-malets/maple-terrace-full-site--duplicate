import React, { useContext, useState } from "react"
import { Link } from "gatsby"

import logoLight from "../../assets/images/mobile_logo_light.svg"
import logoDark from "../../assets/images/mobile_logo_dark.svg"
import menuClose from "../../assets/images/button_menu_close.svg"
import menuBurgerLight from "../../assets/images/button_menu_light.svg"
import menuBurgerDark from "../../assets/images/button_menu_dark.svg"

import {
  MobileLinks,
  MobileMenu,
  MobileBurger,
  MobileLogo,
  MobileNav,
  MobileWrapper,
  SubLinks,
} from "./mobile.styled"

const HeaderMobile = ({ location }: { location: Location }) => {
  const [isMenuDark, setIsMenuDark] = useState(true)
  const [isLogoVisible, setIsLogoVisible] = useState(true)
  const [isMenuVisible, setIsMenuVisible] = React.useState(false)
  const headerLogo = React.useRef(null)

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsMenuDark(window.pageYOffset + 100 < window.screen.height)
      setIsLogoVisible(window.pageYOffset < window.screen.height)
    })
  }, [])

  return (
    <MobileWrapper>
      <MobileNav>
        <MobileLogo
          isVisible={isLogoVisible}
          ref={headerLogo}
          src={isMenuDark ? logoDark : logoLight}
          alt={"Maple Terrace Uptown Dallas"}
        />
        <MobileBurger
          src={isMenuDark ? menuBurgerDark : menuBurgerLight}
          alt={"Menu"}
          onClick={() => setIsMenuVisible(true)}
        />
      </MobileNav>
      <MobileMenu isVisible={isMenuVisible}>
        <MobileNav>
          <MobileLogo
            ref={headerLogo}
            src={logoLight}
            alt={"Maple Terrace Uptown Dallas"}
            isVisible={true}
          />
          <MobileBurger
            style={{ width: "22px", height: "22px" }}
            src={menuClose}
            alt={"Close menu"}
            onClick={() => setIsMenuVisible(false)}
          />
        </MobileNav>
        <MobileLinks>
          <Link onClick={() => setIsMenuVisible(false)} to={"/"}>
            BUILDING
          </Link>
          <Link onClick={() => setIsMenuVisible(false)} to={"/neighborhood"}>
            NEIGHBORHOOD
          </Link>
          <Link onClick={() => setIsMenuVisible(false)} to={"/amenities"}>
            AMENITIES
          </Link>
        </MobileLinks>
        <SubLinks>
          <div className="flex">
            <Link to={"/legal"}>TEAM</Link>
            <div className="contact">
              <Link to={"/legal"}>CONTACT</Link>
            </div>
          </div>
          <Link to={"/legal"}>LEGAL</Link>
        </SubLinks>
      </MobileMenu>
    </MobileWrapper>
  )
}

export default HeaderMobile
