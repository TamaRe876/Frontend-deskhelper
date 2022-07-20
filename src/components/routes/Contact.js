import React from 'react'
import Card from './Card'
import logo from './images/logo.png'
import Button from 'react-bootstrap/Button'
import {Row, Col, Container} from 'react-bootstrap'



export default function Contact(){

    return(
        <Container>
        <Row>
            <Col xs={6}>
        <img src={logo}  alt="technetja logo" className='home-img'/>
            <Card 
            title={`Contact us`}
            content={`
            Please use our helpdesk for quotations, technical support and account queries, for other queries 
            please contact us via our social media accounts at facebook or twitter.
            `}
            />
            <Button variant='danger' className='help-btn'>HelpDesk</Button>
            </Col>
        </Row>
            
        </Container>
    )
}