import * as React from "react"
import Image from "../components/image";
import ContentIntro from "../components/content-intro";
import ContentQuote from "../components/content-quote";
import {quoteData} from "../data/intro";
import ContentHeadingText from "../components/content-heading-text";
import {headText} from "../data/head-text";
import ContentMaskImage from "../components/content-mask-image";
import ContentNextSection from "../components/content-next";
import {nextData} from "../data/next";

const AmenitiesPage = () => {
  return (
    <>
      <div className={'relative'}>
        <section className="panel">
          <div className="topContrast" />
          <ContentIntro imgName={'amenities_1.jpg'} />
        </section>
        <section className="panel">
          <ContentQuote quote={quoteData.amenities1}/>
        </section>
        <section className="panel">
          <div className="topContrast" />
          <ContentIntro imgName={'amenities_2.jpg'} />
        </section>
        <section className="panel">
          <ContentHeadingText heading={headText.amenities1.heading} text={headText.amenities1.text} />
        </section>
        <section className="panel">
          <ContentIntro imgName={'amenities_3.jpg'} />
        </section>
        {/*<ContentMaskImage imgName={'amenities_10.jpg'} mask={'amenities_10_mask.png'} />*/}
        <section className="panel">
          <ContentQuote quote={quoteData.amenities2}/>
        </section>
        <section className="panel">
          <ContentIntro imgName={'amenities_11.jpg'} />
        </section>
        <section className="panel">
          <ContentQuote quote={quoteData.amenities3}/>
        </section>
      </div>
    </>
  )
}

export default AmenitiesPage
