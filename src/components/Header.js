import React from "react";
import Logo from "./images/logo.png"
import Nav from "./Nav"



export default function Header(){

    

    return <div className="container">
        <header className="header">
        <img src={Logo} alt="technetja logo green and white"
        className="app-logo"/>
        <h1 className="logo-txt">TechnetJA</h1>
       
      
      
        <nav className="navbar">
       <Nav />
            
        </nav>
        
        
        </header>
       
    </div>
}