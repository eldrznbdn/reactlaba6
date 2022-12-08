import React from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink, Route, Router } from 'react-router-dom';
import { Routes } from 'react-router-dom/dist';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';


const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
            <NavLogo to = "/"> Chameleons </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to='home'>Home</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='catalog'>Catalog</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='cart'>Cart</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
               <NavBtnLink to="/signin">Sign In</NavBtnLink> 
            </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
