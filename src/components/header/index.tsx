import React, {FC} from 'react'
import {Link} from "gatsby"
import {HeaderWrap, Logo, Nav} from "./index.styled"
import main_logo from "../../assets/images/main_logo_2.svg"
import ContentIntro from "../building/content-intro";

interface IHeader {
  location: Location
}

const Header:FC<IHeader> = ({location}) => {
  return (
    <HeaderWrap>
      <Nav className={'prim'}>
        <Link activeStyle={{opacity:1}} to={'/'}>BUILDING</Link>
        <Link activeStyle={{opacity:1}} to={'/neighborhood'}>NEIGHBORHOOD</Link>
        <Link activeStyle={{opacity:1}} to={'/amenities'}>AMENITIES</Link>
      </Nav>
      {/*<Logo src={main_logo} alt={'Maple Terrace Uptown Dallas'} id={'headerLogo'}/>*/}
      <Nav className={'sec'}>
        <Link activeStyle={{opacity:1}} to={'/team'}>TEAM</Link>
        <Link activeStyle={{opacity:1}} to={'/contact'}>CONTACT</Link>
      </Nav>
    </HeaderWrap>
  );
};

export default Header;