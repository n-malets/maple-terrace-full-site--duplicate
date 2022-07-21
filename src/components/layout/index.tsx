import React, {FC, useEffect, useRef, useState} from "react"
import {Context} from "../../context/context";
import { GlobalStyle, LayoutWrapper } from "./index.styled"
import ContactModal from "../contact";
import Team from "../team";
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CSSPlugin } from "gsap/CSSPlugin"
import LegalModal from "../legal";
import VideoPreload from "../video-preload";
import Header from "../header";
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
    const vSections = gsap.utils.toArray(".panel");

    vSections.forEach((panel: any) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          scrub: 3,
        });
      });
      ScrollTrigger.create({
        id: 'v-scroll',
        preventOverlaps: true,
        snap: {
          snapTo: 1 / (vSections.length - 1),
          duration: 3,
          ease: "easeIn"
        }
      });
    Promise.all(
      Array.from(document.images).map((img) => {
        if (img.complete) return Promise.resolve(img.naturalHeight !== 0);
        return new Promise((resolve) => {
          img.addEventListener("load", () => resolve(true));
          img.addEventListener("error", () => resolve(false));
        });
      })
    ).then((results) => {
      if (results.every((res) => res)) {
        setTimeout(() => {
          ScrollTrigger.getAll().forEach((ST) => ST.refresh());
        }, 600);
        console.log("all images loaded successfully");
      } else {
        console.log("some images failed to load, all finished loading");
      }
    });
    ScrollTrigger.getAll().forEach((ST) => {
      ST.refresh();
    });
    // This in case a scroll animation is active while the route is updated
    gsap.killTweensOf(window);
  }, [])

  return (
    <Context.Provider value={{openContact,setOpenContact,openLegal,setOpenLegal, openTeam, setOpenTeam}}>
      <GlobalStyle />
      {openContact && <ContactModal/>}
      {openLegal && <LegalModal/>}
      <Header location={location} />
      <LayoutWrapper className={'container'} ref={layoutWrapRef}>{children}</LayoutWrapper>
      {openTeam && <Team/>}
      {(isFirstLoad && location.pathname === '/' ) && <VideoPreload setIsFirstLoad={setIsFirstLoad}/>}
    </Context.Provider>
  )
}
export default Layout
