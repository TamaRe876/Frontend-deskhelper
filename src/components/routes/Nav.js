import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './Home'
import Contact from './Contact'
import About from './About'
import { Container, Row, Col, Navbar } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import logo from './images/logo.svg'
import Services from './Services'
import LoggedIn from './LoggedIn'
import LoggedOut from './LoggedOut'
import HelpDesk from "./HelpDesk";



export default function Nav(){
    return         ( 
        <Container>
            <Row lg className='navbar'>
    <Router>
        <Navbar>
        <Col xs>
            <img 
            src={logo}
            alt='technetja brand'
            width="40"
            height="40"
            />
            </Col>
        
        <Link to="/"  className="link">Home</Link>
        
            <Link to="/Services" className="link">Services</Link>
            
            <Link to="/Contact" className="link">Contact</Link>
            <Link to="/About" className="link">About</Link>
            <Link to="HelpDesk"  >
            <Button variant='danger' className='help-btn'>HelpDesk</Button>
            </Link>
            
            
           
        </Navbar>
        

            <Routes>
            <Route path="/" element={<Home />} />
              
            <Route  path="/Services"element={<Services />} >
                
            </Route>

            <Route  path='/About' element={<About />} >
               
            </Route>

            
            <Route  path='/Contact' element={<Contact />} >
               
            </Route>
            <Route path='/LoggedIn' element={<LoggedIn />}>

            </Route>
            <Route path='/LoggedOut' element={<LoggedOut />}>

            </Route>
            <Route path='/HelpDesk' element={<HelpDesk />}>
                
            </Route>
           
            </Routes>
        </Router>
        </Row>
        </Container>
        )

    
    
}

