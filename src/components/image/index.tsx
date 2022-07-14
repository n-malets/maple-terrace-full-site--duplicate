import React, { FC } from "react";
import { ImageWrapper } from "./index.styled";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";


interface IImageProps {
  imageName: string;
  altText?: string;
  padding?: string;
}

const Image: FC<IImageProps> = ({ imageName, altText, padding }) => {
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
    <ImageWrapper padding={padding}>
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
