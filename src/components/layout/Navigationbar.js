import React, { Component } from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import Navigationitem from './Navigationitem'

class Navigationbar extends Component {
  state = {
    leftNavItems : [
      {title: "Home", link: "/"} ,
      {title: "Projects", link: "/project"} ,
      {title: "Contact", link: "/contact"} 
    ],
    rightNavItems : [
      {title: "Resume", link: "https://drive.google.com/file/d/107_ebGIjqSa6AcepCZ0nHHVWOrLNip-9/view?usp=sharing"} 
    ]
  };
  render() {
        return (
          // <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
          //   <LinkContainer to="/">
          //     <Navbar.Brand>Emaily</Navbar.Brand>
          //   </LinkContainer>
          //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
          //   <Navbar.Collapse id="basic-navbar-nav">
          //     <Nav className="ml-auto">
          //       <Nav.Link href="#home">Home</Nav.Link>
          //       <Nav.Link href="#link">Link</Nav.Link>
          //     </Nav>
          //   </Navbar.Collapse>
          // </Navbar>

          
            <Navbar collapseOnSelect bg="dark" variant="dark" sticky="top" expand="sm">
              <LinkContainer to="/">
                <Navbar.Brand>Sungwook Son</Navbar.Brand>
              </LinkContainer>
              
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="mr-auto">
              <Navigationitem navitems={this.state.leftNavItems}></Navigationitem>
            </Nav>
            <Nav>
              <Navigationitem navitems={this.state.rightNavItems}></Navigationitem>
            </Nav>
            </Navbar.Collapse>

          </Navbar>



        )
    }
}

export default Navigationbar
