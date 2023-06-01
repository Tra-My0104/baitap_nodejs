import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavbarHeader(props) {
  return (
    <Navbar className="nav" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="#pricing">Orders</Nav.Link>
            <Nav.Link href="/addproducts">Add Products</Nav.Link>
            <Nav.Link href="/adminproducts">Admin Products</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default NavbarHeader;
