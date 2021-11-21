import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'

const HomeCourse = (props) => {
  const card = <FontAwesomeIcon icon={faCartPlus}/>
  const cards= {
    marginLeft:'50px',
    marginRight: '50px'
  }
    const {name, img, description, price}=props.course
    return (
        <Col>
            <Card style={cards}>
              <Card.Img variant="top" src={img} height="300px" />
              <Card.Body>
                <Card.Title className="fs-1">{name}</Card.Title>
                <Card.Text className="fs-5">
                  Course Details: {description}
                </Card.Text>
                <Card.Text className="fw-bold">
                  Enroll Fee: {price} BDT
                </Card.Text>
                <Card.Text>
                <button className="btn btn-dark">Enroll Now {card}</button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
    );
};

export default HomeCourse;