import React, {FC} from 'react';
import {Wrapper, Text, Headings} from "./index.styled";

interface IContentHeadingText {
  heading: {
    line1: string;
    line2: string;
  };
  text: string[];
}
const ContentHeadingText:FC<IContentHeadingText>= ({heading, text}) => {
  return (
    <Wrapper>
      <div className="content">
        <Headings>
          <h3 className={'h3'}>{heading.line1}</h3>
          <h3 className={'h3i'}>{heading.line2}</h3>
        </Headings>
        <Text>
          {text.map((item, i)=> (
            <p className="copy_t1" key={`id-${i}`}>{item}</p>
          ))}
        </Text>
      </div>
    </Wrapper>
  );
};

export default ContentHeadingText;