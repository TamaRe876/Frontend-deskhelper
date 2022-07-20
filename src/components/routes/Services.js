import React from 'react'
import Hero from './Hero'
import Logo from '../images/logo.png'
import Card from './Card'
import firewall from './images/firewall.png'
import cable from './images/cablingpic.png'
import support from './images/support.png'
import cctv from './images/cctv2.png'
import networkDesign from './images/networkDiagram.png'
import {Row, Container, Col, Button} from 'react-bootstrap'


export default function Home(){

 
  const newLocal = `In an era where technology is a means of survival, network security is pivitol 
  for the longevity of any organization . We offer advanced solutions to maintain
  the integrity of your network from threat actors ranging from firewalls and routing
  protocols to access control and network monitoring.` 

  const newLocal2 = `We will design and install your cabling system that will support multiple
  hardware uses and be suitable for today's needs and those of the future. 
  With a correctly installed system, current and future requirements can be met,
   and hardware that is added in the future will be supported.`
   
   const newLocal3 =`We offer remote support for issues ranging from  software
   installation,worms, malware and virus removal, driver updates,
    operating system tune-ups, printer and device setup.`
  
    const newLocal4 = ` We will tailor the best solution for networking needs 
    ranging from device curation and network programming to Structured cabling.
    Our products include Routers, Switches, Friewalls, Access
    control, security cameras, cabling and network monitoring products and services.`

    const newLocal5 = `We will conduct a free assesment of your location to determine the
    type of cameras you need based on where it's being placed, e.g
    parking lot, indoor/ outdoor, available lighting and other factors
    that may impact quality of service gained from the installation.
    We also provide servicing/ upgrading of previously installed systems.`

   

    return(
        <Container>
          <Row className="justify-content-md-center">
          <Hero 
               
               />
         
        <Col>
  
    
      <img  src={firewall} alt='firewall' className='home-img'/>
      <Card 
      
      title= "Network Security"
      
        content= {newLocal}
         
      
      />
     

      </Col>
      <Col>
   
      <img src={cable} alt='structured cabling' className='home-img' />
     <Card
     title="Structured cabling "
     content={newLocal2}
     />
    </Col>
    <Col>
      <img src={support} alt='support icon' className='home-img' />
      <Card 
      title="Remote Support"
      content={newLocal3}
      />
    </Col>
    </Row>
    <Row>

    
    <Col>
      <img src={networkDesign} className='home-img' />
                    <Card 
                    title= {`Network Design`}
                    content={newLocal4}
                    
                    
                    /></Col>
                    <Col>
                    <img src={cctv} alt='cctv service icon ' className='home-img'/>
                <Card 
                title={`CCTV sales and services`}
                content={newLocal5}

                />
                </Col>
                <Row xs={8}>
                <Button variant='success'>
                    Contact Us
                  </Button>
                  <Col >
                 
                  </Col>

                </Row>
                    
                
                
                </Row>
  </Container>

       
    )
}