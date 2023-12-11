import './Home.css';
import background from '../../src/images/bg.jpg';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import aboutimage from '../../src/images/image1.png'
import aboutimage1 from '../../src/images/image3.png'
import one from '../../src/images/one.png'
import two from '../../src/images/two.png'
import three from '../../src/images/three.png'
import Modal from '../Modal';
import Card from 'react-bootstrap/Card';
import Grid from '@mui/material/Grid';
import port1 from '../../src/images/port1.jpg'
import port2 from '../../src/images/port2.jpg'

import port3 from '../../src/images/port3.jpg'
import Modalex from '../Modal';


function Home() {

  const [openModal, setopenModal] = useState(false)


  // function defenition
  const navigate = useNavigate()
  const handleNavigate = () => {

    navigate('/home')
  }

  return (
    <>

      <div className="homepage" style={{ marginTop: '-4%' }}>


        <div className="content-box">
          <div className="content-head">


            <Stack spacing={2}>
              <h4 className='head' style={{ fontWeight: '800', fontSize: '27px' }}>Interior design and decor for your home</h4>
              <span className='para' style={{ color: '#C0C0C0C0', fontSize: '13px' }}>Our team creates comfortable spaces for our clients. We’ve been designing your everyday life and work through great ideas since 1999.</span>
            </Stack>
            <Button onClick={handleNavigate} variant="contained" className='button' >Book free Consultation</Button>

          </div>
        </div>


        <div className="image">

          <img src={background} alt="" className="background" />
        </div>

      </div>


      {/* about */}


      <div className="about" id='about'>



        <div className="content" style={{ color: "black", marginLeft: '55%', width: '27%', paddingTop: '4%', lineHeight: '18px' }}>
          <h4 className='choose' style={{ color: 'black', fontWeight: 'bolder', fontSize: '26px' }}>Why Choose Us</h4>
          <Stack spacing={2} className='choose'>
            <p className='choose' style={{ fontSize: '13px', color: '#424949', justifyContent: 'center', marginTop: '2%' }}> Besides great interior design, there are lots of reasons to choose Interia. Here are some of the most popular ones.</p>
            <span ><h6 style={{ fontWeight: 'bolder' }}><img src={one} alt="" className='num' />Professional Team</h6><span style={{ fontSize: '13px', color: '#424949' }}>Our team includes only the best decorators and interior designers in the industry</span></span>
            <span><h6 style={{ fontWeight: 'bolder' }}><img src={two} alt="" className='num' />Unusual Ideas</h6><span style={{ fontSize: '13px', color: '#424949' }}>Our designers generate various yet always original ideas that will surely fit your needs.</span></span>
            <span><h6 style={{ fontWeight: 'bolder' }}><img src={three} alt="" className='num' />Made with Respect</h6><span style={{ fontSize: '13px', color: '#424949' }}>All our work is built around respect to our clients, great service, and creativity.</span></span>

          </Stack>


          <div className='mode'>

            <Modalex />

          </div>


        </div>
        <div className="abimage">
          <img src={aboutimage} alt="" className="aboutimage" />
          <img src={aboutimage1} alt="" className="aboutimage1" />
        </div>



      </div>



      {/* Portfolio */}
      <h4></h4>

      <div className="portfolio" id='portfolio' style={{ height: '100vh', backgroundColor: 'white', color: 'black'}}>



        <h4 style={{ fontWeight: 'bolder', marginLeft: '10%', paddingTop: '5%', color: 'black', fontSize: '28px' }}>Our Portfolio</h4>
        <div className="port" style={{ marginLeft: '10%', marginTop: '6%' }}>


          <Grid container spacing={2} className='cardres'>
            <div className='cardres' style={{ marginLeft: '7%' }}>

              <Grid item xs={5} >

                <Card style={{ width: '18rem', }} className='card'  >
                  <Card.Img variant="top" src={port1} className="img-card" />
                  <Card.Body>
                    <Card.Title style={{ fontSize: '16px' }}>Swanson Entertainment Center</Card.Title>
                    <Card.Text style={{ fontSize: '12px' }}>
                      2016 Commercial Seattle
                    </Card.Text>
                  </Card.Body>
                </Card>

              </Grid>

              <Grid item xs={4}>
                <Card style={{ width: '18rem', marginLeft: '10%' }} className='card' >
                  <Card.Img variant="top" src={port2} className="img-card" />
                  <Card.Body>
                    <Card.Title style={{ fontSize: '16px' }}>Jane McMillan’s House</Card.Title>
                    <Card.Text style={{ fontSize: '12px' }}>
                      2015 Residential Atlanta
                    </Card.Text>
                  </Card.Body>
                </Card>

              </Grid>
              <Grid item xs={4}>
                <Card style={{ width: '18rem', marginLeft: '20%' }} className='card'>
                  <Card.Img variant="top" src={port3} className="img-card" />
                  <Card.Body>
                    <Card.Title style={{ fontSize: '16px' }}>Divine Concert Hall</Card.Title>
                    <Card.Text style={{ fontSize: '12px' }}>
                      2015 Commercial Sacramento
                    </Card.Text>
                  </Card.Body>
                </Card>

              </Grid>
            </div>
          </Grid>

        </div>






      </div >





    </>
  )
}

export default Home