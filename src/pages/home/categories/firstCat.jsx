import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './category.css'
function FirstCategory(props) {
    return (
        <div>
            <Row className="categoryOne">
                <Col className="compPhotoOne" ></Col>
                <Col>2</Col>
            </Row>
        </div>
    );
}

export default FirstCategory;