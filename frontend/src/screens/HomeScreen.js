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
import Hero from "../partials/Hero";
import ChooseLanguage from "../partials/ChooseLanguage";
import LanguageExample from "../partials/LanguageExample";

function HomeScreen() {
  return (
    <>
      <Layout>
        <Hero />
        <ChooseLanguage />
        <LanguageExample />
      </Layout>
    </>
  );
}

export default HomeScreen;
