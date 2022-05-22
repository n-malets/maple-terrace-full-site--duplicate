import React, {FC, useContext} from 'react'
import {Link} from "gatsby"
import {HeaderWrap, Logo, Nav} from "./index.styled"
import {Context} from "../../context/context";
import main_logo from "../../assets/images/main_logo_2.svg"
import ContentIntro from "../building/content-intro";


interface IHeader {
  location: Location
}

const Header:FC<IHeader> = ({location}) => {
  const { setOpenContact } = useContext(Context);
  return (
    <HeaderWrap>
      <Nav className={'prim'}>
        <Link activeStyle={{opacity:1}} to={'/'}>BUILDING</Link>
        <Link activeStyle={{opacity:1}} to={'/neighborhood'}>NEIGHBORHOOD</Link>
        <Link activeStyle={{opacity:1}} to={'/amenities'}>AMENITIES</Link>
      </Nav>
      {/*<Logo src={main_logo} alt={'Maple Terrace Uptown Dallas'} id={'headerLogo'}/>*/}
      <Nav className={'sec'}>
        <span>TEAM</span>
        <span onClick={() => setOpenContact(true)}>CONTACT</span>
      </Nav>
    </HeaderWrap>
  );
};

export default Header;