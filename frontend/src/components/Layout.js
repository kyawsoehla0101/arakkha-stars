import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../index.css'

function Layout({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default Layout;
