import React from 'react'
import Button from 'react-bootstrap/Button'


export default function LoggedOut(){
    return (
        <div>
            <h1>You are logged out</h1>
            <Button variant='Success'>
            <a href='/HelpDesk'>Log In</a>
            </Button>
        </div>
    )
}