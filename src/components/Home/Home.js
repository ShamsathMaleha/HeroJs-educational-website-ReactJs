import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import HomeCourse from '../Utilities/HomeCourse/HomeCourse';

import TopSection from '../Utilities/TopSection';

const Home = (props) => {
  const homeCourse = props.courses.slice(0,4)  
    return (
        <div>
            <TopSection/>
            <Row xs={1} md={2} className="g-4">
            { 
            
                homeCourse.map(course=> <HomeCourse
                    key={course.id}
                    course={course}/>)
            
            }
        
            </Row>
           
        </div>
    );
};

export default Home;