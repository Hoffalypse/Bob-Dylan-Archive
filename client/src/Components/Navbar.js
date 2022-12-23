import React from "react";
import { Navbar, Nav, } from "react-bootstrap";
import "../styles/navbar.css";
import logo from "../assets/images/black-white.jpg"
import { Link } from "react-router-dom";


const AppNavbar = () => {
  return (
    <>
     
       <Navbar
        collapseOnSelect
        className="shadow-sm"
        style={{ height: "13%", backgroundColor: "white" }}
        expand="lg">
          
        <Nav className="me-auto flx">
      
          <Navbar.Brand href="/Bob-Dylan-Archive">
              <img className="logo ml-4 mr-4" src={logo} alt="logo" style={{maxHeight:'100px', margin: '15px 0 0 40px'}}></img>
          </Navbar.Brand> 
          
            <Nav.Link 
            
            href="Bob-Dylan-Archive/homepage"
            className='nav-btn' 
            >
            Homepage</Nav.Link>
            <Nav.Link className='nav-btn'href="#link">Archives</Nav.Link> 
         
        </Nav>
       
      </Navbar>
      
    </>
  );
};

export default AppNavbar;