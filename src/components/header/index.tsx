import React, {FC, useContext, useEffect} from 'react'
import {Link} from "gatsby"
import {FooterNav, HeaderWrap, Logo, Nav} from "./index.styled"
import {Context} from "../../context/context";
import main_logo from "../../assets/images/main_logo_2.svg"
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";

interface IHeader {
  location: Location
}

const Header:FC<IHeader> = ({location}) => {
  const { setOpenContact, setOpenTeam, setOpenLegal } = useContext(Context);
  useEffect(()=>{
    ScrollTrigger.getById("introScroll")?.refresh();
    ScrollTrigger.getById("headerScroll")?.refresh();
    if (location.pathname === "/") {
      ScrollTrigger.create({
        trigger: "#preload-wrap",
        toggleActions: 'play none none reverse',
        start: "bottom bottom",
        end: "bottom top",
        scrub: 3,
        id: "headerScroll",
        animation: gsap
          .timeline()
          .fromTo(
            '#headerLogo',
            {top: "50vh", transform: "translate(-50%, -50%) scale(3)", ease: "ease-out"},
            {top: "4.5vh", transform: "translate(-50%, 0) scale(1)", ease: "ease-out"},
          )
      });
    }
  }, [location])

  return (
    <HeaderWrap>
      <Nav className={'prim'} id={'hNav'}>
        <Link activeStyle={{opacity:1}} to={'/'}>BUILDING</Link>
        <Link activeStyle={{opacity:1}} to={'/neighborhood'}>NEIGHBORHOOD</Link>
        <Link activeStyle={{opacity:1}} to={'/amenities'}>AMENITIES</Link>
      </Nav>
      <Logo src={main_logo} alt={'Maple Terrace Uptown Dallas'} id={'headerLogo'}/>
      <Nav className={'sec'} id={'sNav'}>
        <span onClick={() => setOpenTeam(true)}>TEAM</span>
        <span onClick={() => setOpenContact(true)}>CONTACT</span>
      </Nav>
      <FooterNav id={"hFooter"}>
        <h5 onClick={() => setOpenLegal(true)}>LEGAL</h5>
        <p>©2021 Hines</p>
      </FooterNav>
    </HeaderWrap>
  );
};

export default Header;