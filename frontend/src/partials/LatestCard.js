import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function LatestCard() {
  return (
    <Row>
      <Col lg={5}>
        <Card>
          <Link to="">
            <Card.Img src="https://blog.templatetoaster.com/wp-content/uploads/2019/09/What-is-Bootstrap.jpg" />
          </Link>
        </Card>
      </Col>
      <Col lg={7}>
        <Link to="" className="text-warning fs-3 text-decoration-none">
          Bootstrap’s cards provide a flexible and extensible content container
          with multiple variants and options.
        </Link>
        <hr />
        <p>
          <span className="me-5 text-danger">PROGRAMMING</span> Update on 24
          Jul, 2023
        </p>
        <div>
          Bootstrap’s cards provide a flexible and extensible content container
          with multiple variants and options. Bootstrap’s cards provide a
          flexible and extensible content container with multiple variants and
          options. Bootstrap’s cards provide a flexible and extensible content
          container with multiple variants and options.
        </div>
        <Button variant="primary" className="my-3">
          Read Now
        </Button>
      </Col>
    </Row>
  );
}

export default LatestCard;
