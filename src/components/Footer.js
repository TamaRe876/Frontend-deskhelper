import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'

export default function Footer(){
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                <footer>
                <hr />
                <p>&copy; TechnetJA 2022. All rights revserved. <small>Developer: Kemar Henry</small></p>
                </footer>
                </Col>
                </Row>
            </Container>
    )
}
