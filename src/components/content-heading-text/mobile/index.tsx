import React, { FC, useEffect, useRef } from "react"
import { Wrapper, Text, Headings } from "./index.styled"
import gsap from "gsap"
import { sizes } from "../../../helpers/MediaQueries"
import Image from "../../image"

interface IMobileContentHeadingText {
  heading: {
    line1: string
    line2: string
  }
  image: string
  text: string[]
}

const MobileContentHeadingText: FC<IMobileContentHeadingText> = ({
  heading,
  image,
  text,
}) => {
  return (
    <Wrapper>
      <div className="content">
        <Headings>
          <h3 className={"h3"}>{heading.line1}</h3>
          <h3 className={"h3i"}>{heading.line2}</h3>
        </Headings>
        <div className="img">
          <Image imageName={image} />
        </div>
        <Text>
          {text?.map((item, i) => (
            <p className="copy_t1" key={`id-${i}`}>
              {item}
            </p>
          ))}
        </Text>
      </div>
    </Wrapper>
  )
}

export default MobileContentHeadingText
