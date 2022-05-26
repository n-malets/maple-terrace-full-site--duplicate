import React, {FC, useEffect, useRef, useState} from "react"
import {Context} from "../../context/context";
import { GlobalStyle, LayoutWrapper } from "./index.styled"
import Header from "../header";
import ContactModal from "../contact";
import Team from "../../pages/team";
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CSSPlugin } from "gsap/CSSPlugin"
import LegalModal from "../legal";
import VideoPreload from "../video-preload";
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, CSSPlugin)
gsap.config({
  nullTargetWarn: false,
})

interface LayoutProps {
  children: any
  location: Location
}

const Layout: FC<LayoutProps> = ({ children, location }) => {
  const layoutWrapRef = useRef(null);
  const [openContact, setOpenContact] = useState(false);
  const [openLegal, setOpenLegal] = useState(false);
  const [openTeam, setOpenTeam] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(()=> {
    ScrollTrigger.getById("v-scroll")?.refresh();
  },[openLegal, openContact, openTeam])
  useEffect(()=> {
    ScrollTrigger.getById("h-scroll")?.disable();
    ScrollTrigger.getById("v-scroll")?.refresh();
    const vSections = gsap.utils.toArray(".panel");

    vSections.forEach((panel: any, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          scrub: 3,
        });
      });
      ScrollTrigger.create({
        id: 'v-scroll',
        snap: {
          snapTo: 1 / (vSections.length - 1),
          duration: 2.5,
          ease: 'easeOut'
        }
      });
  }, [])

  return (
    <Context.Provider value={{openContact,setOpenContact,openLegal,setOpenLegal, openTeam, setOpenTeam}}>
      <GlobalStyle />
      {(isFirstLoad && location.pathname === '/' ) && <VideoPreload setIsFirstLoad={setIsFirstLoad}/>}
      {openContact && <ContactModal/>}
      {openLegal && <LegalModal/>}
      {openTeam && <Team/>}
      {location.pathname !== '/team' && <Header location={location} />}
      <LayoutWrapper className={'container'} ref={layoutWrapRef}>{children}</LayoutWrapper>
    </Context.Provider>
  )
}
export default Layout
