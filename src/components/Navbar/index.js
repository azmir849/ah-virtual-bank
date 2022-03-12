import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavbarElements";

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
      if(window.scrollY >=80) {
        setScrollNav(true);
      }else{
        setScrollNav(false);
      }
    }

    useEffect(()=>{
      window.addEventListener('scroll', changeNav);
    },[]);

    const toggleHome = () => {
      scroll.scrollToTop();
    }

  return (
    <>
    <IconContext.Provider value={{color: '#01bf71'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>Virtual Bank</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks 
              to='about'
              smooth={true}
              duration={800}
              spy={true}
              exact='true'
              offset={-80}
              // activeClass='active'
              >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
              to='discover'
              smooth={true}
              duration={800}
              spy={true}
              exact='true'
              offset={-80}
              // activeClass='active'
              >Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
              to='services'
              smooth={true}
              duration={800}
              spy={true}
              exact='true'
              offset={-80}
              // activeClass='active'
              >Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
              to='signup'
              smooth={true}
              duration={800}
              spy={true}
              exact='true'
              offset={-80}
              // activeClass='active'
              >Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
