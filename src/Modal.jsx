import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import modalpic from '../../project/src/images/modalpic.png'


function Modalex() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{ backgroundColor: 'orange', marginTop: '18px', width: '155px', fontSize: '12px', color: 'black', textTransform: 'none', fontWeight: 'bolder',border:'none' }}>
        Get a Quote
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
              
             style={{width:'360px',marginLeft:'36%', marginTop:'4%'}} 
              
      >
        <Modal.Header closeButton className='modalback' style={{background : `url(${modalpic})`}}>
            

          <Modal.Title style={{fontWeight:'bolder'}}>Unlock exciting offers by sharing your details</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:'white'}}>

   <div className="formboxmodel" > 
        <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Name" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="email" placeholder="Email ID" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Phone Number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Enter Your Property Pincode" />
      </Form.Group>
      
      <Button variant="primary" type="submit" style={{ backgroundColor: 'orange' , marginTop: '30px', width: '170px', fontSize: '12px', color: 'black', textTransform: 'none', fontWeight: 'bolder',border:'none', marginLeft:'23%' }}>
        GET FREE QUOTE
      </Button>


    </Form>
    </div>
        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default Modalex;