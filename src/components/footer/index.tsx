import React from 'react';
import {Link} from "gatsby";
import {Wrapper, Copyrights} from "./index.styled";
const Footer = () => {
  return (
    <Wrapper>
      <Link to={"/legal"}/>
      <Copyrights>
        ©2022 Hines
      </Copyrights>
    </Wrapper>
  );
};

export default Footer;