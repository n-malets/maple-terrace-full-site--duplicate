import React, {FC} from 'react';
import {Wrapper, TeamInfo, TeamImgs, TeamQuotation} from "./index.styled";
import Image from "../image";

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
  return (
    <Wrapper>
      <TeamImgs imgsWidth={teamData.imgsWidth} img1Top={teamData.img1Top} img2Top={teamData.img2Top} img1Width={teamData.img1Width} img2Width={teamData.img2Width} img1OnTop={teamData.img1OnTop} img1MaxWidth={teamData.img1MaxWidth}>
        <div className="img-tl">
          <Image imageName={teamData.img1Src}/>
        </div>
        <div className="img-tr">
          <Image imageName={teamData.img2Src}/>
        </div>
      </TeamImgs>
      <TeamInfo>
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