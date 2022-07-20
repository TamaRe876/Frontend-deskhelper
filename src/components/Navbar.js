import React from 'react'
import Logo from './images/logo.png'

export default function Navbar(){
  const logo = Logo
    return (
       <div className='navbar container'>
        <ul>
          <span><img src={logo} className='app-logo' alt='TechnetJA logo'/></span>
          
          <li><a href='index.html'>Home</a></li>
          <li><a href='index.html'>Services</a></li>
          <li><a href='index.html'>Pricing</a></li>
          <li><a href='index.html'>About</a></li>
          <li><a href='index.html'>Contact</a></li>
        </ul>


        </div>
    )
}