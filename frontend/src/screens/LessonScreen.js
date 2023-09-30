import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { Button, Card, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { Link, NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listContents } from "../actions/contentActions";
import { listLessonDetails, listLessons } from "../actions/lessonActions";
import { LinkContainer } from "react-router-bootstrap";
import Content from "../partials/Content";

function LessonScreen() {
  const { slug, contentId } = useParams();
  const dispatch = useDispatch();
  const contentList = useSelector((state) => state.contentList);
  const lessonList = useSelector((state) => state.lessonList);
  const { contents } = contentList;
  // const { lessons } = lessonList;
  const lessonDetails = useSelector((state) => state.lessonDetails);
  const { lesson } = lessonDetails;
  console.log(lesson);
  console.log(contentId);

  useEffect(() => {
    dispatch(listContents(slug));
    // dispatch(listLessons(id));
    dispatch(listLessonDetails(slug, contentId));
  }, [dispatch, slug, contentId]);
  return (
    <Layout>
      <Row className="py-3">
        <Col lg={3}>
          <Card style={{ borderRadius: "5px" }}>
            <Card.Header>{lesson.content?.subject?.name}</Card.Header>
            <Card.Body>
              <Content />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={9}>
          <h3>{lesson.title}</h3>
          <div style={{ lineHeight: "30px" }}>{lesson.decsription}</div>
        </Col>
      </Row>
    </Layout>
  );
}

export default LessonScreen;
