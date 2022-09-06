import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './academyTwo.css'
function AcademyRowTwo(props) {
  return (

    <Row className='academyTwo'>
        <Col></Col>
      <Col xs={10}>
        <p className="academyTwo__paras">
          <span className="academyTwo__para1"> Courses</span>
          <span className="academyTwo__para2">
            {" "}
            Our courses aim to ensure you (the student) understands the basics
            of health & safety, anatomy and physiology of the treatment. This
            manual covers the treatment background, benefits, consultation and
            contra-indications, contra-actions, aftercare, equipment and
            products required to perform the treatment. The practical techniques
            will be covered in the practical session to ensure competency in the
            procedure
          </span>
          <span className="academyTwo__para2">
            {" "}
            At the end of the course, you will be able to perform the treatment
            in a professional, safe and hygienic manner within a commercially
            acceptable time. Along with experience in carrying out a thorough
            consultation with the knowledge of the background, benefits,
            consultation, contra-indications, contra-actions, aftercare,
            equipment and the products needed.
          </span>
        </p>
      </Col>
      <Col></Col>

    </Row>
  );
}

export default AcademyRowTwo;
