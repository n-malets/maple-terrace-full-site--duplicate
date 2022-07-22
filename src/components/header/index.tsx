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
  const { setOpenContact, setOpenTeam, setOpenLegal } = useContext(Context)
  useEffect(() => {
    ScrollTrigger.getById("introScroll")?.refresh()
    ScrollTrigger.getById("headerScroll")?.refresh()
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
        scrollTrigger: {
          trigger: ".hide-logo",
          start: "bottom top+=40%",
          end: "bottom top",
          preventOverlaps: true,
          toggleActions: "restart none none reverse",
          scrub: 1,
        },
      })
      tl2.fromTo(
        headerLogo.current,
        {top: "4.5vh", transform: "translate(-50%, 0) scale(1)", ease: "ease-out"},
        {top: "-15vh", transform: "translate(-50%, 0) scale(1)", ease: "ease-out"},
      )
    if (location.pathname === "/") {
      tl1.fromTo(
        headerLogo.current,
        {top: "50vh", transform: "translate(-50%, -50%) scale(3)", ease: "ease-out"},
        {top: "4.5vh", transform: "translate(-50%, 0) scale(1)", ease: "ease-out"},
      )
    }
    // if (location.pathname === "/neighborhood") {
    //   gsap.to(".dark-color", {color: "black", duration: 1})
    // } else {
    //   gsap.to(".dark-color", {color: "white", duration: 1})
    // }
    return () => {
      tl1?.kill()
    }
  }, [location, location.pathname])

  return (
    <HeaderWrap>
      <Nav className={"prim "} id={"hNav"}>
        <Link activeStyle={{ opacity: 1 }} to={"/"} className={"dark-color"}>
          BUILDING
        </Link>
        <Link
          activeStyle={{ opacity: 1 }}
          to={"/neighborhood"}
          className={"dark-color"}
        >
          NEIGHBORHOOD
        </Link>
        <Link
          activeStyle={{ opacity: 1 }}
          to={"/amenities"}
          className={"dark-color"}
        >
          AMENITIES
        </Link>
      </Nav>
      <Logo
        ref={headerLogo}
        src={location.pathname === "/neighborhood" ? main_logoDark : main_logo}
        alt={"Maple Terrace Uptown Dallas"}
      />
      <Nav className={"sec"} id={"sNav"}>
        <span onClick={() => setOpenTeam(true)} className={"dark-color"}>
          TEAM
        </span>
        <span onClick={() => setOpenContact(true)} className={"dark-color"}>
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
