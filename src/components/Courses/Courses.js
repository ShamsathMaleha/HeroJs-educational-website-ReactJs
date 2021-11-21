import React from 'react';
import {  Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Courses.css'

const Courses = (props) => {
  

    return (
  <div>
          <Row xs={1} md={2} className="g-4">
  {
    
    props.courses.map(course=><Course course={course}/>)
  }
</Row>
  </div>
    );
};

export default Courses;