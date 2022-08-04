import React, { FC } from "react"

import { GridRow, TitleRow, Wrapper, Box, FlexRow } from "./index.styled"

interface IContentPartners {
  items: any[]
}

const ContentPartners: FC<IContentPartners> = ({ items }) => {
  return (
    <Wrapper>
      <div>
        <TitleRow>
          <p className="h4">{items[0].title}</p>
        </TitleRow>
        <FlexRow>
          {items[0].items.map((partner: string) => (
            <Box alignBottom key={`partner_${partner}`}>
              <img src={partner} />
            </Box>
          ))}
        </FlexRow>
      </div>
      <div>
        <TitleRow>
          <p className="h4">{items[1].title}</p>
        </TitleRow>
        <GridRow>
          {items[1].items.map((partner: string) => (
            <Box alignBottom={false} key={`partner_${partner}`}>
              <img src={partner} />
            </Box>
          ))}
        </GridRow>
      </div>
    </Wrapper>
  )
}

export default ContentPartners
