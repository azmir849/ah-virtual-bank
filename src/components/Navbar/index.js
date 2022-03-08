import React from 'react';
import {FaBars} from 'react-icons/fa'
import { MobileIcon, Nav, NavbarContainer, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements'

const Navbar = () => {
  return (
   <>
       <Nav>
           <NavbarContainer>
               <NavLogo to='/'>Virtual Bank</NavLogo>
               <MobileIcon>
                   <FaBars />
               </MobileIcon>
               <NavMenu>
                   <NavItem>
                       <NavLinks to='about'></NavLinks>
                   </NavItem>
               </NavMenu>
           </NavbarContainer>
       </Nav>
   </>
  )
}

export default Navbar