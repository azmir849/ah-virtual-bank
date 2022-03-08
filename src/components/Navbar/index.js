import React from 'react'
import { Nav, NavbarContainer, NavLogo } from './NavbarElements'

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