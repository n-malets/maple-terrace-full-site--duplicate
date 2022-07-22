import * as React from "react"
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
      <section className={"relative"}>
        <ContentNextSection data={nextData.neighborhood} />
        <Footer />
      </section>
    </>
  )
}

export default NeighborhoodPage
