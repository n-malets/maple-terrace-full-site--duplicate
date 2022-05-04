import React, {FC, useEffect, useRef} from 'react'
import {Wrapper, Milestones, Items, Heading, TimeLine} from "./index.styled";
import {Certifications} from '../../../data/certifications'
import gsap from "gsap";


const ContentCertifications:FC = () => {
  const wrapperRef = useRef(null);
  const itemsRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const milestoneRef = useRef(null);
  const timelineRef = useRef(null);
  const headingRef = useRef(null);


  useEffect(()=>{
    gsap
      .timeline({
        scrollTrigger: {
          trigger: itemsRef.current || '',
          start: "top bottom-10%",
          end: "top top+=10%",
          scrub: 3,
          toggleActions: "play none none reverse",
        },
        defaults: { duration: 3 },
      })
      .fromTo(
        titleRef.current || "",
        { opacity: 0, y: 160},
        { opacity: 1, y: 0 },
        '-=2'
      )
      .fromTo(
        textRef.current || "",
        { opacity: 0, y: 160 },
        { opacity: 1, y: 0 },
        '-=2'
      )


    gsap
      .timeline({
        scrollTrigger: {
          trigger: milestoneRef.current || '',
          start: "top bottom",
          end: "center-=25% top+=25%",
          markers: true,
          id: "cert",
          toggleActions: "play none none reverse",
          scrub: 4,
        },
        defaults: { duration: 3 },
      })

      .fromTo(
        ".c-line1",
        3,
        { opacity: 1,y: 0 },
        { opacity: 0, y: "-125%" },
        "1"
      )
      .fromTo(
        ".c-line2",
        3,
        { opacity: 1,y: 0 },
        { opacity: 0, y: "125%" },
        "1"
      )
      .fromTo(
        ".tl-line",
        { opacity: 0, left: '100%' },
        { opacity: 1, left: 0 },
        '2'
      )
      .fromTo(
        headingRef.current || "",
        { opacity: 0, x: '140%' },
        { opacity: 1, x: 0 },
        '2'
      )
      .fromTo(
        timelineRef.current || "",
        { opacity: 0, x: '100%' },
        { opacity: 1, x: 0 },
        '2'
      )

  }, [])

  return (
    <Wrapper ref={wrapperRef}>
      <Items className="panel" ref={itemsRef}>
        <div className="c-line1">
          <h4 className="h4" ref={titleRef}>{Certifications.line1.heading}</h4>
          <img src={Certifications.line1.icon_1} alt="FitWel"/>
          <span/>
          <img src={Certifications.line1.icon_2} alt="True Carbon"/>
        </div>
        <div className="c-line2">
          <p className="copy_t1" ref={textRef}>{Certifications.line2.desc}</p>
          <img src={Certifications.line2.icon_3} alt="Gold Seal"/>
          <img src={Certifications.line2.icon_4} alt="LEED Silver"/>
          <img src={Certifications.line2.icon_5} alt="Well Silver"/>
        </div>
      </Items>

      <Milestones className="panel" ref={milestoneRef}>
        <Heading ref={headingRef}>
          <h3 className={"h3"}>Schedule <span className={"h3i"}>Milestones</span></h3>
        </Heading>
        <TimeLine ref={timelineRef}>
          <div className="tl-line"/>
          {Certifications.timeLine.map(item => (
            <div className="tl-item">
              <h6>{item.title}</h6>
              <p>{item.desc}</p>
            </div>
          ))}
        </TimeLine>
      </Milestones>
    </Wrapper>
  );
};

export default ContentCertifications;