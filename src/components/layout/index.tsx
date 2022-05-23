import React, { FC, useEffect, useState } from "react"
import {Context} from "../../context/context";
import { GlobalStyle, LayoutWrapper } from "./index.styled"
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import Header from "../header";
import ContactModal from "../contact";
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CSSPlugin } from "gsap/CSSPlugin"
import LegalModal from "../legal";
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, CSSPlugin)
gsap.config({
  nullTargetWarn: false,
})

interface LayoutProps {
  children: any
  location: Location
}

const Layout: FC<LayoutProps> = ({ children, location }) => {
  const [openContact, setOpenContact] = useState(false);
  const [openLegal, setOpenLegal] = useState(false);
  useEffect(()=> {
    if (openContact || openLegal) {
      // @ts-ignore
      disableBodyScroll('body');
    }else {
      clearAllBodyScrollLocks()
    }
  },[openLegal, openContact])
  useEffect(()=> {
    ScrollTrigger.getById("h-scroll")?.disable();
    ScrollTrigger.getById("v-scroll")?.refresh();

    if(location.pathname !== '/team') {
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
    }else {
      ScrollTrigger.getById("v-scroll")?.disable();
      ScrollTrigger.getById("h-scroll")?.refresh();
      const hSections = gsap.utils.toArray(".hor-panel");
      const tl = gsap.timeline({
        scrollTrigger: {
          id: 'h-scroll',
          trigger: ".hor-container",
          pin: true,
          scrub: 1,
          snap: 1 / (hSections.length - 1),
          start: "top top",
          end: "+=5000"
        }
      });

      tl.to(hSections, {
        xPercent: -100 * (hSections.length - 1),
        duration: 2.5,
        ease: 'none'
      });
    }

  }, [location.pathname])

  return (
    <Context.Provider value={{openContact,setOpenContact,openLegal,setOpenLegal}}>
      <GlobalStyle />
      {openContact && <ContactModal/>}
      {openLegal && <LegalModal/>}
      {location.pathname !== '/team' && <Header location={location} />}
      <LayoutWrapper className={'container'}>{children}</LayoutWrapper>
    </Context.Provider>
  )
}
export default Layout
