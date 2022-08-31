import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./training.css";
function Training(props) {
  return (
    <div className="training">
      <Container fluid sm={6}>
        <Row>
          <Col className="firstTraining">
            <p className="para1" >Training Academy </p>
            <p>
              Our courses aim to ensure you (the student) understands the basics
              of health & safety, anatomy and physiology of the treatment. This
              manual covers the treatment background, benefits, consultation and
              contra-indications, contra-actions, aftercare, equipment and
              products required to perform the treatment.
            </p>
            <button className="btn btn-info">View Curses </button>
          </Col>

          <Col className="secondTraining"> </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Training;
