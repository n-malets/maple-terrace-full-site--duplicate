import React from "react"

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
import ContentPartners from "../components/content-partners"
import { partners } from "../data/partners"
import InteractiveMap from "../components/neighborhood/interactive-map"
import MobileContentHeadingText from "../components/content-heading-text/mobile"
import MobileInteractiveMap from "../components/neighborhood/mobile-interactive-map"

const NeighborhoodPage = () => {
  return (
    <>
      <section className="panel">
        <ContentIntro mobileFullScreen imgName={"neighborhood_1.jpg"} />
      </section>
      <section className="panel">
        <ContentQuote quote={quoteData.neighborhood1} />
      </section>
      <section className={"panel"}>
        <ContentImgText data={ImgTextData.neighborhood1} letterSpacing={"0"} />
      </section>
      <section className="panel">
        <ContentSpaces spaces={spacesData.neighborhood1} />
      </section>
      <section className="panel">
        <ContentIntro imgName={"neighborhood_5.jpg"} />
      </section>
      <section className="within-walk panel">
        <ContentSlider
          data={withinWalkData.slides}
          title={withinWalkData.title}
        />
      </section>
      <section className="panel">
        {window.screen.width > 576 ? (
          <ContentHeadingText
            heading={headText.neighborhood.heading}
            text={headText.neighborhood.text}
            image={"neighborhood_6.jpg"}
          />
        ) : (
          <MobileContentHeadingText
            heading={headText.neighborhood.heading}
            text={headText.neighborhood.text}
            image={"neighborhood_6.jpg"}
          />
        )}
      </section>
      {window.screen.width > 576 ? (
        <InteractiveMap />
      ) : (
        <MobileInteractiveMap />
      )}
      <section className="panel">
        <ContentPartners items={partners} />
      </section>
      <section className={"panel relative"}>
        <ContentNextSection data={nextData.neighborhood} prevBtn={true} />
        <Footer />
      </section>
    </>
  )
}

export default NeighborhoodPage
