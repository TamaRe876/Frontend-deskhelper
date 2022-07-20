import React from 'react'
import {Col, Row, Container} from 'react-bootstrap'


export default function Card(props){
    return (
        <Container>

            <Row>
              <Col>  
            <h4 className='title'>{props.title}</h4>
            <p className='content'>{props.content}</p>
            </Col>
        </Row>
        </Container>
    )

}