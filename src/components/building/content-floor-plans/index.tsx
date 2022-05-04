import React, {useEffect, useRef} from 'react';
import {FPWrapper, FloorPlan, FloorPlanImg, FloorPlanInfo} from "./index.styled";
import {FloorPlansData} from '../../../data/floor-plans'
import gsap from "gsap";

const ContentFloorPlans = () => {
  const fp1InfoRef = useRef(null);
  const fp2InfoRef = useRef(null);
  const fp3InfoRef = useRef(null);
  useEffect(()=> {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: fp1InfoRef.current || '',
          start: "top bottom+=10%",
          end: "top top+=10%",
          scrub: 3,
          toggleActions: "play none none reverse",
        },
        defaults: {duration: 3},
      })
      .fromTo(
        fp1InfoRef.current || "",
        {opacity: 0 },
        {opacity: 1 },
        '-=2'
      )

  },[])

  return (
    <FPWrapper>
      <FloorPlanImg>
        <div className={"fp_images_wrapper"}>
          <img className={'fp_image_thumb'} src={FloorPlansData.floorPlan1.img} alt="Hines Maple-Terrace Floor-Plan L4"/>
          <img className={'fp_image_1'} src={FloorPlansData.floorPlan1.img} alt="Hines Maple-Terrace Floor-Plan L4"/>
          <img className={'fp_image_2'} src={FloorPlansData.floorPlan2.img} alt="Hines Maple-Terrace Floor-Plan L4"/>
          <img className={'fp_image_3'} src={FloorPlansData.floorPlan3.img} alt="Hines Maple-Terrace Floor-Plan L4"/>
          <div className="label label_top">MAPLE AVENUE</div>
          <div className="label label_right">WOLF STREET</div>
          <div className="label label_bottom">SECRET GARDEN</div>
          <div className="level_labels">
            <a className={'active'}>Level 4</a>
            <a>Level 5</a>
            <a>Level 6</a>
          </div>
          <a href={"#"} className="download_fit">
            <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 5.64829H2.58621V0H6.36207V5.68966H8.79311L4.38622 10.7793L0 5.64829Z" fill="white"/>
              <path d="M8.82422 12V11.369H7.53403e-05V12H8.82422Z" fill="white"/>
            </svg>
            DOWNLOAD TEST FIT</a>
          <a href={"#"} className="download_All">
            <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 5.64829H2.58621V0H6.36207V5.68966H8.79311L4.38622 10.7793L0 5.64829Z" fill="white"/>
              <path d="M8.82422 12V11.369H7.53403e-05V12H8.82422Z" fill="white"/>
            </svg>
            DOWNLOAD ALL</a>
        </div>
      </FloorPlanImg>
      <FloorPlan className="panel">
        <FloorPlanInfo ref={fp1InfoRef}>
          {FloorPlansData.floorPlan1.info.map((item, i) => (
            <p className={'caption_t1'} key={`idf-${i}`}>{ item }</p>
          ))}
        </FloorPlanInfo>
      </FloorPlan>
      <FloorPlan className="panel">
        <FloorPlanInfo ref={fp2InfoRef}>
          {FloorPlansData.floorPlan2.info.map((item, i) => (
            <p className={'caption_t1'} key={`ids-${i}`}>{ item }</p>
          ))}
        </FloorPlanInfo>
      </FloorPlan>
      <FloorPlan className="panel">
        <FloorPlanInfo ref={fp3InfoRef}>
          {FloorPlansData.floorPlan3.info.map((item, i) => (
            <p className={'caption_t1'} key={`idt-${i}`}>{ item }</p>
          ))}
        </FloorPlanInfo>
      </FloorPlan>
    </FPWrapper>
  );
};

export default ContentFloorPlans;