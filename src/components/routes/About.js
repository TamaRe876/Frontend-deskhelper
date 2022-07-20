import React from 'react'
import Hero from './Hero'
import about from './images/about.jpg'
import Card from './Card'
import logo from './images/logo.png'
import img from './images/download.svg'
import {Row, Col, Container} from 'react-bootstrap';

export default function About(){
   
    const newLocal = `TechnetJA is network solutions company offering the sales and installation of
    networking devices such as routers, switches and firewalls. We also provide network
    security services such as traffic monitoring, malware/virus removal, geo-blocking and
    remote assistance for quick help.
    We are located in Kingston Jamaica, and provide our services both locally and throughout 
    the Caribbean. Our team consists of Cisco certfied network engineers with the technical skills
    to make your network fast and secure.
    TechnetJA prides itself on providing the highest level of customer support
    in the Caribbean, with our 24/7 on call Helpdesk service, you can submit tickets
    and expect a solution/ response without much wait time. We can help with Active Directory issues,
    hardware and software installation on Linux, Windows and Unix systems.
    `

   



    return(
        <Container>
             
        <Row bg='dark'>
            <Col xs={8}>
        <h1 className='about-title'>
            <img src={logo} alt='technetja logo' className='app-logo' />
            TechnetJA</h1>
            
            <img src={img} alt='network structure' className='home-img' />
            
            <Card 
            title={'About Us'}
            content={newLocal}
            
       
            />
             
             </Col>
                </Row>
        </Container>
       
    )
}