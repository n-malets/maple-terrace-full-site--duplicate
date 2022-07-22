import React from "react"
import cert_icon_1 from "../assets/images/building/cert_icon_1.png"
import cert_icon_2 from "../assets/images/building/cert_icon_2.png"
import cert_icon_3 from "../assets/images/building/cert_icon_3.png"
import cert_icon_4 from "../assets/images/building/cert_icon_4.png"
import cert_icon_5 from "../assets/images/building/cert_icon_5.png"

export const Certifications = {
  line1: {
    heading: (
      <>
        SUSTAINABILITY <br /> AND WELLNESS{" "}
      </>
    ),
    icon_1: cert_icon_1,
    icon_2: cert_icon_2,
  },
  line2: {
    desc: (
      <>
        Maple Terrace is being built to <br /> specifications that are
        anticipated to <br /> achieve the following certifications:{" "}
      </>
    ),
    icon_3: cert_icon_3,
    icon_4: cert_icon_4,
    icon_5: cert_icon_5,
  },
  timeLine: [
    {
      title: <>SEPTEMBER 2022</>,
      desc: (
        <>
          Hard Hat <br /> Tours Begin
        </>
      ),
    },
    {
      title: <>MARCH 2023</>,
      desc: (
        <>
          L1–L3 <br /> Ready For Ti
        </>
      ),
    },
    {
      title: <>APRIL 2023</>,
      desc: (
        <>
          L4–L6 <br /> Ready For Ti
        </>
      ),
    },
    {
      title: <>MAY 2023</>,
      desc: (
        <>
          L7–L9 <br /> Ready For Ti
        </>
      ),
    },
    {
      title: <>MAY 2023</>,
      desc: (
        <>
          OFFICE FINAL <br /> COMPLETION
        </>
      ),
    },
  ],
}
