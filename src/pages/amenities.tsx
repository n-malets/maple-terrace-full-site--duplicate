import React, {useContext, useEffect} from "react"
import { quoteData } from "../data/intro"
import { spacesData } from "../data/spaces"
import { headText } from "../data/head-text"
import { ImgTextData } from "../data/img-text"
import { Context } from "../context/context";
import ContentIntro from "../components/content-intro"
import ContentQuote from "../components/content-quote"
import ContentHeadingText from "../components/content-heading-text"
import ContentMaskImage from "../components/content-mask-image"
import ContentFloorPlansAm from "../components/amenities/content-floor-plans-am"
import ContentImageZoomed from "../components/content-image-zoomed"
import ContentSpaces from "../components/amenities/content-spaces"
import ContentImgText from "../components/content-img-text"
import Footer from "../components/footer"
import ContentAmNext from "../components/amenities/content-amenities-next"

const AmenitiesPage = () => {
  const { setIsMenuDark } = useContext(Context);

  useEffect(()=> {
    setIsMenuDark(false)
  });
  return (
    <>
      <div className={"relative"}>
          <section className="panel">
            <div className="topContrast" />
            <ContentIntro imgName={'amenities_1.jpg'} />
          </section>
          <section className="panel">
            <ContentQuote quote={quoteData.amenities1}/>
          </section>
          <section className="panel relative">
            <ContentImageZoomed imageName={'amenities_2.jpg'} />
          </section>
          <section className="panel">
            <ContentHeadingText heading={headText.amenities1.heading} text={headText.amenities1.text} />
          </section>

          <section className="panel">
            <ContentIntro imgName={'amenities_3.jpg'} />
          </section>

          <section className="panel">
            <ContentSpaces spaces={spacesData.spaces1}/>
          </section>
          <section className="panel">
            <ContentSpaces spaces={spacesData.spaces2}/>
          </section>
          <section className="panel">
            <ContentSpaces spaces={spacesData.spaces3}/>
          </section>
          <ContentMaskImage imgName={'amenities_10.jpg'} mask={'amenities_10_mask.png'} />
          <section className="panel">
            <ContentQuote quote={quoteData.amenities2}/>
          </section>
          <section className="panel">
            <ContentImageZoomed imageName={'amenities_11.jpg'} />
          </section>
          <section className="panel">
            <ContentHeadingText heading={headText.amenities2.heading} text={headText.amenities2.text} />
          </section>
          <section className={'panel'}>
            <ContentImgText data={ImgTextData.amenities1}/>
          </section>
          <section className={'panel'}>
            <ContentImgText data={ImgTextData.amenities2}/>
          </section>
          <section className={'panel'}>
            <ContentImgText data={ImgTextData.amenities3}/>
          </section>
          <section className="panel">
            <ContentImageZoomed imageName={'amenities_15.jpg'} />
          </section>
        <section className="panel">
          <ContentHeadingText
            heading={headText.amenities3.heading}
            text={headText.amenities2.text}
          />
        </section>
        <section>
          <ContentFloorPlansAm />
        </section>
        <section className={"relative"}>
          <ContentAmNext quote={quoteData.amenities3} />
          <Footer />
        </section>
      </div>
    </>
  )
}

export default AmenitiesPage
