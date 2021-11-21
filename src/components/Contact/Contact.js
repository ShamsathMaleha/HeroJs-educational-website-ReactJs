
import React from 'react';
import { Form} from 'react-bootstrap';


const Contact = () => {
  const contactStyle={
  position:'relative',
  height: '400px',
  width:'50%',
  marginLeft:'280px',
  marginTop:'80px',
  }
    return (
        <div style={contactStyle} >
        <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          
          <Form.Control type="email" placeholder="Enter email" />

        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            
            <Form.Control as="textarea" placeholder="Comment here" rows={3} />
        </Form.Group>

        <Form.Group className="mb-4" >
        <button type="button" className="btn btn-warning">Submit</button>
        </Form.Group>
        
      </Form>
      
      </div>
      
    );
};

export default Contact;