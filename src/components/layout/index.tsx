import React, { FC, useEffect, useState } from "react"
import { GlobalStyle, LayoutWrapper } from "./index.styled"
import Header from "../header";
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CSSPlugin } from "gsap/CSSPlugin"
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, CSSPlugin)
gsap.config({
  nullTargetWarn: false,
})

interface LayoutProps {
  children: any
  location: Location
}

const Layout: FC<LayoutProps> = ({ children, location }) => {

  useEffect(()=> {
    const sections = gsap.utils.toArray(".panel");

    gsap.utils.toArray(".panel").forEach((panel: any, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        scrub: true,
      });
    });


    ScrollTrigger.create({
      snap: {
        snapTo: 1 / (sections.length -1),
        duration: 1.5
      }
    });

  //   const sections1 = gsap.utils.toArray(".panel");
  //   const  tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".container",
  //         pin: true,
  //         // pinSpacing: false,
  //         pinType: "fixed",
  //         scrub: 1,
  //         snap: 1 / (sections1.length - 1),
  //         start: "top top",
  //       }
  //     });
  //
  //   tl.to(sections1, {
  //     yPercent: -100 * (sections1.length - 1),
  //     duration: 1,
  //     ease: "none"
  //   });


    // let settingUp = true;
    //
    // gsap.registerPlugin(ScrollTrigger);
    //
    // function goToSection(i: number, anim?: { restart: () => void; } | undefined) {
    //   gsap.to(window, {
    //     scrollTo: {y: i*innerHeight, autoKill: false},
    //     ease: 'easeInOut',
    //     duration: 2
    //   });
    //   if(anim) {
    //     anim.restart();
    //   }
    // }
    //
    // const instances = []
    // const sections = gsap.utils.toArray(".panel2");
    //
    // sections.forEach((panel:any, i) => {
    //   console.log(panel, i)
    //   instances.push(
    //     ScrollTrigger.create({
    //       trigger: panel,
    //       onEnter: () => {
    //         if(!settingUp){
    //           goToSection(i)
    //         }
    //       }
    //     })
    //   );
    //
    //   instances.push(
    //     ScrollTrigger.create({
    //       trigger: panel,
    //       onEnterBack: () => {
    //         if(!settingUp){
    //           goToSection(i)
    //         }
    //       }
    //     })
    //   );
    // });
    //
    // settingUp = false;

  }, [])

  return (
    <>
      <GlobalStyle />
      <Header location={location} />
      <LayoutWrapper className={'container'}>{children}</LayoutWrapper>
    </>
  )
}
export default Layout
