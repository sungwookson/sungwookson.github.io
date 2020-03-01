import React, { Component } from 'react'
import {Navbar, Nav,NavItem, Container} from 'react-bootstrap'
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

export class Navigationitem extends Component {
    render() {
        return this.props.navitems.map( (navitem) => (
            // <LinkContainer to={navitem.link}>
            //     <NavItem >{navitem.title}</NavItem>
            // </LinkContainer>
            <Nav.Link href={navitem.link} >{navitem.title}</Nav.Link>


  //          <Link class="nav-link" to={navitem.link}>{navitem.title}</Link>
        ))
    }
}

export default Navigationitem
