import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>ZITSBY E COMMERCE</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
              <Nav.Link>
                <i className="fas fa-shopping-cart">Cart</i>
              </Nav.Link>
              </LinkContainer>
               <LinkContainer to="/wishlist">
              <Nav.Link href="/wishlist">
                <i className="fas fa-heart">Wishlist</i>
              </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
              <Nav.Link href="/signin">
                <i className="fas fa-user">Sign in</i>
              </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
