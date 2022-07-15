import * as React from "react"
import {quoteData} from "../data/intro";
import {nextData} from "../data/next";
import {ImgTextData} from "../data/img-text";
import {headText} from "../data/head-text";
import ContentQuote from "../components/content-quote";
import ContentIntro from "../components/content-intro";
import ContentPreload from "../components/building/content-preload"
import ContentGem from "../components/building/content-gem";
import ContentImgText from "../components/content-img-text";
import ContentMaskImage from "../components/content-mask-image";
import ContentHeadingText from "../components/content-heading-text";
import ContentWhy from "../components/building/content-why";
import ContentCertifications from "../components/building/content-certifications";
import ContentNextSection from "../components/content-next";
import Footer from "../components/footer";


const IndexPage = () => {

  return (
    <div className={'relative'}>
      <section className="panel">
        <ContentPreload />
      </section>
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

      <ContentMaskImage imgName={'building_5.jpg'} mask={'building_5_mask.png'} shifted={true}/>

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
      <ContentMaskImage imgName={'building_11.jpg'} mask={'building_11_mask.png'} />
      <section className="panel">
        <ContentWhy />
      </section>
      <section>
        <ContentCertifications />
      </section>
      {/*<ContentFloorPlans />*/}
      <section className={'relative'}>
        <ContentNextSection data={nextData.building}/>
        <Footer />
      </section>
    </div>
  )
}

export default IndexPage
