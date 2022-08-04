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
import { AmenitiesWrapper } from "../components/amenities/index.styled"
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const AmenitiesPage = () => {
  const { setIsMenuDark } = useContext(Context);

  useEffect(()=> {
    setIsMenuDark(false)
  });

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
      <AmenitiesWrapper className={"relative"}>
          <section className="panel">
            <div className="topContrast" />
            <ContentIntro imgName={'amenities_1.jpg'} objPosition={'center 100% !important'} />
          </section>
          <section className="panel">
            <ContentQuote quote={quoteData.amenities1}/>
          </section>
          <section className="panel relative">
            <ContentImageZoomed imageName={'amenities_2.jpg'} />
          </section>
          <section className="panel">
            <ContentHeadingText heading={headText.amenities1.heading} text={headText.amenities1.text} textWidth={'425px'} textHeight={'27px'} />
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
          <section className="relative">
            <ContentMaskImage imgName={'amenities_10.jpg'} mask={'amenities_10_mask.png'} maskMove={true} />
          </section>
          <section className="panel">
            <ContentQuote quote={quoteData.amenities2}/>
          </section>
          <section className="panel">
            <ContentImageZoomed imageName={'amenities_11.jpg'} />
          </section>
          <section className="panel">
            <ContentHeadingText heading={headText.amenities2.heading} text={headText.amenities2.text} textWidth={'445px'} textHeight={'27px'} />
          </section>
          <section className={'panel amenities1-block'}>
            <ContentImgText data={ImgTextData.amenities1} letterSpacing={'0'} />
          </section>
          <section className={'panel'}>
            <ContentImgText data={ImgTextData.amenities2} letterSpacing={'0'} imgMaxWidth={'50%'} />
          </section>
          <section className={'panel'}>
            <ContentImgText data={ImgTextData.amenities3} letterSpacing={'0'}/>
          </section>
          <section className="panel">
            <ContentImageZoomed imageName={'amenities_15.jpg'} />
          </section>
        <section className="panel">
          <ContentHeadingText
            heading={headText.amenities3.heading}
            text={headText.amenities2.text}
            textWidth={'300px'}
            textHeight={'27px'}
          />
        </section>
        <section>
          <ContentFloorPlansAm />
        </section>
        <section className={"relative"}>
          <ContentAmNext quote={quoteData.amenities3} />
          <Footer />
        </section>
      </AmenitiesWrapper>
  )
}

export default AmenitiesPage
