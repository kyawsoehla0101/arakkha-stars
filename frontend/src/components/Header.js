import React, { useEffect, useState } from "react";
import {
  Container,
  Nav,
  Form,
  Button,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { listSubjects } from "../actions/subjectActions";

function Header() {
  // const {id} = useParams()
  const dispatch = useDispatch();
  const subjectList = useSelector((state) => state.subjectList);
  const { subjects } = subjectList;

  useEffect(() => {
    dispatch(listSubjects());
  }, []);

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  const show2Dropdown = (e) => {
    setShow2(!show);
  };
  const hide2Dropdown = (e) => {
    setShow2(false);
  };
  return (
    <Navbar fixed="top" expand="lg" className="bg-white py-2 fixed">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="fs-5 fw-bold">
            <span className="text-danger">A</span>
            <span className="text-warning">R</span>
            <span className="text-danger">A</span>
            <span className="text-success">K</span>
            <span className="text-success">K</span>
            <span className="text-dark">H</span>
            <span className="text-danger">A</span>
            <span> </span>
            <span className="text-dark">S</span>
            <span className="text-warning">T</span>
            <span className="text-danger">A</span>
            <span className="text-warning">R</span>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <NavDropdown
              title="Programming Courses"
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
              id="basic-nav-dropdown"
              alignRight
              className="active"
            >
              {subjects.map((subject) => (
                <LinkContainer to={`/${subject.slug}`}>
                  <NavDropdown.Item>{subject.name}</NavDropdown.Item>
                </LinkContainer>
              ))}
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
            <NavDropdown
              title="Basic Courses"
              show={show2}
              onMouseEnter={show2Dropdown}
              onMouseLeave={hide2Dropdown}
              id="basic-nav-dropdown"
              alignRight
              className="active"
            >
              <LinkContainer to="fff">
                <NavDropdown.Item>HTML</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="ff">
                <NavDropdown.Item>CSS</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="f">
                <NavDropdown.Item>JavaScript</NavDropdown.Item>
              </LinkContainer>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>

            {/* <Nav.Link href="#link" className="mx-2 text-dark">
              HTML
            </Nav.Link>
            <Nav.Link href="#link" className="mx-2 text-dark">
              CSS
            </Nav.Link>
            <Nav.Link href="#link" className="mx-2 text-dark">
              JavaScript
            </Nav.Link> */}
            <Nav.Link href="#link" className="mx-2 text-dark">
              Networking
            </Nav.Link>
            <Nav.Link href="#link" className="mx-2 text-dark">
              Security
            </Nav.Link>
            <Nav.Link href="#link" className="mx-2 text-dark">
              Examples
            </Nav.Link>
            <Nav.Link href="#link" className="mx-2 text-dark">
              Blogs
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Examples & Blogs"
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
