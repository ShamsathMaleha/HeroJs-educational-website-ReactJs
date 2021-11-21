import React from 'react';
import { Card } from 'react-bootstrap';
import './About.css';

const About = () => {
const aboutStyle={
    height:'400px',
    marginTop:'100px',
    marginLeft:'280px',
    width:'50%'
}
    return (
        <div style={aboutStyle} >
            <Card>
        <Card.Body>
        
        <Card.Title className="fs-1">MEET OUR TEAM</Card.Title>
       <Card.Text className="fs-4">
       We are all very different. We were born in different cities, at different times, we love different music, food, movies. But we have something that unites us all. It is our company. We are its heart. We are not just a team, we are a family.
      </Card.Text>
      </Card.Body>
        </Card>
        </div>
            );
};

export default About;