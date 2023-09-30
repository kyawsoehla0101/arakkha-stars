import React from 'react'
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Form,
    InputGroup,
  } from "react-bootstrap";
  import { Link } from "react-router-dom";

function LanguageExample() {
  return (
    <div>
        <Row className="justify-content-center bg-">
        <Col lg={9}>
          <Row className="py-5">
            <Col lg={6} className="text-center">
              <h1 className="text-dark">Python</h1>
              <div className="fw-bold fs-4 py-3 text-dark">
                A popular programming language
              </div>
              <Link to="/python-programmingtAK2" className="">
                <Button>Learn Python</Button>
              </Link>
            </Col>
            <Col lg={6}>
              <div class="card border-dark mb-3">
                <div class="card-header">Python Example:</div>
                <div class="card-body">
                  <code class="card-text">
                  print("Hello, World!")
                  </code>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-center bg-">
        <Col lg={9}>
          <Row className="py-5">
            <Col lg={6} className="text-center">
              <h1 className="text-dark">Dart</h1>
              <div className="fw-bold fs-4 py-3 text-dark">
                A popular mobile programming language
              </div>
              <Link to="" className="">
                <Button>Learn Dart</Button>
              </Link>
            </Col>
            <Col lg={6}>
              <div class="card border-dark mb-3">
                <div class="card-header">Dart Example:</div>
                <div class="card-body">
                  <code class="card-text">
                    void main() {} <br />
                    &emsp; print('Hello, World!');
                  </code>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-center bg-">
        <Col lg={9}>
          <Row className="py-5">
            <Col lg={6} className="text-center">
              <h1 className="text-dark">NodeJs</h1>
              <div className="fw-bold fs-4 py-3 text-dark">
                A popular programming language
              </div>
              <Link to="" className="">
                <Button>Learn Dart</Button>
              </Link>
            </Col>
            <Col lg={6}>
              <div class="card border-dark mb-3">
                <div class="card-header">NodeJs Example:</div>
                <div class="card-body">
                  <code className="card-text">
                    console.log('Hello, World!')
                  </code>
                
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default LanguageExample