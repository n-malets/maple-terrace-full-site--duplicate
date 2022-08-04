import React, {useEffect} from "react";

import { quoteData } from "../data/intro"
import ContentQuote from "../components/content-quote"
import ContentIntro from "../components/content-intro"
import ContentNextSection from "../components/content-next"
import { nextData } from "../data/next"
import ContentImgText from "../components/content-img-text"
import { ImgTextData } from "../data/img-text"
import ContentSpaces from "../components/amenities/content-spaces"
import { spacesData } from "../data/spaces"
import Footer from "../components/footer"
import ContentSlider from "../components/content-slider"
import { withinWalkData } from "../data/sliders"
import { headText } from "../data/head-text"
import InteractiveMap from "../components/neighborhood/interactive-map";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import ContentHeadingTextImage from "../components/content-heading-text-image";

const NeighborhoodPage = () => {

  useEffect(()=> {
    const vSections = gsap.utils.toArray(".panel")

    vSections.forEach((panel: any) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
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
  }, []);
  return (
    <>
      <section className="panel">
        <ContentIntro imgName={"neighborhood_1.jpg"} objPosition={'center 35% !important'} />
      </section>
      <section className="panel">
        <ContentQuote quote={quoteData.neighborhood1} />
      </section>
      <section className={"panel"}>
        <ContentImgText data={ImgTextData.neighborhood1} letterSpacing={'0'} />
      </section>
      <section className="panel">
        <ContentSpaces spaces={spacesData.neighborhood1} />
      </section>
      <section className="panel">
        <ContentIntro imgName={"neighborhood_5.jpg"} />
      </section>
      <ContentSlider
        data={withinWalkData.slides}
        title={withinWalkData.title}
      />
      <section className="panel">
        <ContentHeadingTextImage
          heading={headText.neighborhood.heading}
          text={headText.neighborhood.text}
          image={"neighborhood_6.jpg"}
        />
      </section>
      <InteractiveMap/>
      <section className={"relative"}>
        <ContentNextSection data={nextData.neighborhood} prevBtn={true}/>
        <Footer />
      </section>
    </>
  )
}

export default NeighborhoodPage
