import * as React from "react"
import {quoteData} from "../data/intro";
import ContentQuote from "../components/content-quote";
import ContentIntro from "../components/content-intro";

const NeighborhoodPage = () => {
  return (
    <>
      <section className="panel">
        <ContentIntro imgName={'neighborhood_1.jpg'} />
      </section>
      <section className="panel">
        <ContentQuote quote={quoteData.neighborhood1}/>
      </section>

    </>
  )
}

export default NeighborhoodPage
