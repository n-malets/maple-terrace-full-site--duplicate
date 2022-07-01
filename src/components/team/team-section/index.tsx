import React, { FC, useEffect, useRef } from 'react';
import { Wrapper, TeamInfo, TeamImgs, TeamQuotation, FixedWrapper } from "./index.styled";
import Image from "../../image";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


interface IContentTeam {
    teamData: {
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
    },
    parentRef: any
}

const TeamSection: FC<IContentTeam> = ({teamData, parentRef}) => {
    const wrapperRef = useRef(null);
    const title1 = useRef(null);
    const title2 = useRef(null);
    const description = useRef(null);
    const image1 = useRef(null);
    const image2 = useRef(null);
    const devText = useRef(null);

    useEffect(() => {
        ScrollTrigger.create({
            trigger: wrapperRef?.current || "",
            scroller:parentRef?.current,
            toggleActions: "restart none reverse none",
            start: "center+=10 center",
            scrub:1,
            animation: gsap
                .timeline()
                .addLabel("start2")
                .fromTo(
                    [description?.current, devText?.current] || {},
                    1.2,
                    {x: 0, opacity: 1, },
                    {
                        x: "-70vw",
                        opacity: 0
                    },
                    "start2"
                )
                .fromTo(
                    [title1?.current, title2?.current] || {},
                    1.2,
                    {x: 0, opacity: 1},
                    {
                        x: "-70vw",
                        opacity: 0
                    },
                    "-=1.25"
                )
                .fromTo(
                    image1?.current || {},
                    1.2,
                    {x: 0, opacity: 1, },
                    {
                        x: "-70vw",
                        opacity: 0
                    },
                    "start2"
                )
                .fromTo(
                    image2?.current || {},
                    1.2,
                    {x: 0, opacity: 1, },
                    {
                        x: "-70vw",
                        opacity: 0
                    },
                    "-=1.25"
                )
        });
        ScrollTrigger.create({
            trigger: wrapperRef?.current || "",
            scroller:parentRef?.current,
            start: "+=10 center",
            end: "center-=20 center",
            scrub:1,
            toggleActions: "restart pause none reverse",
            animation: gsap
                .timeline()
                .addLabel("start1")
                .fromTo(
                    [title1?.current, title2?.current] || {},
                    1.2,
                    {x: "70vw", opacity: 0},
                    {
                        x: 0,
                        opacity: 1
                    },
                    "start1"
                )
                .fromTo(
                    [description?.current, devText?.current] || {},
                    1.2,
                    {x: "70vw", opacity: 0, },
                    {
                        x: 0,
                        opacity: 1
                    },
                    "-=1.25"
                )
                .fromTo(
                    image1?.current || {},
                    1.2,
                    {x: "70vw", opacity: 0, },
                    {
                        x: 0,
                        opacity: 1
                    },
                    "start1"
                )
                .fromTo(
                    image2?.current || {},
                    1.2,
                    {x: "70vw", opacity: 0, },
                    {
                        x: 0,
                        opacity: 1
                    },
                    "-=1.25"
                ),
        });
    }, [])

    return (
        <Wrapper ref={wrapperRef}>
            <FixedWrapper>
                <TeamImgs imgsWidth={teamData.imgsWidth} img1Top={teamData.img1Top} img2Top={teamData.img2Top}
                          img1Width={teamData.img1Width} img2Width={teamData.img2Width} img1OnTop={teamData.img1OnTop}
                          img1MaxWidth={teamData.img1MaxWidth}>
                    <div className="img-tl" ref={image1}>
                        <Image imageName={teamData.img1Src}/>
                    </div>
                    <div className="img-tr" ref={image2}>
                        <Image imageName={teamData.img2Src}/>
                    </div>
                </TeamImgs>
                <TeamInfo>
                    <h4 className={'h4'} ref={title1}>{teamData.subHeading}</h4>
                    <h2 className={'h1'} ref={title2}>{teamData.heading1}</h2>
                    <p className={'copy_t1'} ref={description}>{teamData.copy}</p>
                    {teamData.quotation && (
                        <TeamQuotation ref={devText}>
                            <h4 className={'h4'}>OUR VISION</h4>
                            <p className={'copy_t1'}>“Buildings have to have a personality. And when they have a
                                personality, people want to locate in them because it gives them identity.”</p>
                            <span>—GERALD D. HINES, FOUNDER</span>
                        </TeamQuotation>
                    )}
                </TeamInfo>
            </FixedWrapper>
        </Wrapper>
    );
};

export default TeamSection;