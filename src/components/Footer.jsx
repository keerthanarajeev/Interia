

import React from 'react'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'


function Footer() {
  return (
    <>

    <div className="footer" id='contact' style={{fontSize:'11px',marginTop:'7%'}}>
    <Row>
    <Col lg={2}> </Col>
  <Col lg={2}>
  <Stack spacing={1}>
    <span style={{fontWeight:'bolder'}}>OUR ADDRESS</span> <br />
    <span style={{color:'#C0C0C0C0'}}>2200 Clarendon Blvd., Suite 1400A Arlington, VA 22201, USA</span>
  </Stack>
  </Col>
  <Col lg={2}>
  <Stack spacing={1}>
  <span style={{fontWeight:'bolder'}}>SOCIALS</span>
    <span style={{color:'#C0C0C0C0'}}>Facebook <br />
Instagram <br />
YouTube</span>
</Stack>

  </Col>
  <Col lg={2}>
  <Stack spacing={1}>

  <span style={{fontWeight:'bolder'}}>PHONE</span>
    <span style={{color:'#C0C0C0C0'}} >1-800-901-234</span>
    </Stack>

  </Col>
  <Col lg={2}>
  <Stack spacing={1}>

  <span style={{fontWeight:'bolder'}}>EMAIL</span>
  <span style={{color:'#C0C0C0C0'}}>info@demolink.org</span>
  </Stack>

  </Col>
  <Col lg={2}> </Col>

</Row>
<div className='line' style={{display:'flex',marginTop:'5%'}}>
<hr style={{width:'27%', marginLeft:'18%'}}/> <p className='text-warning' style={{fontWeight:'bold',fontSize:'15px',marginLeft:'3%',marginTop:'5px'}}>INTERIA</p> <hr style={{width:'27%',marginLeft:'2%'}}/>
</div>

<p style={{marginTop:'5%',marginLeft:'40%'}}>©  2023 Interia. All Rights Reserved. Design by Keerthana</p>
    </div>
    
    </>
  )
}

export default Footer