import React, { FC, useEffect, useRef } from "react";
import { ImageWrapper } from "./index.styled";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

interface IImageProps {
  imageName: string;
  altText?: string;
  padding?: string;
}

const Image: FC<IImageProps> = ({ imageName, altText, padding }) => {
  const ContentWrapRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ContentWrapRef?.current || "",
      toggleActions: "play none none reverse",
      start: "top+=25% bottom",
      animation: gsap
        .timeline()
        .fromTo(
          ContentWrapRef?.current || null,
          2,
          { opacity: 0 },
          { opacity: 1},
          "+=.1"
        ),
    });
  }, []);

  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <ImageWrapper padding={padding}  ref={ContentWrapRef}>
      <GatsbyImage
        image={
          data.allImageSharp.nodes.find(
            (element: any) =>
              element.gatsbyImageData.images.fallback.src.split("/").pop() ===
              imageName
          ).gatsbyImageData
        }
        alt={altText || "Maple Terrace Uptown Dallas"}
        loading={"eager"}
      />
    </ImageWrapper>
  );
};

export default Image;
