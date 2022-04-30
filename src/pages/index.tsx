import * as React from "react"
import {quoteData} from "../data/intro";
import {ImgTextData} from "../data/img-text";
import {headText} from "../data/head-text";
import ContentQuote from "../components/content-quote";
import ContentIntro from "../components/content-intro";
import ContentGem from "../components/building/content-gem";
import ContentImgText from "../components/content-img-text";
import ContentMaskImage from "../components/content-mask-image";
import ContentHeadingText from "../components/content-heading-text";


const IndexPage = () => {

  return (
    <div className={'relative'}>
      <section className="panel">
        <ContentIntro imgName={'building_1.jpg'} />
      </section>
      <section className="panel">
        <ContentQuote quote={quoteData.building1}/>
      </section>
      <section className="panel">
        <ContentGem />
      </section>
      <section className="panel">
        <ContentImgText data={ImgTextData.building1} />
      </section>

      <ContentMaskImage imgName={'building_5.jpg'} mask={'building_5_mask.png'} />

      <section className="panel">
        <ContentHeadingText heading={headText.building.heading} text={headText.building.text} />
      </section>
      <section className="panel">
        <ContentQuote quote={quoteData.building2}/>
      </section>
      <ContentMaskImage imgName={'building_7.jpg'} mask={'building_7_mask.png'} />

      <section className="panel">
        <ContentImgText data={ImgTextData.building2} />
      </section>
      <section className="panel">
        <ContentImgText data={ImgTextData.building3} />
      </section>
      <section className="panel">
        <ContentImgText data={ImgTextData.building4} />
      </section>

      <section className="panel">
        <ContentGem />
      </section>
    </div>
  )
}

export default IndexPage
