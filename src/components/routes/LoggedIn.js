import React from 'react'
import Hesk from './Hesk'

export default function LoggedIn(){
    return (
        <div>
            <h1>Logged In</h1>

            <a href='/LoggedOut'>Log Out</a>
            <Hesk />
            
        </div>
    )
}