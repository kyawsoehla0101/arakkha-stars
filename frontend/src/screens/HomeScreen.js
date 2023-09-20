import React from "react";
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
import Layout from "../components/Layout";
import LatestCard from "../partials/LatestCard";
import "../index.css";

function HomeScreen() {
  return (
    <>
      <Layout>
        <Row className="py-5">
          <Col lg={6} md={6} className="py-3">
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
        <div className="text-center">
          <h1 className="fw-bold text-danger"><pre className="fs-1">"Choose what to learn"</pre></h1>
          {/* <hr className="w-25 mx-auto bg-danger" /> */}
          <div className="text-warning fs-5">
            Start learning the best programming languages
          </div>
        </div>
        <Row className="justify-content-center p-2">
          <Col lg={2} className="p-3 bg-success text-center m-1">
            <Link to="" className="text-decoration-none text-white">
              Python Programming
            </Link>
          </Col>
          <Col lg={2} className="p-3 bg-dark text-center m-1">
            <Link to="" className="text-decoration-none text-white">
              Dart Programming
            </Link>
          </Col>
          <Col lg={2} className="p-3 bg-danger text-center m-1">
            <Link to="" className="text-decoration-none text-white">
              C# Programming
            </Link>
          </Col>
          <Col lg={2} className="p-3 bg-dark text-center m-1">
            <Link to="" className="text-decoration-none text-white">
              NodeJs Programming
            </Link>
          </Col>

          <Col lg={2} className="p-3 bg-warning text-center m-1">
            <Link to="" className="text-decoration-none text-white">
              Java Programming
            </Link>
          </Col>
          <Col lg={2} className="p-3 bg-danger text-center m-1">
            <Link to="" className="text-decoration-none text-white">
              PHP Programming
            </Link>
          </Col>
          <Col lg={2} className="p-3 bg-warning text-center m-1">
            <Link to="" className="text-decoration-none text-white">
              C++ Programming
            </Link>
          </Col>
          <Col lg={2} className="p-3 bg-success text-center m-1">
            <Link to="" className="text-decoration-none text-white">
              GO Programming
            </Link>
          </Col>
        </Row>
      </Layout>

      <Row className="justify-content-center bg-">
        <Col lg={6}>
          <Row className="py-5">
            <Col lg={6} className="text-center">
              <h1 className="text-dark">Python</h1>
              <div className="fw-bold fs-4 py-3 text-dark">
                A popular programming language
              </div>
              <Link to="" className="">
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
        <Col lg={6}>
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
        <Col lg={6}>
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
    </>
  );
}

export default HomeScreen;
