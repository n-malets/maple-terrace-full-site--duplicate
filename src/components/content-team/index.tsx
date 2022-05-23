import React, {FC, useEffect, useRef} from 'react';
import {Wrapper, TeamInfo, TeamImgs, TeamQuotation} from "./index.styled";
import Image from "../image";
import gsap from "gsap";

interface IContentTeam {
  teamData : {
    img1Src: string;
    img1Top: string;
    img1OnTop?: boolean | undefined;
    img1Width: string;
    img1MaxWidth?: string | undefined;
    img2Src: string;
    img2Top: string;
    img2Width: string;
    imgsWidth: string;
    copiesWidth: string;
    subHeading: string,
    heading1: string | React.ReactElement;
    copy: string | React.ReactElement;
    quotation?: boolean | undefined;
  }
}

const ContentTeam:FC<IContentTeam> = ({teamData}) => {
  const wrapperRef = useRef(null);
  const imgLRef = useRef(null);
  const imgRRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(()=>{
    // gsap
    //   .timeline({
    //     scrollTrigger: {
    //       trigger: wrapperRef.current || '',
    //       toggleActions: "play none none reverse",
    //       start: "top bottom-=1%",
    //       end: "top top+=1%",
    //       scrub: 4,
    //       markers: true
    //     },
    //     defaults: { duration: 3 },
    //   })
    //   .fromTo(
    //     imgLRef.current || "",
    //     1,
    //     { opacity: 0, y: 550 },
    //     { opacity: 1, y: 0 },
    //     '0'
    //   )


    // gsap
    //   .timeline({
    //     scrollTrigger: {
    //       trigger: wrapperRef.current || '',
    //       toggleActions: "play none none reverse",
    //       start: "bottom top+=15%",
    //       end: "center bottom-=5%",
    //       scrub: 4
    //     },
    //     defaults: { duration: 3 },
    //   })
    //   .fromTo(
    //     infoRef.current || "",
    //     2,
    //     { opacity: 1, y: 0 },
    //     { opacity: 0, y: 0 },
    //     "0"
    //   )

  }, [])

  return (
    <Wrapper ref={wrapperRef}>
      <TeamImgs imgsWidth={teamData.imgsWidth} img1Top={teamData.img1Top} img2Top={teamData.img2Top} img1Width={teamData.img1Width} img2Width={teamData.img2Width} img1OnTop={teamData.img1OnTop} img1MaxWidth={teamData.img1MaxWidth}>
        <div className="img-tl" ref={imgLRef}>
          <Image imageName={teamData.img1Src}/>
        </div>
        <div className="img-tr" ref={imgRRef}>
          <Image imageName={teamData.img2Src}/>
        </div>
      </TeamImgs>
      <TeamInfo ref={infoRef}>
        <h4 className={'h4'}>{teamData.subHeading}</h4>
        <h2 className={'h1'}>{teamData.heading1}</h2>
        <p className={'copy_t1'}>{teamData.copy}</p>
        {teamData.quotation && (
          <TeamQuotation>
            <h4 className={'h4'}>OUR VISION</h4>
            <p className={'copy_t1'}>“Buildings have to have a personality. And when they have a personality, people want to locate in them because it gives them identity.”</p>
            <span>—GERALD D. HINES, FOUNDER</span>
          </TeamQuotation>
        )}
      </TeamInfo>

    </Wrapper>
  );
};

export default ContentTeam;