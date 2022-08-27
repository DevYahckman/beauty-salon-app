import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FirstCategory from "./firstCat";
import "../categories/category.css";

function Categories(props) {
  return <Container className="category" fluid="sm">
    <Row>
        <Col><FirstCategory/> </Col>
        <Col></Col>
    </Row>
  </Container>;
}

export default Categories;
