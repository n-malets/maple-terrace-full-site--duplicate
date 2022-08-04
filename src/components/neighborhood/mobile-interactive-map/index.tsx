import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import map1 from "../../../assets/images/map/map_1.png"
import map2 from "../../../assets/images/map/map_2.png"
import map3 from "../../../assets/images/map/map_3.png"

import { NeighborhoodMapData } from "../../../data/neighborhood"

import { Content, Wrapper, Img, Marker } from "./index.styled"

const MobileInteractiveMap = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots: any) => (
      <div style={{ bottom: "24px" }}>
        <ul style={{ display: "flex", justifyContent: "center" }}> {dots} </ul>
      </div>
    ),
  }

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <div className="img">
            <Img src={map1} />
            <Content className="slide_1">
              <h3 className="title">{NeighborhoodMapData.map1.title}</h3>
              <h3 className="subtitle">{NeighborhoodMapData.map1.subtitle}</h3>
            </Content>
          </div>
        </div>
        <div>
          <div className="img">
            <Img src={map2} />
            <Content className="slide_2">
              <h4>{NeighborhoodMapData.map2.listTitle}</h4>
              <h3>{NeighborhoodMapData.map2.listText1}</h3>
              <h3>{NeighborhoodMapData.map2.listText2}</h3>
              <h3>{NeighborhoodMapData.map2.listText3}</h3>
            </Content>
          </div>
        </div>
        <div>
          <div className="img">
            <Img src={map3} />
            <Content className="slide_3">
              <h3 className="title">{NeighborhoodMapData.map3.title}</h3>
              <h3 className="subtitle">{NeighborhoodMapData.map3.subtitle}</h3>
              <Marker>
                <span className={"orange"} />
                {NeighborhoodMapData.map3.listText1}
              </Marker>
              <Marker>
                <span className={"blue"} />
                {NeighborhoodMapData.map3.listText2}
              </Marker>
            </Content>
          </div>
        </div>
      </Slider>
    </Wrapper>
  )
}

export default MobileInteractiveMap
