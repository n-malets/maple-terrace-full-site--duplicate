import React, { FC, useEffect, useRef, useState } from "react"
import { Context } from "../../context/context"
import { GlobalStyle } from "./index.styled"
import RotateScreen from "../rotate"
import useWindowSize from "../../helpers/windowSize"
import ContactModal from "../contact"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CSSPlugin } from "gsap/CSSPlugin"
import LegalModal from "../legal"
import VideoPreload from "../video-preload"
import Header from "../header"
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, CSSPlugin)
gsap.config({
  nullTargetWarn: false,
})

interface LayoutProps {
  children: any
  location: Location
}

const Layout: FC<LayoutProps> = ({ children, location }) => {
  const { width } = useWindowSize()
  const layoutWrapRef = useRef(null)
  const [openContact, setOpenContact] = useState(false)
  const [openLegal, setOpenLegal] = useState(false)
  const [isMenuDark, setIsMenuDark] = useState(false)
  const [isFirstLoad, setIsFirstLoad] = useState(true)
  if (typeof window === `undefined`) {
    return <></>
  }
  useEffect(() => {
    ScrollTrigger.getById("v-scroll")?.refresh()
<<<<<<< HEAD
  }, [openLegal, openContact, openTeam])
  useEffect(() => {
    window.addEventListener("resize", () => {
=======
  }, [openLegal, openContact])
  useEffect(()=>{
    window.addEventListener('resize', () => {
>>>>>>> a84f0f96dc9ed28ab30f0da7c5c254cbd9fa680b
      ScrollTrigger.getAll().forEach(ST => {
        ST.refresh()
      })
      ScrollTrigger.getById("v-scroll")?.refresh()
    })
    return () => ScrollTrigger.getAll().forEach(ST => ST.refresh())
  }, [])

  useEffect(() => {
<<<<<<< HEAD
    const vSections = gsap.utils.toArray([".panel"])

    vSections.forEach((panel: any) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        scrub: 3,
      })
    })
    ScrollTrigger.create({
      id: "v-scroll",
      preventOverlaps: true,
      snap: {
        snapTo: 1 / (vSections.length - 1),
        duration: 2.5,
        ease: "easeIn",
      },
    })

=======
>>>>>>> a84f0f96dc9ed28ab30f0da7c5c254cbd9fa680b
    Promise.all(
      Array.from(document.images).map(img => {
        if (img.complete) return Promise.resolve(img.naturalHeight !== 0)
        return new Promise(resolve => {
          img.addEventListener("load", () => resolve(true))
          img.addEventListener("error", () => resolve(false))
        })
      })
    ).then(results => {
      if (results.every(res => res)) {
        setTimeout(() => {
          ScrollTrigger.getAll().forEach(ST => ST.refresh())
        }, 600)
        console.log("all images loaded successfully")
      } else {
        console.log("some images failed to load, all finished loading")
      }
    })
    ScrollTrigger.getAll().forEach(ST => {
      ST.refresh()
    })
    // This in case a scroll animation is active while the route is updated
    gsap.killTweensOf(window)
    return () => ScrollTrigger.getAll().forEach(ST => ST.refresh())
  }, [])

  return (
    <Context.Provider
      value={{
        openContact,
        setOpenContact,
        openLegal,
        setOpenLegal,
        isMenuDark,
        setIsMenuDark,
      }}
    >
      <GlobalStyle openLegal={openLegal} />
      {openContact && <ContactModal />}
      {openLegal && <LegalModal />}
      {width > 500 && width < 1024 ? (
        <RotateScreen />
      ) : (
        <>
        {!location.pathname.includes("/team") && <Header location={location} />}
          <div className={"container"} ref={layoutWrapRef}>
            {children}
          </div>
        </>
<<<<<<< HEAD
      )}
      {openTeam && <Team />}
=======
      }
>>>>>>> a84f0f96dc9ed28ab30f0da7c5c254cbd9fa680b
      {isFirstLoad && location.pathname === "/" && (
        <VideoPreload setIsFirstLoad={setIsFirstLoad} />
      )}
    </Context.Provider>
  )
}
export default Layout
