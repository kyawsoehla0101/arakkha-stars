import React, { useState } from "react";
import {
  Container,
  Nav,
  Form,
  Button,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

function Header() {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  return (
    <Navbar fixed="top" expand="lg" className="bg-white py-0 fixed">
      <Container>
        <Navbar.Brand href="#home" className="fs-5 fw-bold">
          ARAKKHA STARS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <NavDropdown
              title="Courses"
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
              id="basic-nav-dropdown"
              alignRight
              className="active"
            >
              <NavDropdown.Item href="/publishers/radio">
                Python Programming
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/publishers/podcasters">
                Dart Programming
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/publishers/videopodcasters">
                NodeJs Programming
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/publishers/videopodcasters">
                C# Programming
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className="mx-2 text-dark">Examples</Nav.Link>
            <Nav.Link href="#link" className="mx-2 text-dark">HTML</Nav.Link>
            <Nav.Link href="#link" className="mx-2 text-dark">CSS</Nav.Link>
            <Nav.Link href="#link" className="mx-2 text-dark">JavaScript</Nav.Link>
            <Nav.Link href="#link" className="mx-2 text-dark">Networking</Nav.Link>
            <Nav.Link href="#link" className="mx-2 text-dark">Security</Nav.Link>
            <Nav.Link href="#link" className="mx-2 text-dark">Blogs</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 bg-white"
              aria-label="Search"
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
