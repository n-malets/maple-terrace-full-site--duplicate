import React from "react";

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
import ContentHeadingText from "../components/content-heading-text"
import { headText } from "../data/head-text"
import InteractiveMap from "../components/neighborhood/interactive-map";

const NeighborhoodPage = () => {

  return (
    <>
      <section className="panel">
        <ContentIntro imgName={"neighborhood_1.jpg"} />
      </section>
      <section className="panel">
        <ContentQuote quote={quoteData.neighborhood1} />
      </section>
      <section className={"panel"}>
        <ContentImgText data={ImgTextData.neighborhood1} />
      </section>
      <section className="panel">
        <ContentSpaces spaces={spacesData.neighborhood1} />
      </section>
      <section className="panel">
        <ContentIntro imgName={"neighborhood_5.jpg"} />
      </section>
      {/*<section className="panel within-walk">*/}
      {/*  <ContentSlider*/}
      {/*    data={withinWalkData.slides}*/}
      {/*    title={withinWalkData.title}*/}
      {/*  />*/}
      {/*</section>*/}
      <section className="panel">
        <ContentHeadingText
          heading={headText.neighborhood.heading}
          text={headText.neighborhood.text}
        />
      </section>
      <section className="panel">
        <ContentIntro imgName={"neighborhood_6.jpg"} />
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
