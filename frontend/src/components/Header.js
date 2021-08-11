import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">ZITSBY E COMMERCE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/cart">
                <i className="fas fa-shopping-cart">Cart</i>
              </Nav.Link>
              <Nav.Link href="/wishlist">
                <i className="fas fa-heart">Wishlist</i>
              </Nav.Link>
              <Nav.Link href="/signin">
                <i className="fas fa-user">Sign in</i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
