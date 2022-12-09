import React from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink, Route, Router } from 'react-router-dom';
import { Routes } from 'react-router-dom/dist';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import { Link } from 'react-router-dom';


const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/"> Chameleons </NavLogo>

            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <Link to="/" style={{ textDecoration: 'none', color: '#fff'}}> Home </Link>
              </NavItem>
              <NavItem>
                <Link to="/catalog" style={{ textDecoration: 'none', color: '#fff'}}> Catalog </Link>
              </NavItem>
              <NavItem>
                <Link  to="/cart" style={{ textDecoration: 'none', color: '#fff'}}> Cart </Link>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
};

export default Navbar;
