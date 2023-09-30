import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { listSubjects } from "../actions/subjectActions";

function ChooseLanguage() {
  // const {id} = useParams()
  const dispatch = useDispatch();
  const subjectList = useSelector((state) => state.subjectList);
  const { subjects } = subjectList;

  useEffect(() => {
    dispatch(listSubjects());
  }, []);
  return (
    <div>
      <div className="text-center">
        <h1 className="fw-bold text-danger">
          <pre className="fs-1">"Choose what to learn"</pre>
        </h1>
        {/* <hr className="w-25 mx-auto bg-danger" /> */}
        <div className="text-warning fs-5">
          Start learning the best programming languages
        </div>
      </div>
      <Row className="justify-content-center p-2">
        {subjects.map((subject) => (
          <Col
            lg={2}
            className="p-3 text-center m-1"
            style={{ backgroundColor: `${subject.color_code}` }}
          >
            <Link
              to={`/${subject.slug}`}
              className="text-decoration-none text-white"
            >
              {subject.name}
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ChooseLanguage;
