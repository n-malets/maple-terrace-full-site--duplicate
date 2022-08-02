import React, { FC, useContext, useEffect, useRef } from "react"
import { Link } from "gatsby"
import { FooterNav, HeaderWrap, Logo, Nav } from "./index.styled"
import { Context } from "../../context/context"
import main_logo from "../../assets/images/main_logo_2.svg"
import main_logoDark from "../../assets/images/main_logo_2-dark.svg"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"

interface IHeader {
  location: Location
}

const Header: FC<IHeader> = ({ location }) => {
  const headerLogo = useRef(null)
  const { setOpenContact, setOpenLegal, isMenuDark, setIsMenuDark } = useContext(Context)
  useEffect(() => {

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#preload-wrap",
        toggleActions: "restart none none reverse",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        id: "headerScroll",
      },
    })
    const tl2 = gsap.timeline({
      defaults: {
        duration: 1
      },
      scrollTrigger: {
        trigger: ".hide-logo",
        start: "top top",
        end: "bottom top",
        preventOverlaps: true,
        toggleActions: "restart none none reverse",
        id: "headerScrollRev",
      },
    })
    if (location.pathname === "/") {
      tl1.fromTo(
        headerLogo.current,
        {y: "45vh", transform: "translate(-50%, 45vh) scale(3)", ease: "Power.easeOut"},
        {y: "0", transform: "translateX(-50%) scale(1)", ease: "Power.easeOut"},
      )
      tl2.to(
        headerLogo.current,
        {y: "-18vh", ease: "ease-out"},
      )
    }
    if (location.pathname !== "/") {
      tl2.fromTo(
        headerLogo.current,
        {y: "0",transform: "scale(1) translateX(-50%)", ease: "Power.easeOut"},
        {y: "-18vh", transform: "scale(1) translateX(-50%)", ease: "Power.easeOut"},
      )
    }

    if (location.pathname === "/neighborhood" || location.pathname === "/neighborhood/") {
      setIsMenuDark(true);
    } else {
      setIsMenuDark(false);
    }
    return () => {
      ScrollTrigger.getById('headerScroll')?.kill();
      ScrollTrigger.getById("introScroll")?.refresh();
      ScrollTrigger.getById("headerScrollRev")?.kill();
    }
  }, [location])

  return (
    <HeaderWrap>
      <Nav className={"prim "} id={"hNav"} isMenuDark={isMenuDark}>
        <Link
          activeClassName={'active'}
          to={"/"}
        >
          BUILDING
        </Link>
        <Link
          activeClassName={'active'}
          to={"/neighborhood"}
        >
          NEIGHBORHOOD
        </Link>
        <Link
          activeClassName={'active'}
          to={"/amenities"}
        >
          AMENITIES
        </Link>
      </Nav>
      <Logo
        ref={headerLogo}
        src={isMenuDark ? main_logoDark : main_logo}
        alt={"Maple Terrace Uptown Dallas"}
      />
      <Nav className={"sec"} id={"sNav"} isMenuDark={isMenuDark}>
        <Link
          to={"/team"}
          className={"active"}
        >
          TEAM
        </Link>
        <span onClick={() => setOpenContact(true)} >
          CONTACT
        </span>
      </Nav>
      <FooterNav id={"hFooter"}>
        <h5 onClick={() => setOpenLegal(true)}>LEGAL</h5>
        <p>©2021 Hines</p>
      </FooterNav>
    </HeaderWrap>
  )
}

export default Header
