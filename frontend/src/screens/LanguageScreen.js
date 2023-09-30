import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { Button, Card, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { Link, NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listContents } from "../actions/contentActions";
import { listLessons } from "../actions/lessonActions";
import { LinkContainer } from "react-router-bootstrap";
// import Col from 'react-bootstrap/Col';
// import Nav from 'react-bootstrap/Nav';
// import Row from 'react-bootstrap/Row';
// import Tab from 'react-bootstrap/Tab';

function LanguageScreen() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const contentList = useSelector((state) => state.contentList);
  const lessonList = useSelector((state) => state.lessonList);
  const { contents } = contentList;
  const { lessons } = lessonList;
  // const contentslug = lessons.content

  useEffect(() => {
    dispatch(listContents(slug));
    dispatch(listLessons(slug));
  }, [dispatch, slug]);

  return (
    <Layout>
      <Row className="py-3">
        <Col lg={3}>
          <Card style={{  borderRadius: "5px" }}>
            <Card.Header>{lessons.content?.subject?.name}</Card.Header>
            <Card.Body>
              {contents.map((content, index) => (
                <div className="py-1">
                  <NavLink
                    to={`/${slug}/${content.slug}/`}
                    style={{ textDecoration: "none" }}
                    className={
                      content.id == lessons.content?.id ? "active" : ""
                    }
                  >
                    {index + 1}. {content.name}
                  </NavLink>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col lg={9}>
          <h3>{lessons.title}</h3>
          <div style={{ lineHeight: "30px" }}>{lessons.decsription}</div>
        </Col>
      </Row>
    </Layout>
  );
}

export default LanguageScreen;
