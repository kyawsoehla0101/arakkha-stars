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

function Content() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const contentList = useSelector((state) => state.contentList);
  const lessonList = useSelector((state) => state.lessonList);
  const { contents } = contentList;
  const { lessons } = lessonList;

  useEffect(() => {
    dispatch(listContents(slug));
    dispatch(listLessons(slug));
  }, [dispatch, slug]);

  return (
    <>
      {" "}
      {contents.map((content,index) => (
        <div className="py-1">
          <NavLink
            to={`/${slug}/${content.slug}/`}
            activeClassName="active"
            className="text-decoration-none"
          >
            {index+1}. {content.name}
          </NavLink>
        </div>
      ))}
    </>
  );
}

export default Content;
