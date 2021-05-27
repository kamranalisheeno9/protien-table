import React,{useState} from 'react';
import Logo from '../logo.svg'
import './common.css';
import { MDBNavbar,Container, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
const Navbar = () => {
  const [navShow,setNavShow]=useState(false)

  const toggle = () => {
    setNavShow(!navShow)
  }
    return (
        <div className="main-container">
            <Container >

              <Router >
            <MDBNavbar className="inner-container" light  expand="md">
        <MDBNavbarBrand>
          <img src={Logo} alt="logo-image" className="logo-img" />
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={()=>toggle()}  />
        <MDBCollapse id="navbarCollapse3" isOpen={navShow}  navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#!">Dynamic tables</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Universal tables</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">My tables</MDBNavLink>
            </MDBNavItem>
           
          </MDBNavbarNav>
         
        </MDBCollapse>
      </MDBNavbar>
      </Router>
      </Container>

        </div>
    );
};

export default Navbar;