

import React from 'react'
import consult from '../../src/images/consult.png'
import './Consultation.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Consultation() {
  return (
    <>
    
    <div className="consult">

         
        

        <div className="consultimage">
 

        </div>

        <div className="contents" style={{width:'500px',marginLeft:'8%'}} > 
            <h2 style={{fontWeight:'900'}}>Let's get started with your dream interiors</h2>
        </div> 

        <div className="consultform">

        <Form>
        <h4>Talk to a Designer </h4>
      <Form.Group className="mb-4 mt-3" controlId="formBasicEmail">
        
        <Form.Control type="text" placeholder="Name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

     
      <Form.Group className="mb-2" controlId="formBasicCheckbox">
      <Form.Control type="number" placeholder="Phone Number" />

        <Form.Check type="checkbox" label="Send me updates on Whatsapp" style={{fontSize:'12px'}} />
      </Form.Group>
      <Form.Group className="mt-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Property Name" />
        <Form.Group className="mt-4 mb-4" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} placeholder='Your Requirement'/>
      </Form.Group>

      </Form.Group>
      <Button variant="primary" type="submit" style={{backgroundColor:'orange'}}>
        Submit
      </Button>
    </Form>
    </div>



    </div>
    
    
    </>
  )
}

export default Consultation