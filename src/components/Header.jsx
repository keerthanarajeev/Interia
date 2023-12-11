

import { colors } from '@mui/material';
import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Mail, PhoneCall } from 'react-feather';
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
import Modalex from '../Modal';

function Header() {



  return (
    <div>


      <Navbar expand="lg" className="bg-body-black">
        <Container>

          <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand href="#home" className='text-warning' style={{ fontWeight: 'bold' }}>INTERIA</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav className="me-auto">
                <Nav.Link href="#home" className='text-light'> <span className='effect'>Home</span> </Nav.Link>
                <Nav.Link href="#about" className='text-light'><span className='effect'>About</span></Nav.Link>
                <Nav.Link href="#portfolio" className='text-light'><span className='effect'>Portfolio</span></Nav.Link>
                <Nav.Link href="#contact" className='text-light'><span className='effect'>Contacts</span></Nav.Link>
                <div className="menu"></div>
              </Nav>
          
            </Nav>
  
            <div className="contactus">
        <Nav className="">
          <Nav.Link href="" className='text-light'><span ><Mail style={{ width: '17px' }} /></span>  info@demalinkorg</Nav.Link>
          <Nav.Link href="" className='text-light'><span><PhoneCall style={{ width: '17px' }} /></span>  1-800-901-234</Nav.Link>

          <Nav.Link href="#" className='text-warning' style={{marginTop:'-3%'}} > <Modalex style={{marginTop:'-3%'}}/></Nav.Link>

        </Nav>
      </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>




     



    </div>
  )
}

export default Header