import React from 'react'
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap'

function Hero() {
  return (
    <Row className="py-4">
          <Col lg={6} md={6}>
            <div className="fw-bold text-warning fs-large py-5">
              Learn Programming <br /> for Free
            </div>
            <div className="fs-4">
              Learn to program with our beginner-friendly tutorials and
              examples. Read tutorials, try examples, write code and learn to
              program.
            </div>
            <div className="py-3 fw-bold fs-4">
              Get the Latest tutorials and Update
            </div>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Enter Your Email Address"
                aria-label="Email"
                aria-describedby="basic-addon2"
              />
              <Button variant="primary" id="button-addon2">
                Subscribe
              </Button>
            </InputGroup>
          </Col>
          <Col lg={6} md={6}>
            <Card.Img
              className="img-fluid"
              src="https://img.freepik.com/free-vector/programer-learning-programming-languages-by-computer-laptop-website-tutorial-channel-online-education-class-vector-illustration-software-development-programming-languages-learning_1150-55428.jpg?w=1380&t=st=1695125430~exp=1695126030~hmac=604601c4f90a74014450d0c93846594b72f5b8a6ac837d594f55ca647ef67cc5"
            />
          </Col>
        </Row>
  )
}

export default Hero