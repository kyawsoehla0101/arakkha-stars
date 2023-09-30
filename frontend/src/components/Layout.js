import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../index.css'

function Layout({ children }) {
  return (
    <Container className="py-5 mh-100vh">
      {children}
    </Container>
  );
}

export default Layout;
